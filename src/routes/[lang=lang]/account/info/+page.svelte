<script>
    import Layout from "$lib/components/account/Layout.svelte";
    import UserForm from "$lib/components/account/UserForm.svelte";
    import LL from "$i18n/i18n-svelte";
    export let data;
</script>

<svelte:head>
	<title>{$LL.account.menu.info()} - Авто Ділер</title>
</svelte:head>

<Layout>
    <UserForm profile={data.profile} />
</Layout>