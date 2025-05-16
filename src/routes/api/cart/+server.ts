import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { getCartCount } from '$lib/utils'
import { PUBLIC_API_URL } from '$env/static/public'
import { number } from 'typesafe-i18n/formatters'

export const POST: RequestHandler = async ({request, cookies}) => {
    const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
    const { id, cnt, forceUpdate } = await request.json();
    let cookiecart: string  = cookies.get('cart')!;
    
    let cart: any[];
    
    try {
        cart = JSON.parse(cookiecart);
    } catch(e) {
        cart = [];
    }
    const productInDB = await fetch(`${apiUrl}products/?envelope=true&id=${id}&fields=id,quantity`).then(r => r.json());
    const dbQuantity = productInDB.results[0].quantity;
    const inCart = cart.filter(item => item.id == id).length > 0;
    if (!cookiecart || !inCart) {
        cart.push({
            id,
            cnt
        });
    } else {
        cart = cart.map(item => {
            if (item.id == id) {
                if (forceUpdate) {
                    return {
                        id: item.id,
                        cnt: Math.min(cnt, dbQuantity)
                    };
                }
                return {
                    id: item.id,
                    cnt: Math.min(item.cnt + cnt, dbQuantity)
                };
            }
            return item;
        });
    }
    const cartCount: number = getCartCount(cart);

    cookies.set('cart', JSON.stringify(cart), {
        path: '/',
        maxAge: 604800,
        sameSite: 'lax',
        httpOnly: true
    });

	return json({cnt: cartCount, 'items': cart});
}

export const GET: RequestHandler = async ({cookies}) => {
    const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
    let cart = cookies.get('cart');

    let cnt = 0;
    let items: {id: number, cnt: number}[] = [];

    if (cart) {
        items = JSON.parse(cart);
        const ids = items.map(item => item.id).toString();
        const { results } : { results: {id: number, quantity: number}[] } = await fetch(`${apiUrl}products/?envelope=true&id=${ids}&fields=id,quantity`).then(r => r.json());
        items = items.filter(item => results.filter(result => result.quantity && result.id === item.id).length);
        cookies.set('cart', JSON.stringify(items), {
            path: '/',
            maxAge: 604800,
            sameSite: 'lax',
            httpOnly: true
        });
        cnt = getCartCount(items);
    }
	return json({cnt, items});
}

export const DELETE: RequestHandler = async ({request, cookies }) => {
    const { id } = await request.json();
    let cookiecart: string = cookies.get('cart')!;

    let cart: any[];

    try {
        cart = JSON.parse(cookiecart);
    } catch (e) {
        cart = [];
    }

    cart = cart.filter(item => item.id != id);

    cookies.set('cart', JSON.stringify(cart), {
        path: '/',
        maxAge: 604800,
        sameSite: 'lax',
        httpOnly: true
    });
    const cartCount: number = getCartCount(cart);
    return json({ cnt: cartCount, items: cart });
};
