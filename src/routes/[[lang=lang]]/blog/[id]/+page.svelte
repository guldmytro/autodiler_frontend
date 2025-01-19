<script>
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import { getMetaValue } from "$lib/utils";
    import { page } from '$app/stores';
    export let data;

    $: extraTitle = getMetaValue(data?.meta, 'title_tag');
    $: extraDescription = getMetaValue(data?.meta, 'meta_description') || false;
    $: extraContent = getMetaValue(data?.meta, 'content') || false;
    import SeoContent from "$lib/components/global/SeoContent.svelte";
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{data.post.title} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {/if}

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={data.post.title}>
    <meta property="og:description" content={data.post.excerpt}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content={data.post.thumbnail}>
</svelte:head>


<BreadCrumbs items={{id: 2, parents: [{name_ua: 'Корисні матеріали', name_ru: 'Полезные материалы', slug: 'blog'}]}} currentPage={data.post.title} />
<main class="post">
    <div class="container">
        <div class="content-wrapper">
            <div class="text-content">
                <span class="post-date">{new Date(data.post.created).toLocaleDateString()}</span>
                <h1>{data.post.title}</h1>
                {@html data.post.body}
            </div>
        </div>
    </div>
</main>

<SeoContent content={extraContent} />

<style>
    .post {
        padding-bottom: var(--padding-section);
    }

    .post-date {
        display: inline-flex;
        background-color: var(--color-primary);
        color: #fff;
        padding: 7px 9px;
        border-radius: 10px;
        margin-bottom: -10px;
    }

    .content-wrapper {
        max-width: 69rem;
        margin: 0 auto;
    }
</style>