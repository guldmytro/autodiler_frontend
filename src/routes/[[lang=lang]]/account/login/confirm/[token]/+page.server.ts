import { clearString } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
import { setTokens } from '$lib/utils';
import type { PageServerLoad } from './$types'
import { getUser } from '$lib/utils';
import { redirect } from '@sveltejs/kit';



export const load: PageServerLoad = async ({locals: { LL, locale }, params, fetch, cookies }) => {
    const lang = params?.lang || 'uk';
    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);

    const r = await fetch(`${apiUrl}confirm-magic-link/${params.token}/`);
    
    if (r.ok) {
        const {access, refresh} = await r.json();
        setTokens(cookies, access, refresh);
        redirect(303, `/${lang}/account/dashboard`);
    }
}