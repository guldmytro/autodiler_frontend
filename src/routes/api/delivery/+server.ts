import { PRIVATE_NOVA_POSHTA_API_URL, PRIVATE_NOVA_POSHTA_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({fetch, request}) => {
    const { searchQuery } = await request.json();
    const res = await fetch(PRIVATE_NOVA_POSHTA_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "apiKey": PRIVATE_NOVA_POSHTA_API_KEY,
            "modelName": "Address",
            "calledMethod": "searchSettlements",
            "methodProperties": {
                "CityName": searchQuery,
                "Limit": "20",
                "Page": "1"
            }
        })
    }).then(r => r.json());
	return json(res);
}