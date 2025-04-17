import type { PageServerLoad } from './$types'
import { getUser, requestWithToken } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
import { getPageOffset } from '$lib/utils';
import { PUBLIC_PRODUCTS_PER_PAGE } from '$env/static/public';

export const load: PageServerLoad = async ({locals: { LL, locale }, fetch, params, cookies, url }) => {
	const lang = params?.lang || 'uk';

	const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
	const user = await getUser(fetch, cookies);
	if (!user) {
		throw redirect(303, `/${lang}/account/login`);
	}

	const page = url.searchParams.get('page');
    const offset = getPageOffset(page, PUBLIC_PRODUCTS_PER_PAGE);

	let fetchUrl = `${apiUrl}my-orders/?envelope=true&limit=${PUBLIC_PRODUCTS_PER_PAGE}`;

	if (offset) {
        fetchUrl += `&offset=${offset}`;
    }

	const orders = await requestWithToken(fetchUrl, fetch, cookies);
	return {
		user, 
		orders: orders.results,
		pagination: {
            currentPage: orders.current_page,
            totalPages: orders.total_pages,
            next: orders.next,
            previous: orders.previous
        }
	};
}