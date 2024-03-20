import { browser } from "$app/environment";
import { writable } from "svelte/store";

export async function getUser() {
    if (browser) {
        return {
            username: 'John',
            password: '34'
        }
    }
    return null;
}

export const user = writable(await getUser());