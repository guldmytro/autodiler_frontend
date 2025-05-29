// @ts-nocheck
import { PUBLIC_API_URL, PUBLIC_PRODUCTS_PER_PAGE } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getPageOffset } from '$lib/utils';
import { error } from '@sveltejs/kit';
import { getUser, getMeta } from '$lib/utils';
import { fetchProducts } from '$lib/utils';

export const load: PageServerLoad = async ({ locals: { locale, LL }, fetch, params, url, cookies }) => {
    const lang = params?.lang || 'uk';
    const user = await getUser(fetch, cookies);
    const meta = await getMeta(fetch, url);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
    const page = url.searchParams.get('page');
    const offset = getPageOffset(page, PUBLIC_PRODUCTS_PER_PAGE);
    const ordering = url.searchParams.get('ordering');
    
    const term = await fetch(`${apiUrl}category/${params.id}/`).then(res => res.json());
    
    if (!term.id) {
        error(404);
    }
    
    let fetchUrl = `${apiUrl}products/?envelope=true&omit=params,category,description,producer,country,recommended_products&category=${term.id}&limit=${PUBLIC_PRODUCTS_PER_PAGE}`;
    
    if (offset) {
        fetchUrl += `&offset=${offset}`;
    }

    if (ordering) {
        fetchUrl += `&ordering=${ordering}`;
    }

    let resJson = await fetchProducts(fetchUrl, user, fetch, cookies, params);

    return {
        user,
        term,
        products: resJson?.results,
        pagination: {
            currentPage: resJson.current_page,
            totalPages: resJson.total_pages,
            next: resJson.next,
            previous: resJson.previous
        },
        meta,
    };
}