<script>
    import Layout from "$lib/components/account/Layout.svelte";
    import OrderDetail from "$lib/components/account/OrderDetail.svelte";
    import LL from "$i18n/i18n-svelte";
    export let data;
</script>

<svelte:head>
	<title>{$LL.account.menu.orders()} - Авто Ділер</title>
</svelte:head>

<Layout>
    <OrderDetail order={data.order} />
</Layout>