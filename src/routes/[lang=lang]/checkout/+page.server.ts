// @ts-ignore
// @ts-nocheck

import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { clearString } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import { getUser } from '$lib/utils';
import { requestWithToken } from '$lib/utils';

export const load: PageServerLoad = async ({fetch, cookies, locals: { LL, locale } }) => {
    const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
    const user = await getUser(fetch, cookies);
    let cart = await fetch('/api/cart').then(r => r.json());

    const ids = cart.items.map((item: { id: any; }) => item.id).join(',');
    if (!ids || ids == '') {
        redirect(302, `/${locale}/cart`);
    }
	const res = await fetch(`${apiUrl}products/?envelope=true&id=${ids}&fields=id,name,price,image,sku,slug`);
    let {results} = await res.json();
    if (!results.length) {
        redirect(302, `/${locale}/cart`);
    }

    let cartItems = cart.items.map((item: { id: any; }) => {
        return {...item, product: results.filter((product: { id: any; }) => product.id == item.id)[0]}
    });
    const total = cartItems.reduce((accumulator: number, item: { cnt: number; product: { price: number; }; }) => {
        return accumulator + item.cnt * item.product.price;
    }, 0);
    cart = {
        total,
        user,
        cnt: cart.cnt,
        items: cartItems,
    }
    return {cart, user};
}

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({request, cookies, fetch, locals: { LL, locale }}) => {
        const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
        const data = {
            success: false,
            errors: {}
        }
		const formData = await request.formData();
        const jsonData = {
            first_name: clearString(formData.get('first_name')),
            last_name: clearString(formData.get('last_name')),
            phone: clearString(formData.get('phone')),
            email: clearString(formData.get('email')),
            delivery: clearString(formData.get('delivery')),
            city: clearString(formData.get('city')),
            nova_office: clearString(formData.get('nova_office')),
            payment: clearString(formData.get('payment')),
            comment: clearString(formData.get('comment')),
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

        if (!jsonData.email) {
            data.errors.email = 'required';
        }

        if (!jsonData.delivery) {
            data.errors.delivery = 'required';
        }

        if (jsonData.delivery === 'nd' && !jsonData.city) {
            data.errors.city = 'required';
        }

        if (jsonData.delivery === 'nd' && !jsonData.nova_office) {
            data.errors.nova_office = 'required';
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
        
        const res = await fetch(`${apiUrl}products/?envelope=true&id=${ids}&fields=id,price`);
        let {results} = await res.json();
        
        cart = cart.items.map((item: { id: any; }) => {
            return {
                product: item.id,
                quantity: item.cnt,
                price: results.filter((product: { id: any; }) => product.id == item.id)[0].price
            }
        });
        
        jsonData['items'] = cart;
        let user;
        try {
            user = await getUser(fetch, cookies);
        } catch(e) {
            console.log(e);
        }

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
                    throw new Error({'message': 'Bad request'})
                });
            }
            data.success = true;
            cookies.set('cart', JSON.stringify([]), {
                path: '/',
                maxAge: 1,
                sameSite: 'lax',
                httpOnly: true
            })
            return res;
        } catch(e) {
            console.log(e);
            data.errors.serverError = true;
            return fail(400, data);
        }      
	}
};