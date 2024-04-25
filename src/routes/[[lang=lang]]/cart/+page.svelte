<script>
    // @ts-nocheck
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import Table from "$lib/components/cart/Table.svelte";
    import Empty from "$lib/components/cart/Empty.svelte";
    import LL from "$i18n/i18n-svelte";
    export let data;
    const crumbs = {};
</script>

<svelte:head>
	<title>{$LL.cartTitle()} - Авто Ділер</title>
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