<script lang="ts">
    import type { Product } from './product';
    import Title from "./Title.svelte";
    import Sku from './Sku.svelte';
    import AddToCart from './AddToCart.svelte';
    import Description from './Description.svelte';
    import DeliveryText from '../sections/DeliveryText.svelte';
    import Vin from './Vin.svelte';
    import Producer from './Producer.svelte';
    import Colors from './Colors.svelte';
    export let product: Product;
</script>

<div class="product-info">
    <Title title={product.name} />
    <Sku sku={product.sku} />
    <Colors children={product.siblings || product.children} />
    <AddToCart {product} />
    <Producer producer={product.producer} />
    <Vin vin={product.vin} />
    <Description description={product?.description} />
    <DeliveryText />
</div>

<style>
    .product-info {
        position: sticky;
        top: var(--offset-header);
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 2.8rem;
    }
    :global(.product-info main.delivery) {
        
    }
</style>