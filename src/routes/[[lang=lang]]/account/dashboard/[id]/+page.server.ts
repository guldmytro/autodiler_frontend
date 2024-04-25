import type { PageServerLoad } from './$types'
import { getUser, requestWithToken } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';


export const load: PageServerLoad = async ({locals: { LL, locale }, fetch, cookies, params }) => {
	const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
	const user = await getUser(fetch, cookies);
	if (!user) {
		throw redirect(303, `/${locale}/account/login`);
	}

    const order = await requestWithToken(`${apiUrl}my-orders/${params.id}/`, fetch, cookies);
    if (order === undefined) {
        throw error(404, {user});
    }
	
	return {
		user,
		order
	};
}