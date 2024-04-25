import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { getUser } from '$lib/utils';

export const load: PageServerLoad = async ({ locals: { locale, LL }, fetch, cookies }) => {
    const user = await getUser(fetch, cookies);
    const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
    const res = await fetch(`${apiUrl}faq/`);
    const faq = await res.json();
    return {faq, user};
}