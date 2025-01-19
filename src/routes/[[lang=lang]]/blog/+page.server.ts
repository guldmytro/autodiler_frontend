import type { PageServerLoad } from './$types'
import { getUser, getMeta } from '$lib/utils';
import { PUBLIC_API_URL, PUBLIC_PRODUCTS_PER_PAGE } from '$env/static/public';
import { getPageOffset } from '$lib/utils';


export const load: PageServerLoad = async ({locals: { LL, locale }, url, fetch, cookies }) => {
	const user = await getUser(fetch, cookies);
	const meta = await getMeta(fetch, url);
    const page = url.searchParams.get('page');
    const offset = getPageOffset(page, PUBLIC_PRODUCTS_PER_PAGE);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
    let fetchUrl = `${apiUrl}posts/?limit=${PUBLIC_PRODUCTS_PER_PAGE}&envelope=true&fields=id,title,excerpt,created,thumbnail`;
    if (offset) {
        fetchUrl += `&offset=${offset}`;
    }

	let posts = {};
    let resJson;
	try {
		resJson = await fetch(fetchUrl).then(r => r.json());
		posts = resJson.results;
	} catch(e) {
		
	}
	return {
        user, 
        posts, 
        meta,
        pagination: {
            currentPage: resJson.current_page,
            totalPages: resJson.total_pages,
            next: resJson.next,
            previous: resJson.previous
        },
    };
}
