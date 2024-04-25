<script>
    import CartItem from "./CartItem.svelte";
    import { locale } from '$i18n/i18n-svelte';
    import LL from '$i18n/i18n-svelte';
    /**
     * @type {any}
     */
     export let cartItems;
     
     $: total = cartItems.reduce((/** @type {number} */ accumulator, /** @type {{ cnt: number; product: { price: number; }; }} */ item) => {
        return accumulator + item.cnt * item.product.price
     }, 0);

     $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<div class="cart-wrapper">
    <table class="cart">
        <thead>
            <tr>
                <th></th>
                <th>{$LL.product()}</th>
                <th>{$LL.price()}</th>
                <th>{$LL.cnt()}</th>
                <th>{$LL.total()}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each cartItems as cartItem, i}
                <CartItem {cartItem} />
            {/each}
        </tbody>
    </table>
    <div class="cart-footer">
        <a href="/{localePrefix}shop" class="cart-footer__back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{$LL.returnToShop()}</span>
        </a>
        <p class="cart-footer_total">
            <span class="label">{$LL.total2()}</span>
            <span class="sum">
                {total} <span class="currency">грн.</span>
            </span>
        </p>
        <a href="/{localePrefix}checkout" class="button button_secondary">{$LL.checkoutBtn()}</a>
    </div>
</div>

<style>
    .cart-wrapper {
        padding: 0 2.4rem;
        box-shadow: var(--box-shadow);
        border-radius: 1.2rem;
        overflow: hidden;
    }

    .cart {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        text-transform: uppercase;
        font-weight: 500;
        padding: 1.2rem 1rem 1rem;
        border-bottom: 1px solid #f5f5f5;
        font-size: 1.4rem;
        text-align: left;
    }

    :global(.cart tr:nth-child(n + 2) td) {
        border-top: 2px solid #f5f5f5;
    }

    .cart-footer {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        column-gap: 2.5rem;
        margin-left: -2.5rem;
        margin-right: -2.5rem;
        padding-left: inherit;
        padding-right: inherit;
        padding-top: 3rem;
        padding-bottom: 3rem;
        color: var(--color-text-invert);
        background-color: #1c1c1c;
    }

    .cart-footer__back {
        padding: 1rem 0;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        column-gap: 1ch;
        font-weight: 500;
        color: inherit;
        text-decoration: none;
    }

    .cart-footer__back:hover {
        color: var(--color-secondary);
    }

    .cart-footer_total {
        margin-left: auto;
        white-space: nowrap;
        font-size: 2.3rem;
        line-height: 1;
    }

    .cart-footer_total .label {
        font-weight: 700;
    }

    .cart-footer .button {
        font-size: 1.7rem;
    }

    .sum {
        white-space: nowrap;
    }

    @media (max-width: 991px) {
        .cart thead {
            display: none;
        }
    }

    @media (max-width: 767px) {
        .cart-footer {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            /* justify-items: start; */
            row-gap: 2rem;
        }

        .cart-footer_total {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            order: 1;
            margin-left: unset;
        }

        .cart-footer .button {
            order: 2;
        }

        .cart-footer__back {
            margin-top: -1rem;
            order: 3;
        }
    }

    @media (max-width: 575px) {
        .cart-wrapper {
            padding-right: 15px;
            padding-left: 15px;
        }

        .cart-footer {
            margin-right: -15px;
            margin-left: -15px;
        }
    }
</style>