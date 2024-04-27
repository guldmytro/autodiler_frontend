import type { PageServerLoad } from './$types'
import { getUser, getMeta } from '$lib/utils';

export const load: PageServerLoad = async ({locals: { LL }, url, fetch, cookies }) => {
	const user = await getUser(fetch, cookies);
	const meta = await getMeta(fetch, url);
	return {user, meta};
}