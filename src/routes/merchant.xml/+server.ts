import { PUBLIC_API_URL } from '$env/static/public';

function cleanText(str:string) {
    return str
        .replace(/&nbsp;/g, ' ')  // Замінюємо &nbsp; на пробіл
        .replace(/<\/?[^>]+(>|$)/g, "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");  // Видаляємо всі HTML-теги
}

export async function GET({fetch}) {
    const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
    let urls = '';
    const products = await fetch(`${apiUrl}products-merchant/`).then(r => r.json());
    products.forEach(product => {
        urls += `
            <item>
                <g:id>${product.id}</g:id>
                <g:title>${product.name}</g:title>
                <g:description>${cleanText(product.description)}</g:description>
                <g:link>https://avtodiler.com.ua/product-cat/${product.term_slug}/${product.slug}</g:link>
                <g:image_link>${product.image || product.image_src}</g:image_link>
                <g:availability>${product.quantity ? 'in_stock' : 'out of stock'}</g:availability>
                <g:price>${product.price} UAH</g:price>
                <g:brand>${product.producer}</g:brand>
                <g:condition>new</g:condition>
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