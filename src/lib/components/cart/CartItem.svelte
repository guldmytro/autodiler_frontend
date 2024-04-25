<script lang="ts">
    import { deleteItemFromCart, addItemToCart } from '$lib/stores/cart';
    import { locale } from '$i18n/i18n-svelte';
    import Sku from "../single/Sku.svelte";
    import type { Product } from "../single/product";
    import LL from '$i18n/i18n-svelte';
    export let cartItem: Product;

    let quantity = cartItem.cnt;
    let timer: number | null | undefined = null;

    let loading = false;
    async function deleteItem() {
        loading = true;
        await deleteItemFromCart(cartItem.product.id);
        loading = false;
    }

    function changeQuantity() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(async () => {
            loading = true;
            await addItemToCart(cartItem.product.id, quantity, true);
            loading = false;
        }, 600);
    }

    function decrease() {
        if (quantity > 1) {
            quantity--;
            changeQuantity();
        }
    }

    function increase() {
        quantity++;
        changeQuantity();
    }

    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<tr class="cart-item" class:loading={loading}>
    <td class="cart-item__image">
        <a class="cart-item-img" href="/{localePrefix}product/{cartItem.product.slug}">
            <img src={cartItem.product.image} alt={cartItem.product.name}>
        </a>
    </td>
    <td class="cart-item__info item-info" data-label={$LL.product()}>
        <h2 class="item-info__title">
            <a class="cart-item__link" href="/{localePrefix}product/{cartItem.product.slug}">
                {cartItem.product.name}
            </a>
        </h2>
        <Sku sku={cartItem.product.sku} />
    </td>
    <td class="cart-item__price" data-label={$LL.price()}>
        <p class="price">{cartItem.product.price} <span class="currency">грн.</span></p>
    </td>
    <td class="cart-item__cnt" data-label={$LL.cnt()}>
        <p class="quantity-controls">
            <button class="btn-cnt btn-cnt_minus" type="button" aria-label="Зменшити кількість" on:click={decrease}></button>
            <input class="cnt-input" type="text" inputmode="numeric" bind:value={quantity} disabled>
            <button class="btn-cnt btn-cnt_plus" type="button" aria-label="Збільшити кількість" on:click={increase}></button>
        </p>
    </td>
    <td class="cart-item__total" data-label={$LL.total()}>
        <p class="total">{cartItem.product.price * cartItem.cnt} <span class="currency">грн.</span></p>
    </td>
    <td class="cart-item__delete">
        <button type="button" class="btn-delete" aria-label="видалити товар із корзини"
        on:click={deleteItem}></button>
    </td>
</tr>

<style>
    .cart-item {
        transition: 150ms opacity;
    }

    .cart-item.loading {
        opacity: 0.5;
    }

    .cart-item-img {
        display: block;
        position: relative;
        width: 200px;
        height: 0;
        padding-top: 80%;
    }

    .cart-item-img img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .item-info__title {
        font-size: 2.2rem;
        margin-bottom: 0.6em;
    }

    .cart-item__link {
        color: inherit;
        text-decoration: none;
    }

    .cart-item__link:hover {
        color: var(--color-secondary);
    }

    td:nth-child(n + 2) {
        padding: 0 1.5rem;
    }

    td:last-child {
        padding: 0;
    }

    .price {
        white-space: nowrap;
        font-size: 1.8rem;
    }

    .total {
        white-space: nowrap;
        font-weight: 800;
        font-size: 1.8rem;
    }

    @media (max-width: 1199px) {
        .cart-item__link {
            font-size: 2rem;
        }
    }

    @media (max-width: 991px) {
        .item-info__title {
            margin-bottom: 0;
        }

        .cart-item td {
            padding: 0.5rem 0;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            column-gap: 1rem;
            text-align: right;
            border: none;
        }

        td::before {
            content: attr(data-label);
        }

        :global(.cart-item .sku) {
            display: none;
        }

        .cart-item-img {
            width: 100%;
            padding-top: 60%;
        }

        :global(.cart tbody tr:nth-child(n + 2) td:first-child) {
            border-top: 1px solid var(--color-border);
        }
    }

    @media (max-width: 575px) {
        .cart-item__link {
            font-size: 1.5rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 0;
        }
    }
</style>