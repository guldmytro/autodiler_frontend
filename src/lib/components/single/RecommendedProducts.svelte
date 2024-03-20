<script>
    import ProductsSlider from "./ProductsSlider.svelte";
    import LL from "$i18n/i18n-svelte";
    export let products;
</script>

{#if Array.isArray(products) && products.length}
    <section class="recommended">
        <div class="container">
            <div class="section-header">
                <h2 class="section-header__title">{$LL.recommenderTitle()}</h2>
            </div>
            <ProductsSlider {products} />
        </div>
    </section>
{/if}

<style>
    .recommended {
        padding-bottom: 7rem;
    }

    .section-header {
        margin-bottom: 6rem;
    }
</style>