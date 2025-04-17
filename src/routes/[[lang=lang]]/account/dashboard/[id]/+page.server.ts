import type { PageServerLoad } from './$types'
import { getUser, requestWithToken } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';


export const load: PageServerLoad = async ({locals: { LL, locale }, fetch, params, cookies }) => {
	const lang = params?.lang || 'uk';
	const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
	const user = await getUser(fetch, cookies);
	if (!user) {
		throw redirect(303, `/${lang}/account/login`);
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