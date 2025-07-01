import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getUser, getMeta } from '$lib/utils';
import { requestWithToken } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import { fetchProducts } from '$lib/utils';

export const load: PageServerLoad = async ({ locals: { locale, LL }, fetch, url, params, cookies }) => {
    const lang = params?.lang || 'uk';
    const user = await getUser(fetch, cookies);
    const meta = await getMeta(fetch, url);
    let cart = await fetch('/api/cart').then(r => r.json());
    const ids = cart.items.map((item: { id: any; }) => item.id).join(',');

    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
    const fetchUrl = `${apiUrl}products/?envelope=true&id=${ids}&fields=id,name,price,image,sku,slug,quantity,term_slug`;

    let { results } = await fetchProducts(fetchUrl, user, fetch, cookies, params);
    cart = cart.items.map((item: { id: any; }) => {
        return {...item, product: results.filter((product: { id: any; }) => product.id == item.id)[0]}
    });
    
    return {cart, user, meta};
}