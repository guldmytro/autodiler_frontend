import { clearString } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
import { setTokens } from '$lib/utils';
import type { PageServerLoad } from './$types'
import { getUser } from '$lib/utils';
import { redirect } from '@sveltejs/kit';



export const load: PageServerLoad = async ({locals: { LL, locale }, params, fetch, cookies }) => {
    const lang = params?.lang || 'uk';
    const user = await getUser(fetch, cookies);
    if (user) {
        throw redirect(303, `/${lang}/account/dashboard`);
    }
    return {user};
}

export const actions = {
    login: async ({request, cookies, fetch, params, locals: { LL, locale }}) => {
        const lang = params?.lang || 'uk';
        const formData = await request.formData();
        const data = {
            success: false,
            errors: {}
        };
        const jsonData = {
            email: clearString(formData.get('email')),
        };

        if (!jsonData.email) {
            data.errors.email = 'required';
        }

        if (Object.keys(data.errors).length) {
            return fail(418, data);
        }

        // try to login
        try {
            const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
            const tokens = await fetch(`${apiUrl}send-magic-link/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(jsonData)
            }).then(r => {
                if (!r.ok) {
                    throw new Error('Bad Request');
                }
                return r.json();
            });
            return {
                success: true,
                serverData: tokens
            };
        } catch(e) {
            return fail(400, {})
        }
    }
}