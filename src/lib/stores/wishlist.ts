import { writable } from "svelte/store";
import { browser } from "$app/environment";

async function getWishlist() {
    if (browser) {
        return await fetch('/api/wishlist').then(r => r.json());
    }
    return {};
}

export const wishlist = writable(await getWishlist());

export async function addItemToWishlist(id: number) {
    if (browser) {
        wishlist.set(await fetch('/api/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({id})
        }).then(r => r.json()));
    }
}

export async function deleteItemFromWishlist(id: number) {
    if (browser) {
        wishlist.set(await fetch('/api/wishlist', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({id})
        }).then(r => r.json()));
    }
}