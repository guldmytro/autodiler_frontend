import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { PUBLIC_API_URL } from '$env/static/public'


export const POST: RequestHandler = async ({request}) => {
	const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
    const formData = await request.formData();
    const clientType = String(formData.get('client_type')).trim();
    const productType = String(formData.get('product_type')).trim();
	const name = String(formData.get('name')).trim();
    const phone = String(formData.get('phone')).trim();
    const city = String(formData.get('city')).trim();
    const data = {
        'status': '',
        'errors': {}
    };
	

	if (!phone.length) {
        data.errors.phone = 'required';
	}

    if (!name.length) {
		data.errors.name = 'required';
	}

    if (!city.length) {
		data.errors.city = 'required';
	}

    if (!productType.length) {
		data.errors.productType = 'required';
	}

    if (!clientType.length) {
		data.errors.clientType = 'required';
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
			body: JSON.stringify({name, phone, city, clientType, productType})
		}
		const res = await fetch(`${apiUrl}ds-2/`, options)
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