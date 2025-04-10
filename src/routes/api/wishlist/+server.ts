import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({request, cookies}) => {
    const { id } = await request.json();
    let cookieWishlist: string  = cookies.get('wishlist')!;
    
    let wishlist: any[];
    
    try {
        wishlist = JSON.parse(cookieWishlist);
    } catch(e) {
        wishlist = [];
    }
    
    if (!cookieWishlist) {
        wishlist = [id];
    }

    if (wishlist.indexOf(id) === -1) {
        wishlist.push(id);
    }

    cookies.set('wishlist', JSON.stringify(wishlist), {
        path: '/',
        maxAge: 604800,
        sameSite: 'lax',
        httpOnly: true
    });
	return json({cnt: wishlist.length, 'ids': wishlist});
}

export const GET: RequestHandler = async ({cookies}) => {
    let wishlist = cookies.get('wishlist');
    let cnt = 0;
    let ids = [];
    if (wishlist) {
        ids = JSON.parse(wishlist);
        cnt = ids.length;
    }
	return json({cnt, ids});
}

export const DELETE: RequestHandler = async ({request, cookies }) => {
    const { id } = await request.json();
    let cookieWishlist: string = cookies.get('wishlist')!;

    let wishlist: any[];

    try {
        wishlist = JSON.parse(cookieWishlist);
    } catch (e) {
        wishlist = [];
    }

    const index = wishlist.indexOf(id);
    if (index !== -1) {
        wishlist.splice(index, 1);
    }

    cookies.set('wishlist', JSON.stringify(wishlist), {
        path: '/',
        maxAge: 604800,
        sameSite: 'lax',
        httpOnly: true
    });

    return json({ cnt: wishlist.length, ids: wishlist });
};
