<script lang="ts">
    import type { Product } from './product';
    import Title from "./Title.svelte";
    import Sku from './Sku.svelte';
    import AddToCart from './AddToCart.svelte';
    import Description from './Description.svelte';
    export let product: Product;
</script>

<div class="product-info">
    <Title title={product.name} />
    <Sku sku={product.sku} />
    <AddToCart {product} />
    <Description description={product?.description} />
</div>

<style>
    .product-info {
        position: sticky;
        top: var(--offset-header);
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 2.8rem;
    }
</style>