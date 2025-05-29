import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getUser } from '$lib/utils';
import { fetchProducts } from '$lib/utils';

export const load: PageServerLoad = async ({ locals: { locale, LL }, fetch, params, cookies }) => {
    const lang = params?.lang || 'uk';
    const user = await getUser(fetch, cookies);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
    const item = await fetchProducts(`${apiUrl}products/${params.id}/`, user, fetch, cookies, params)
    return {item, user};
}
