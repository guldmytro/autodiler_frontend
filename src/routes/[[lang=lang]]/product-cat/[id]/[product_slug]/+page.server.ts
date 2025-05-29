import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getUser, getMeta } from '$lib/utils';
import { fetchProducts } from '$lib/utils';

export const load: PageServerLoad = async ({ locals: { locale, LL }, url, fetch, params, cookies }) => {
    const lang = params?.lang || 'uk';
    
    const user = await getUser(fetch, cookies);
    const meta = await getMeta(fetch, url);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
    let fetchUrl = `${apiUrl}products/${params.product_slug}/`;
    const item = await fetchProducts(fetchUrl, user, fetch, cookies, params);
    return {item, user, meta};
}

