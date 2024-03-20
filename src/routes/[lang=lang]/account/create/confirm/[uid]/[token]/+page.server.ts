import type { PageServerLoad } from './$types'
import { fail, redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';


export const load: PageServerLoad = async ({locals: { locale }, fetch, cookies, params }) => {
    const apiUrl = PUBLIC_API_URL.replace('[lang]', locale);
    const payload = {
        "uid": params.uid,
        "token": params.token
    };
    const activation = await fetch(`${apiUrl}auth/users/activation/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({uid: params.uid, token: params.token})
    });
    
    if (!activation.ok) {
        console.log(await activation.json());
        throw redirect(302, `/${locale}/account/create/confirm/failed`);
    }
    throw redirect(302, `/${locale}/account/create/confirm/success`)
}