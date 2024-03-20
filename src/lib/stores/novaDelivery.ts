import { writable } from "svelte/store";

const initialStore = {
    novaCity: '',
    cityHref: '',
    novaOffice: '',
    showOffices: false,
    offices: [],
};

export const novaDelivery = writable(initialStore);