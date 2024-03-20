<script>
    import Faq from '$lib/components/sections/Faq.svelte';
    import LL from '$i18n/i18n-svelte';
    export let data;
</script>

<svelte:head>
	<title>{$LL.faq.title()} - Авто Ділер</title>
</svelte:head>

<Faq faq={data?.faq} />
