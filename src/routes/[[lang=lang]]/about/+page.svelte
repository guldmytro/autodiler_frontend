<script>
    import LL from '$i18n/i18n-svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import About from '$lib/components/sections/About.svelte';
    import details from '$lib/assets/img/details.png';
    import { getMetaValue } from "$lib/utils";
    
    export let data;

    const extraTitle = getMetaValue(data?.meta, 'title_tag');
    const extraDescription = getMetaValue(data?.meta, 'meta_description');
    const extraContent = getMetaValue(data?.meta, 'content');
    import SeoContent from "$lib/components/global/SeoContent.svelte";
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{$LL.about.title()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content=extraDescription>
    {/if}
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.about.title()} />
<About />
<QuestionForm><img src={details} class="questions__img" alt="деталі"></QuestionForm>    
<SeoContent content={extraContent} />
