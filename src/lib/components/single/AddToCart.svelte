<script lang="ts">
    import { browser } from '$app/environment';
    import { locale } from '$i18n/i18n-svelte';
    import { inCart } from '$lib/stores/cart';
    import LL from '$i18n/i18n-svelte';
    import iconCart from '$lib/assets/img/icon-cart.svg';
    import iconCartIn from '$lib/assets/img/icon-cart_in.svg';
    import type { Product } from "./product";
    import { addItemToWishlist, deleteItemFromWishlist, wishlist } from '$lib/stores/wishlist';
    import { addItemToCart } from '$lib/stores/cart';
    import OneClickBuy from './OneClickBuy.svelte';
    export let product: Product;
    let count = 1;
    function decrement() {
        if (count > 1) {
            count--;
        }
    }
    function increment() {
        count++;
    }

    let productInCartExtra = false;
    $: productInCart = inCart(product.id) || productInCartExtra;
    $: inWishlist = browser  && $wishlist?.ids && $wishlist.ids.indexOf(product.id) !== -1;
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
    let wishlistDisabled = false;
    async function handleWishlist() {
        wishlistDisabled = true;
        if (inWishlist) {
            await deleteItemFromWishlist(product.id);
        } else {
            await addItemToWishlist(product.id);
        }
        wishlistDisabled = false;
    }

    async function handleAddToCart() {
        await addItemToCart(product.id, count, false, product.name, product.price, product.image);
        productInCartExtra = true;
    }
    
</script>
<div class="addtocart-controls">
    <div class="row">
        <p class="price">
            <span class="value">{product.price}</span>
            <span class="currency">грн.</span>
        </p>
        <p class="quantity-controls" class:hidden={productInCart}>
            <button class="btn-cnt btn-cnt_minus" type="button" aria-label="Зменшити кількість"
                on:click={decrement} disabled={count < 2}></button>
            <input class="cnt-input" type="text" inputmode="numeric" bind:value={count} disabled>
            <button class="btn-cnt btn-cnt_plus" type="button" aria-label="Збільшити кількість"
                on:click={increment}></button>
        </p>
    </div>
    <div class="row row_streched">
        {#if productInCart}
            <a href="/{localePrefix}cart" class="button">
                <img src={iconCartIn} alt="корзина" width="24" height="24">
                <span>У кошику</span>
            </a>
        {:else}
            <button class="button" type="button" on:click={handleAddToCart}>
                <img width="24" height="24" src={iconCart} alt="корзина">
                <span>{$LL.addToCart()}</span>
            </button>
        {/if}
        <OneClickBuy {product} />
        <div class="add-to-wishlist">
            <button type="button" class="button button_circle" class:added={inWishlist} on:click={handleWishlist} disabled={wishlistDisabled}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="currentColor"/>
                </svg>
            </button>
        </div>
    </div>
</div>

<style>
    .addtocart-controls {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 1.2rem;
    }

    .row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: 2rem;
    }

    .row_streched {
        align-items: stretch;
    }

    .price {
        white-space: nowrap;
        font-size: 2.4rem;
        font-weight: 800;
    }

    @media (max-width: 575px) {
        .row_streched {
            column-gap: 1rem;
            align-items: center;
        }

        .row_streched > * {
            flex-shrink: 0;
        }

        .row_streched .button,
        :global(.row_streched .button_bordered) {
            padding: 1rem 1.5rem;
            font-size: 1.4rem;
        }

        :global(.row_streched .button_bordered) {
            padding-right: 0.4rem;
            padding-left: 0.4rem;
        }
    }
</style>