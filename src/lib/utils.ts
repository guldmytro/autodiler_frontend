// @ts-ignore
// @ts-nocheck
import { PUBLIC_API_URL } from "$env/static/public";
import { PUBLIC_API_MEDIA } from '$env/static/public';

export const getCartCount = (cart: { cnt: any }[]): number => {
    return cart.reduce((accumulator: number, item: { cnt: any }) => accumulator + item.cnt, 0);
};


export function pluralize(value: string | number, forms: string) {
    forms = forms.split(', ');
    if (forms.length !== 3) {
        return value;
    }

    try {
        value = parseInt(value);
    } catch (error) {
        return value;
    }

    if (value % 10 === 1 && value % 100 !== 11) {
        return forms[0];
    } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
        return forms[1];
    } else {
        return forms[2];
    }
}

export function clearString(str) {
    if (!str) {
        return null;
    }
    return String(str).trim().replace(/ +(?= )/g,'');
}

export function extractIds(obj, idArray) {
    if (obj.id !== undefined) {
        idArray.push(obj.id);
    }
    if (Array.isArray(obj.children)) {
        obj.children.forEach(child => extractIds(child, idArray));
    }
}

export function getPageOffset(page, postPerPage) {
    let pageInt = parseInt(page, 10);
    if (!page || isNaN(pageInt)) {
        return '';
    }
    pageInt = pageInt < 1 ? 1 : pageInt;
    return (pageInt - 1) * postPerPage;
}

export function generatePagination(currentPage, totalPages) {
    const pagesToShow = 5;
    const pagination = [];

    if (totalPages <= pagesToShow) {
        for (let i = 1; i <= totalPages; i++) {
            pagination.push(i);
        }
        return pagination;
    }

    pagination.push(1);

    let startRange = Math.max(2, currentPage - 2);
    let endRange = Math.min(currentPage + 2, totalPages - 1);

    if (startRange > 2) {
        pagination.push('...');
    }

    for (let i = startRange; i <= endRange; i++) {
        pagination.push(i);
    }

    if (endRange < totalPages - 1) {
        pagination.push('...');
    }
    pagination.push(totalPages);
    return pagination;
}

export function setTokens(cookies, access, refresh) {
	const accessExpire = getExpiryTime(access);
	cookies.set('accessToken', access, {
		path: '/',
		expires: accessExpire,
		sameSite: 'lax',
		httpOnly: true
	});
	const refreshExpire = getExpiryTime(refresh);
	cookies.set('refreshToken', refresh, {
		path: '/',
		expires: refreshExpire,
		sameSite: 'lax',
		httpOnly: true
	});
}


function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function getExpiryTime(jwtToken) {
    const decodedToken = parseJwt(jwtToken);
    if (decodedToken.exp) {
        const expiryTimestamp = decodedToken.exp;
        const expiryDate = new Date(expiryTimestamp * 1000);
		return expiryDate;
    } else {
        return "Token doesn't have an expiry time.";
    }
}

export function requestWithToken(url, fetch, cookies, options={}, recLevel=0) {
	if (options.headers === undefined) {
		options.headers = {};
	}

	let accessToken = cookies.get('accessToken');
	if (accessToken !== null) {
		options.headers.Authorization = `Bearer ${accessToken}`;
	}

	return fetch(url, options).then(async response => {
		if (response.ok) {
			return response.json();
		}
        if (response.status === 400) {
            return response.json();
            throw {code: 400, message: 'bad request'};
        }

		if (response.status === 401) {
			if (recLevel > 0) {
				throw {code: 401, message: 'bad code with tokens refresh'}
			}

			let refreshToken = cookies.get('refreshToken');

			if (refreshToken !== null) {
				const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
				let refreshRes = await fetch(`${apiUrl}token/refresh/`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(
						{'refresh': refreshToken}
					)
				});
				if (refreshRes.ok) {
					let tokens = await refreshRes.json();
					setTokens(cookies, tokens.access, tokens.refresh);
					return await requestWithToken(url, fetch, cookies, options, recLevel + 1);
				}
			}

			throw {code: 401, message: 'refresh token expire'};
		}
	});
}

export async function getUser(fetch, cookies) {
    if (!cookies.get('accessToken') && !cookies.get('refreshToken')) {
        return null;
    }
	try {
		const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
		const user = await requestWithToken(`${apiUrl}profiles/me/`, fetch, cookies);
		return user;
	} catch(e) {
		console.log(e);
		return null;
	}
}

export function emailValidator(value) {
    return value && !!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}


export async function getMeta(fetch, url) {
    try {
        const urlToSearch = String(url.href).endsWith('/') ? url.href.slice(0, -1) : url.href;
        const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
        const res = await fetch(`${apiUrl}seo/?link=${urlToSearch}`);
        if (res.ok) {
            return [{'info': 'Good request for url' + `${apiUrl}seo/?link=${urlToSearch}`}]
            return await res.json();
        }
        throw new Error('Bad request')
    } catch(e) {
        console.log(e);
        return [{'info': 'Bad request for url' + `${apiUrl}seo/?link=${urlToSearch}`}];
    }
}

export function getMetaValue(meta, key) {
    if (!meta || !Array.isArray(meta) || !meta.length) {
        return false;
    }

    if (key === 'content' && meta[0][key]) {
        return String(meta[0][key]).replaceAll('/media/', PUBLIC_API_MEDIA);
    }

    return meta[0][key];
}