import type { PageServerLoad } from './$types'
import { getUser } from '$lib/utils';

export const load: PageServerLoad = async ({locals: { LL }, fetch, cookies }) => {
	const user = await getUser(fetch, cookies);
	return {user};
}