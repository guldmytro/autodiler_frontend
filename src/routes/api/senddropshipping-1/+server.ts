import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { PUBLIC_API_URL } from '$env/static/public'


export const POST: RequestHandler = async ({request}) => {
	const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
    const formData = await request.formData();
	const email = String(formData.get('email')).trim();
    const phone = String(formData.get('phone')).trim();
    const data = {
        'status': '',
        'errors': {}
    };
	

	if (!phone.length) {
        data.errors.phone = 'required';
	}

    if (!email.length) {
		data.errors.email = 'required';
	}

    if (Object.keys(data.errors).length) {
        return json(data);
    }

	try {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({email, phone})
		}
		const res = await fetch(`${apiUrl}ds-1/`, options)
			.then(r => {
				if (!r.ok) {
					throw new Error('Bad request');
				}
				return r.json();
			});
		return json({'status': res?.status});
	} catch(e) {
		return json({'status': 'bad'})
	}
}