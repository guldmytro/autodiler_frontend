import { writable } from "svelte/store";

export let menu = writable(false);
export let showTerms = writable(false);
export let mobileMenu = writable(false);
export let termsMenu = writable(false);
export let searchMenu = writable(true);
export let takeOffer = writable(false);
export let dontLeave = writable(false);