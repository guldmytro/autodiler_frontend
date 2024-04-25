import type { PageServerLoad } from './$types'
import { getUser, requestWithToken } from '$lib/utils';
import { fail, redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
import { clearString } from '$lib/utils';


export const load: PageServerLoad = async ({locals: { LL, locale }, fetch, cookies }) => {
	const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
	const user = await getUser(fetch, cookies);
	if (!user) {
		throw redirect(303, `/${locale}/account/login`);
	}

    const profile = await requestWithToken(`${apiUrl}profiles/me/`, fetch, cookies);

	return {
		user,
        profile
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	update: async ({request, cookies, fetch, locals: { LL, locale }}) => {
        const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
        const data = {
            success: false,
            errors: {}
        }
		const formData = await request.formData();
        const jsonData = {
            first_name: clearString(formData.get('first_name')),
            last_name: clearString(formData.get('last_name')),
            phone: clearString(formData.get('phone'))
        };    

        if (!jsonData.first_name) {
            data.errors.first_name = 'required';
        }

        if (!jsonData.last_name) {
            data.errors.last_name = 'required';
        }

        if (!jsonData.phone) {
            data.errors.phone = 'required';
        }

        if (Object.keys(data.errors).length) {
            return fail(400, data);
        }
        try {
            const res = await requestWithToken(`${apiUrl}profiles/me/`, fetch, cookies, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(jsonData)
            });
            return {'status': 'ok'};
        } catch(e) {
            if (e.code === 401) {
                return fail(401, data);
            }
            return fail(500, data);
        }
	}
};