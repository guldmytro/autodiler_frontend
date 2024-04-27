import type { PageServerLoad } from './$types'
import { getUser, getMeta } from '$lib/utils';
import { PUBLIC_API_URL } from '$env/static/public';


export const load: PageServerLoad = async ({locals: { LL, locale }, url, fetch, cookies }) => {
	const user = await getUser(fetch, cookies);
	const meta = await getMeta(fetch, url);
	let posts = {}
	try {
		const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
		const {results} = await fetch(`${apiUrl}posts/?limit=10&envelope=true&fields=id,title,excerpt,created,thumbnail`).then(r => r.json());
		posts = results;
	} catch(e) {
		
	}
	return {user, posts, meta};
}
