import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getUser } from '$lib/utils';

export const load: PageServerLoad = async ({ locals: { locale, LL }, fetch, params, cookies }) => {
    const user = await getUser(fetch, cookies);
    let cart = await fetch('/api/cart').then(r => r.json());
    const ids = cart.items.map((item: { id: any; }) => item.id).join(',');

    const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
    const res = await fetch(`${apiUrl}products/?envelope=true&id=${ids}&fields=id,name,price,image,sku,slug`);
    let {results} = await res.json();
    cart = cart.items.map((item: { id: any; }) => {
        return {...item, product: results.filter((product: { id: any; }) => product.id == item.id)[0]}
    });
    return {cart, user};
}