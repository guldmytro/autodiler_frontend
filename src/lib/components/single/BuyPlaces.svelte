<script>
    import Box from "./Box.svelte";
    import LL from "$i18n/i18n-svelte";
</script>

<Box title={$LL.shopsHeaders()}>
    <ul class="shops">
        <li class="shop-item">
            <em class="shop-item__uptitle">Магазин №1</em>
            <strong class="shop-item__address">{$LL.shopAddressLabel()}: <a class="shop-item__link" href={$LL.shops[0].link()} target="_blank">{$LL.shops[0].address()}</a></strong>
        </li>
    </ul>
</Box>

<style>
    .shop-item {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 0.5em;
    }

    .shop-item__uptitle {
        font-style: normal;
        opacity: 0.7;
    }

    .shop-item__address {
        font-weight: 500;
    }

    .shop-item__link {
        color: blueviolet;
    }
</style>