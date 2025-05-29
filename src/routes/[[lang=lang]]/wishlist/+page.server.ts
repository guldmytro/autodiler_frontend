// @ts-nocheck
import { PUBLIC_API_URL, PUBLIC_PRODUCTS_PER_PAGE } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getPageOffset } from '$lib/utils';
import { getUser, getMeta } from '$lib/utils';
import { fetchProducts } from '$lib/utils';


export const load: PageServerLoad = async ({ locals: { locale, LL }, cookies, fetch, params, url }) => {
    const lang = params?.lang || 'uk';
    const user = await getUser(fetch, cookies);
    const meta = await getMeta(fetch, url);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
    const page = url.searchParams.get('page');
    const offset = getPageOffset(page, PUBLIC_PRODUCTS_PER_PAGE);
    try {
        if (cookies.get('wishlist') !== undefined) {
            const idArray = JSON.parse(cookies.get('wishlist'));
            if (!idArray.length) {
                return {user}
            }
            const ids = idArray.join(',');
            let fetchUrl = `${apiUrl}products/?envelope=true&id=${ids}&fields=id,name,price,image,sku,slug&limit=${PUBLIC_PRODUCTS_PER_PAGE}`;
            if (offset) {
                fetchUrl += `&offset=${offset}`;
            }
            
            const products = await fetchProducts(fetchUrl, user, fetch, cookies, params);

            return {
                user,
                products: products.results,
                pagination: {
                    currentPage: products.current_page,
                    totalPages: products.total_pages,
                    next: products.next,
                    previous: products.previous
                },
                meta
            }
        }
    } catch(e) {
        console.warn(e);
        return {user};    
    }
    
    

    
    
}