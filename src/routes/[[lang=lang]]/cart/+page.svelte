<script>
    // @ts-nocheck
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import Table from "$lib/components/cart/Table.svelte";
    import Empty from "$lib/components/cart/Empty.svelte";
    import LL from "$i18n/i18n-svelte";
    import { page } from "$app/stores";
    export let data;
    const crumbs = {};
</script>

<svelte:head>
	<title>{$LL.cartTitle()} - Авто Ділер</title>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.cartTitle()}>
    <meta property="og:description" content={$LL.ogDescription()}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content="https://www.avtodiler.com.ua/_app/immutable/assets/shop-2.xx4Bla7R.jpg">
</svelte:head>

<BreadCrumbs items={crumbs} currentPage={$LL.cartTitle()} />
<main class="cart">
    <div class="container">
        <div class="section-header">
            <h1 class="section-header__title">{$LL.cartTitle()}</h1>
        </div>
        {#if data?.cart.length}
            <Table cartItems={data.cart} />
        {:else}
            <Empty />
        {/if}
    </div>
</main>

<style>
    .cart {
        padding-bottom: var(--padding-section);
    }
</style>