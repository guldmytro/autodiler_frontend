import { writable } from "svelte/store";

export let menu = writable(false);
export let showTerms = writable(false);
export let mobileMenu = writable(false);
export let termsMenu = writable(false);
export let searchMenu = writable(false);
export let takeOffer = writable(false);