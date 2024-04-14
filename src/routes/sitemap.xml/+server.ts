import { PUBLIC_API_URL } from '$env/static/public';


export async function GET({fetch}) {
    const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
    let urls = '';
    const products = await fetch(`${apiUrl}products-sitemap/`).then(r => r.json());
    products.forEach(product => {
        urls += `
            <url>
                <loc>https://avtodiler.com.ua/uk/product/${product.slug}</loc>
                <xhtml:link rel="alternate" hreflang="ru" href="https://avtodiler.com.ua/ru/product/${product.slug}" />
                <xhtml:link rel="alternate" hreflang="uk" href="https://avtodiler.com.ua/uk/product/${product.slug}" />
                <lastmod>${product.updated}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.9</priority>
            </url>
            <url>
                <loc>https://avtodiler.com.ua/ru/product/${product.slug}</loc>
                <xhtml:link rel="alternate" hreflang="ru" href="https://avtodiler.com.ua/ru/product/${product.slug}" />
                <xhtml:link rel="alternate" hreflang="uk" href="https://avtodiler.com.ua/uk/product/${product.slug}" />
                <lastmod>${product.updated}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.9</priority>
            </url>
        `;
    });
    
    const terms = await fetch(`${apiUrl}categories-sitemap/`).then(r => r.json());
    terms.forEach(term => {
        console.log('here')
        urls += `
            <url>
                <loc>https://avtodiler.com.ua/uk/product-cat/${term.slug}</loc>
                <xhtml:link rel="alternate" hreflang="ru" href="https://avtodiler.com.ua/ru/product-cat/${term.slug}" />
                <xhtml:link rel="alternate" hreflang="uk" href="https://avtodiler.com.ua/uk/product-cat/${term.slug}" />
                <lastmod>${term.updated}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.9</priority>
            </url>
            <url>
                <loc>https://avtodiler.com.ua/ru/product/${term.slug}</loc>
                <xhtml:link rel="alternate" hreflang="ru" href="https://avtodiler.com.ua/ru/product-cat/${term.slug}" />
                <xhtml:link rel="alternate" hreflang="uk" href="https://avtodiler.com.ua/uk/product-cat/${term.slug}" />
                <lastmod>${term.updated}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.9</priority>
            </url>
        `;
    });
    return new Response(`
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
        >
        ${urls}
        </urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
}