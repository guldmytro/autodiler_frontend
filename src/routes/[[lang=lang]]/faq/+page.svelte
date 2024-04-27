<script>
    import Faq from '$lib/components/sections/Faq.svelte';
    import LL from '$i18n/i18n-svelte';
    import { getMetaValue } from "$lib/utils";
    import SeoContent from "$lib/components/global/SeoContent.svelte";
    export let data;

    const extraTitle = getMetaValue(data?.meta, 'title_tag');
    const extraDescription = getMetaValue(data?.meta, 'meta_description');
    const extraContent = getMetaValue(data?.meta, 'content');
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{$LL.faq.title()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content=extraDescription>
    {/if}
</svelte:head>

<Faq faq={data?.faq} />
<SeoContent content={extraContent} />
