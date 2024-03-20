import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = ({locals: {locale}}) => {
    redirect(302, `/${locale}/account/login`);
}

export const actions = {
    async default({cookies, fetch}) {
        try {
            const refreshToken = cookies.get('refreshToken');
            const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
            if (refreshToken) {
                const logout = await fetch(`${apiUrl}token/blacklist/`, {
                    method: 'POST',
                    headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(
						{'refresh': refreshToken}
					)
                }).then(r => {
                    if (r.ok) {
                        return r.json();
                    }
                    r.text();
                })
                console.log(logout);
            }
        } catch(e) {
            console.log(e);
        }

        cookies.set('refreshToken', '', {
            path: '/',
            expires: new Date(0),
            sameSite: 'lax',
            httpOnly: true
        });
        cookies.set('accessToken', '', {
            path: '/',
            expires: new Date(0),
            sameSite: 'lax',
            httpOnly: true
        });
    }
}