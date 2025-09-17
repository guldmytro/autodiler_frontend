<script>
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import Tabs from '$lib/components/single/Tabs.svelte';
    import RecommendedProducts from './RecommendedProducts.svelte';
    import LL from '$i18n/i18n-svelte';
    export let data;
</script>

<BreadCrumbs items={data.item.category} currentPage={data.item.name} extraPath='product-cat/' />

<main class="product">
    <div class="container">
        <slot />
    </div>
</main>

<RecommendedProducts products={data?.item?.recommended_products} />
<RecommendedProducts title={$LL.sameCatProducts()} products={data?.item?.same_category_products} />

<style>
    .container {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 4rem;
    }

    @media (max-width: 575px) {
        .container {
            row-gap: 30px;
        }
    }
</style>
