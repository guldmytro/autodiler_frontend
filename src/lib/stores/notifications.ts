// @ts-ignore
// @ts-noncheck
import { writable, get } from "svelte/store";

const initialData = {
    product: [],
    email: [],
    login: []
};

export const notifications = writable(initialData);

export function addNotification(notificationType: string, obj: any) {
    if (!initialData.hasOwnProperty(notificationType)) {
        return;
    }
    if (get(notifications)[notificationType].filter(item => item.id == obj.id).length) {
        return;
    }
    notifications.update((state) => {
        state[notificationType] = [...state[notificationType], obj];
        return state;
    });
}

export function removeNotification(notificationType, id) {
    if (!initialData.hasOwnProperty(notificationType)) {
        return;
    }
    notifications.update(state => {
        state[notificationType] = state[notificationType].filter(item => item.id != id);
        return state;
    });

}