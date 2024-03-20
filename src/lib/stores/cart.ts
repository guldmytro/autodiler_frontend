import { writable, get } from "svelte/store";
import { browser } from "$app/environment";
import { invalidateAll } from "$app/navigation";
import { addNotification } from "./notifications";

export async function getCart() {
    if (browser) {
        return await fetch('/api/cart').then(r => r.json());
    }
    return {};
}

export const cart = writable(await getCart());

export async function addItemToCart(id: any, cnt: any, forceUpdate=false, title, price, image) {
    if (browser) {
        const cartData = await fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({id, cnt, forceUpdate})
        }).then(r => r.json());
        cart.set(cartData);
        if (!forceUpdate) {
            addNotification('product', {id, cnt, title, price, image});
        }
        invalidateAll();
    }
}

export async function deleteItemFromCart(id: number) {
    if (browser) {
        cart.set(await fetch('/api/cart', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({id})
        }).then(r => r.json()));
        invalidateAll();
    }
}

export function inCart(id: number) {
    if (browser) {
        return get(cart)['items'].filter((item: { id: number; }) => item.id == id).length > 0
    }
    return false;
}