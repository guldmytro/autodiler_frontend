<script>
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import LL from "$i18n/i18n-svelte";
    import Contacts from "$lib/components/sections/Contacts.svelte";
</script>

<svelte:head>
	<title>{$LL.contacts.title()} - Авто Ділер</title>
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.contacts.title()} />
<Contacts />

