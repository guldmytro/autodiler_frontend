<script>
    import LL from "$i18n/i18n-svelte";
    import OneClickBuy from "../forms/OneClickBuy.svelte";
    import { activeOneClickBuy } from "$lib/stores/oneclickbuy";
    export let product;
</script>

<div class="one-click-wrapper">
    {#if product.quantity > 0}    
        <button class="button button_one-click" type="button" on:click={() => activeOneClickBuy.set(product.id)}>
            <span>{$LL.addToCartOneClick()}</span>
        </button>
        <OneClickBuy {product} />
    {:else}
        <span>{$LL.outOfStock()}</span>  
    {/if}
</div>

<style>
    .one-click-wrapper {
        display: flex;
        align-items: center;
        position: relative;
    }

    .button_one-click {
        padding: 0.4em 0.85em;
    }

    :global(.product-info .button_one-click) {
        background-color: transparent;
        color: var(--color-primary);
        padding: 0.8em 2em 0.9em;
        height: 100%;
        font-weight: 600;
    }

    :global(.product-info .button_one-click:hover) {
        background-color: var(--color-primary-hover-2);
    } 

</style>