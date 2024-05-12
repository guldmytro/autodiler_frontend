import type { PageServerLoad } from './$types';
import { getUser, getMeta } from '$lib/utils';
import { json } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals: { locale, LL }, url, fetch, cookies }) => {
    const user = await getUser(fetch, cookies);
    const meta = await getMeta(fetch, url);
    return {user, meta};
}
