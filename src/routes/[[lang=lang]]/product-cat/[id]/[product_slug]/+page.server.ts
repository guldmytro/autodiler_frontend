import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getUser } from '$lib/utils';

export const load: PageServerLoad = async ({ locals: { locale, LL }, fetch, params, cookies }) => {
    const user = await getUser(fetch, cookies);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
    const res = await fetch(`${apiUrl}products/${params.product_slug}/`);
    const item = await res.json();
    return {item, user};
}

