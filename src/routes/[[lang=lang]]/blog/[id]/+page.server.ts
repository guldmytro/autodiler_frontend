import { PUBLIC_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_API_MEDIA } from '$env/static/public';
import { getUser, getMeta } from '$lib/utils';

export const load: PageServerLoad = async ({ locals: { locale, LL }, url, fetch, params, cookies }) => {
    const lang = params?.lang || 'uk';
    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
    const user = await getUser(fetch, cookies);
    const meta = await getMeta(fetch, url);
    try {
        const res = await fetch(`${apiUrl}posts/${params.id}/`);
        if (!res.ok) {
            throw new Error({code: 404, message: 'Not Found'});
        }
        const post = await res.json();
        post.body = String(post.body).replaceAll('/media/', PUBLIC_API_MEDIA);
        return {post, user, meta};

    } catch(e) {
        throw error(404, 'Not found');
    }
}

