import { clearString } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
import { setTokens } from '$lib/utils';
import type { PageServerLoad } from './$types'
import { getUser } from '$lib/utils';
import { redirect } from '@sveltejs/kit';



export const load: PageServerLoad = async ({locals: { LL, locale }, fetch, cookies }) => {
	const user = await getUser(fetch, cookies);
	if (user) {
		throw redirect(303, `/${locale}/account/dashboard`);
	}
	return {user};
}

export const actions = {
    login: async ({request, cookies, fetch, locals: { LL, locale }}) => {
        const formData = await request.formData();
        const data = {
            success: false,
            errors: {}
        };
        const jsonData = {
            username: clearString(formData.get('username')),
            password: clearString(formData.get('password'))
        };

        if (!jsonData.username) {
            data.errors.username = 'required';
        }

        if (!jsonData.password) {
            data.errors.password = 'required';
        }

        if (Object.keys(data.errors).length) {
            return fail(418, data);
        }

        // try to login
        try {
            const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
            const tokens = await fetch(`${apiUrl}token/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(jsonData)
            }).then(r => {
                return r.json();
            });
            if (tokens?.access) {
                setTokens(cookies, tokens.access, tokens.refresh);
                return {
                    success: true,
                    access: tokens.access
                };
            }
            return fail(401, {});
        } catch(e) {
            return fail(400, {})
        }
    }
}