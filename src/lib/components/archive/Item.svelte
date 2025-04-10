<script>
    // @ts-nocheck
    import Sku from "../single/Sku.svelte";
    import Price from "./Price.svelte";
    import Contorls from "./Contorls.svelte";
    import { locale } from '$i18n/i18n-svelte';
    export let product;
    import NoImage from '$lib/assets/img/no_image-350x350.png';

    $: image = product.image || product.image_src;
    $: title = product.name || product.translation__name;
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>


<a href="/{localePrefix}product-cat/{product.term_slug}/{product.slug}" class="product-item__thumb">
    {#if image}
        <img src={image} alt={title} class="product-item__img" />
    {:else}
        <img src={NoImage} alt="шестерня" class="product-item__img" />
    {/if}
</a>
<h2 class="product-item__title">
    <a href="/{localePrefix}product-cat/{product.term_slug}/{product.slug}" class="product-item__link" {title}>
        {title}
    </a>
</h2>
<Sku sku={product.sku} />
<Price price={product.price} />
<Contorls {product} />


<style>
    .product-item__thumb {
        position: relative;
        height: 0;
        padding-top: 65%;
    }

    .product-item__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .product-item__title {
        font-size: 1.8rem;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .product-item__link {
        color: inherit;
        text-decoration: none;
    }
</style>