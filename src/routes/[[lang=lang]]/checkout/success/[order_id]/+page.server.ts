import type { PageServerLoad } from './$types';
import { getUser } from '$lib/utils';
import { PUBLIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({locals: { LL }, fetch, cookies, params }) => {
    const user = await getUser(fetch, cookies);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
    const requestUrl = `${apiUrl}google-orders/${params.order_id}/`;
    const order = await fetch(requestUrl).then(res => res.json());
    return {user, order};
}