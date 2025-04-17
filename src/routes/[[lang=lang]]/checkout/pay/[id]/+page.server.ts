import type { PageServerLoad } from "../$types";
import { PUBLIC_LIQPAY_KEY } from "$env/static/public";
import { PRIVATE_LIQPAY_KEY } from "$env/static/private";
import LiqPay from 'liqpay-sdk-nodejs';
import { PUBLIC_API_URL } from '$env/static/public';
import { error } from "@sveltejs/kit";


export const load: PageServerLoad = async ({fetch, params, url, locals: { LL, locale } }) => {
    const lang = params?.lang || 'uk';
    const apiUrl = PUBLIC_API_URL.replace('[lang]', lang);
    const order = await fetch(`${apiUrl}orders/${params.id}/`).then(r => r.json());
    if (order.payment_method !== 'ol' || order.paid) {
        error(404, { message: 'Not found' });
    }

    const productIds = order.items.map((item: { product: any; }) => item.product).join(',');
    const products = await fetch(`${apiUrl}products/?id=${productIds}&fields=id,name,image`).then(r => r.json());
    order.items = order.items.map(item => {
        const p = products.find(product => product.id == item.product);
        return {...item, productObj: p};
    });

    var liqpay = new LiqPay(PUBLIC_LIQPAY_KEY, PRIVATE_LIQPAY_KEY);
    var html = liqpay.cnb_form({
        'public_key'     : PUBLIC_LIQPAY_KEY,
        'action'         : 'pay',
        'amount'         : order.total_cost,
        'currency'       : 'UAH',
        'description'    : 'Оплата замовлення ' + order.id,
        'order_id'       : order.id,
        'version'        : '3',
        'result_url'     : 'https://avtodiler.com.ua/'+ lang +'/checkout/success',
        'server_url'     : 'https://api.avtodiler.com.ua/payment/webhook/',
        'rro_info'       : {
            "delivery_emails": ["avtoodiler@gmail.com", "lebed@image-avto.com.ua"]
        }
        });
    html = html.replace(
        /<script.*?<\/script>\s*<sdk-button.*?<\/sdk-button>/s,
        `<button type="submit" class="lp-submit">
            <img width="24" height="28" src="https://static.liqpay.ua/buttons/logo-white.svg" />
            <span>Сплатити <strong>${order.total_cost} грн.</strong><span />
        </button>`
    );
    return {
        LiqPayForm : html,
        order
    }
}