// @ts-nocheck
import { PUBLIC_API_URL, PUBLIC_PRODUCTS_PER_PAGE } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getPageOffset } from '$lib/utils';
import { getUser, getMeta } from '$lib/utils';


export const load: PageServerLoad = async ({ locals: { locale, LL }, fetch, url, cookies }) => {
    const user = await getUser(fetch, cookies);
    const meta = await getMeta(fetch, url);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
    const page = url.searchParams.get('page');
    const offset = getPageOffset(page, PUBLIC_PRODUCTS_PER_PAGE);
    const ordering = url.searchParams.get('ordering');
    const s = url.searchParams.get('s') ? String(url.searchParams.get('s')).trim() : false;
    let fetchUrl = `${apiUrl}products/?envelope=true&omit=params,category,description,producer,country&limit=${PUBLIC_PRODUCTS_PER_PAGE}`;
    
    if (offset) {
        fetchUrl += `&offset=${offset}`;
    }

    if (ordering) {
        fetchUrl += `&ordering=${ordering}`;
    }

    if (s) {
        fetchUrl += `&s=${s}`;
    }

    const res = await fetch(fetchUrl);
    const resJson = await res.json();
    return {
        user,
        products: resJson.results,
        pagination: {
            currentPage: resJson.current_page,
            totalPages: resJson.total_pages,
            next: resJson.next,
            previous: resJson.previous
        },
        meta,
        s
    };
}