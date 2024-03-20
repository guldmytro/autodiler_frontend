<script>
    import LL from "$i18n/i18n-svelte";
    import OneClickBuy from "../forms/OneClickBuy.svelte";
    import { activeOneClickBuy } from "$lib/stores/oneclickbuy";
    export let product;
</script>

<div class="one-click-wrapper">
    <button class="button button_bordered" type="button" on:click={() => activeOneClickBuy.set(product.id)}>
        <span>{$LL.addToCartOneClick()}</span>
    </button>
    <OneClickBuy {product} />
</div>

<style>
    .one-click-wrapper {
        position: relative;
    }

    .one-click-wrapper .button_bordered {
        height: 100%;
    }
</style>