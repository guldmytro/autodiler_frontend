<script>
    import { locale } from '$i18n/i18n-svelte';
    import { page } from '$app/stores';
    export let product;

    $: pageURL = new URL($page.url).pathname;
</script>

<nav class="product-tabs">
    <a href="/{$locale}/product/{product.slug}" class="product-tabs__link"
        class:product-tabs__link_active={!pageURL.includes('/params')}>Про товар</a>
    {#if Array.isArray(product.params) && product.params.length}
        <a href="/{$locale}/product/{product.slug}/params" class="product-tabs__link"
            class:product-tabs__link_active={pageURL.includes('/params')}>Характеристики</a>
    {/if}
</nav>

<style>
    .product-tabs {
        display: flex;
        flex-flow: row nowrap;
        gap: 2rem;
    }

    .product-tabs__link {
        font-size: 1.4rem;
        color: inherit;
        text-decoration: none;
        transition: color 150ms;
        color: var(--color-text);
        position: relative;
        line-height: 3rem;
    }

    .product-tabs__link_active,
    .product-tabs__link:hover {
        color: var(--color-third);
    }

    .product-tabs__link_active::after {
        content: '';
        display: block;
        height: 1px;
        background-color: var(--color-third);
    }
</style>
