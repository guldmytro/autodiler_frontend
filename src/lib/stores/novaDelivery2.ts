import { writable } from "svelte/store";

const initialStore = {
    novaCity: '',
    cityHref: '',
    street: '',
    showStreets: false,
    streets: [],
};

export const novaDelivery2 = writable(initialStore);