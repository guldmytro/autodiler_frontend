import { PUBLIC_API_URL } from '$env/static/public';


export async function GET({fetch}) {
    const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
    let urls = '';
    const products = await fetch(`${apiUrl}products-merchant/`).then(r => r.json());
    products.forEach(product => {
        urls += `
            <item>
                <g:id>${product.id}</g:id>
                <g:title>${product.name}</g:title>
            </item>
        `;
    });

    return new Response(`
        <?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
            <channel>
                ${urls}
            </channel>
        </rss>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
}