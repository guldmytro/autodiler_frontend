import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { getCartCount } from '$lib/utils'

export const POST: RequestHandler = async ({request, cookies}) => {
    const { id, cnt, forceUpdate } = await request.json();
    let cookiecart: string  = cookies.get('cart')!;
    
    let cart: any[];
    
    try {
        cart = JSON.parse(cookiecart);
    } catch(e) {
        cart = [];
    }
    
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
                        cnt: cnt
                    };
                }
                return {
                    id: item.id,
                    cnt: item.cnt + cnt
                };
            }
            return item;
        });
    }
    const cartCount: number = getCartCount(cart);

    cookies.set('cart', JSON.stringify(cart), {
        path: '/',
        maxAge: 31536000,
        sameSite: 'lax',
        httpOnly: true
    });

	return json({cnt: cartCount, 'items': cart});
}

export const GET: RequestHandler = async ({cookies}) => {
    let cart = cookies.get('cart');
    let cnt = 0;
    let items = [];
    if (cart) {
        items = JSON.parse(cart);
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
        maxAge: 31536000,
        sameSite: 'lax',
        httpOnly: true
    });
    const cartCount: number = getCartCount(cart);
    return json({ cnt: cartCount, items: cart });
};
