// @ts-ignore
// @ts-nocheck

import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { clearString } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import { getUser, getMeta } from '$lib/utils';
import { requestWithToken } from '$lib/utils';
import { fetchProducts } from '$lib/utils';

export const load: PageServerLoad = async ({fetch, cookies, url, params, locals: { LL, locale } }) => {
    const lang = params?.lang || 'uk';
    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
    const user = await getUser(fetch, cookies);
    const meta = await getMeta(fetch, url);
    let cart = await fetch('/api/cart').then(r => r.json());

    const ids = cart.items.map((item: { id: any; }) => item.id).join(',');
    if (!ids || ids == '') {
        redirect(302, `/${lang}/cart`);
    }
    let fetchUrl = `${apiUrl}products/?envelope=true&id=${ids}&fields=id,name,price,image,sku,slug,category,producer`;
    let { results } = await fetchProducts(fetchUrl, user, fetch, cookies, params);

    if (!results.length) {
        redirect(302, `/${lang}/cart`);
    }

    let cartItems = cart.items.map((item: { id: any; }) => {
        return {...item, product: results.filter((product: { id: any; }) => product.id == item.id)[0]}
    });
    const total = cartItems.reduce((accumulator: number, item: { cnt: number; product: { price: number; }; }) => {
        return accumulator + item.cnt * item.product?.price;
    }, 0);
    cart = {
        total,
        user,
        cnt: cart.cnt,
        items: cartItems,
        meta,
    }
    return {cart, user};
}

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({request, cookies, params, fetch, locals: { LL, locale }}) => {
        const lang = params?.lang || 'uk';
        const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
        const utm = cookies.get('utm');
        
        const data = {
            success: false,
            errors: {}
        }
		const formData = await request.formData();
        const delivery = clearString(formData.get('delivery'));
        const city = delivery === 'nd' ? 
                    clearString(formData.get('city')) : delivery === 'xd' ? clearString(formData.get('city2')) : '';
        const nova_office = delivery === 'nd' ? 
                    clearString(formData.get('nova_office')) : '';
        const address = delivery === 'xd' ? clearString(formData.get('address')) : '';
        const jsonData = {
            first_name: clearString(formData.get('first_name')),
            last_name: clearString(formData.get('last_name')),
            phone: clearString(formData.get('phone')),
            // email: clearString(formData.get('email')),
            delivery,
            city,
            nova_office,
            address,
            payment_method: clearString(formData.get('payment_method')),
            comment: clearString(formData.get('comment')),
            dont_callback: formData.get('dont_callback') === 'on' ? 1 : 0,
            utm
        };  

        if (!jsonData.first_name) {
            data.errors.first_name = 'required';
        }

        if (!jsonData.last_name) {
            data.errors.last_name = 'required';
        }

        if (!jsonData.phone) {
            data.errors.phone = 'required';
        }

        // if (!jsonData.email) {
        //     data.errors.email = 'required';
        // }

        if (!jsonData.delivery) {
            data.errors.delivery = 'required';
        }

        if (jsonData.delivery === 'nd' && !jsonData.city) {
            data.errors.city = 'required';
        }

        if (jsonData.delivery === 'nd' && !jsonData.nova_office) {
            data.errors.nova_office = 'required';
        }

        if (jsonData.delivery === 'xd' && !jsonData.city) {
            data.errors.city2 = 'required';
        }

        if (jsonData.delivery === 'xd' && !jsonData.address) {
            data.errors.address = 'required';
        }

        if (Object.keys(data.errors).length) {
            return fail(400, data);
        }

        if (!cookies.get('userId')) {
            cookies.set('userId', uuidv4(), {
                path: '/',
                maxAge: 31536000,
                sameSite: 'lax',
                httpOnly: true
            });
        }

        jsonData['user_uuid'] = cookies.get('userId');

        if (!jsonData.city) {
            delete jsonData['city'];
        }
        if (!jsonData.nova_office) {
            delete jsonData['nova_office'];
        }
        if (!jsonData.comment) {
            delete jsonData['comment'];
        }

        let cart = await fetch('/api/cart').then(r => r.json());
        const ids = cart.items.map((item: { id: any; }) => item.id).join(',');
        
        let user;
        try {
            user = await getUser(fetch, cookies);
        } catch(e) {
            console.log(e);
        }

        let fetchUrl = `${apiUrl}products/?envelope=true&id=${ids}&fields=id,price`;
        let { results } = await fetchProducts(fetchUrl, user, fetch, cookies, params);
        
        cart = cart.items.map((item: { id: any; }) => {
            return {
                product: item.id,
                quantity: item.cnt,
                price: results.filter((product: { id: any; }) => product.id == item.id)[0]?.price
            }
        });
        
        jsonData['items'] = cart;

        try {
            let res;
            if (user) {
                res = await requestWithToken(`${apiUrl}orders/`, fetch, cookies, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(jsonData)
                });
            } else {
                res = await fetch(`${apiUrl}orders/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(jsonData)
                }).then(r => {
                    if (r.ok) {
                        return r.json();
                    }
                    throw new Error('Bad request');
                });
            }

            data.success = true;
            cookies.set('cart', JSON.stringify([]), {
                path: '/',
                maxAge: 1,
                sameSite: 'lax',
                httpOnly: true
            })
            const pm = clearString(formData.get('payment_method'));
            if (pm === 'od') {
                data.targetURL = `success/${res.id}`;
            } else if (pm === 'mb') {
                const { pageUrl } = await fetch(`${apiUrl}orders/${res.id}/get_monobank_link/`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                    }
                ).then(r => r.json());
                data.targetURL = pageUrl;
            } else if (pm === 'ol') {
                data.targetURL = 'pay/' + res.id;
            }
            return data;
        } catch(e) {
            console.error(e);
            data.errors.serverError = true;
            return fail(400, data);
        }      
	}
};