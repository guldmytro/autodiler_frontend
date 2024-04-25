import type { PageServerLoad } from './$types'
import { getUser } from '$lib/utils';
import { fail, redirect } from '@sveltejs/kit';
import { clearString } from '$lib/utils';
import { emailValidator } from '$lib/utils';
import { PUBLIC_API_URL } from '$env/static/public';


export const load: PageServerLoad = async ({locals: { locale }, fetch, cookies }) => {
	const user = await getUser(fetch, cookies);
	if (user) {
		throw redirect(303, `/${locale}/account/dashboard`);
	}
	return {user};
}

export const actions = {
	create: async ({request, locals: { locale }}) => {
		const formData = await request.formData();
		const data = {
            success: false,
            errors: {}
        };
		const jsonData = {
            username: clearString(formData.get('username')),
			email: clearString(formData.get('username')),
            password: clearString(formData.get('password'))
        };
		const password2 = clearString(formData.get('password2'));
		
		if (!jsonData.username) {
            data.errors.username = 'required';
        } else if (!emailValidator(jsonData.username)) {
			data.errors.username = 'invalid';
		}

		if (jsonData.password !== password2) {
			data.errors.password = 'match';
		} else if (String(jsonData.password).length < 8) {
			data.errors.password = 'minLength';
		}
		
		if (Object.keys(data.errors).length) {
			return fail(400, data);
		}

		try {
			const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
			const res = await fetch(`${apiUrl}auth/users/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(jsonData)
			});
			if (res.ok) {
				data.success = true;
				return {data}
			}
			const errors = await res.json();
			data.apiErrors = errors;
			return fail(400, data);

		} catch(e) {
			return fail(500, data);
		}

	}
}