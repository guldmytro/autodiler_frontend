<script>
    import Layout from "$lib/components/account/Layout.svelte";
    import OrdersList from "$lib/components/account/OrdersList.svelte";
    import LL from "$i18n/i18n-svelte";

    export let data;
</script>

<svelte:head>
	<title>{$LL.account.menu.orders()} - Авто Ділер</title>
</svelte:head>

<Layout>
    <OrdersList orders={data.orders} pagination={data.pagination} />
</Layout>