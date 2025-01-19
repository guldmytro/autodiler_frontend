<script lang="ts">
    export let data;
    import Item from '$lib/components/blog/Item.svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import SectionHeader from '$lib/components/global/SectionHeader.svelte';
    import Pagination from '$lib/components/global/Pagination.svelte';
    import { getMetaValue } from '$lib/utils.js';
    import LL from '$i18n/i18n-svelte';
    import { page } from '$app/stores';
   
    $: extraTitle = getMetaValue(data?.meta, 'title_tag');
    $: extraDescription = getMetaValue(data?.meta, 'meta_description') || false;
    $: extraContent = getMetaValue(data?.meta, 'content') || false;
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{$LL.menu.blog()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {/if}

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.faq.title()}>
    <meta property="og:description" content={$LL.ogDescription()}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content="https://www.avtodiler.com.ua/_app/immutable/assets/shop-2.xx4Bla7R.jpg">
</svelte:head>


<BreadCrumbs items={{}} extraPath="blog/" currentPage={$LL.menu.blog()} />

<main class="posts">
    <div class="container">
        <SectionHeader title={$LL.menu.blog()} />
        {#if Array.isArray(data.posts) && data.posts.length}
            <div class="posts-list-wrapper">
                <ul class="posts-list">
                    {#each data.posts as post }
                        <Item {post} />
                    {/each}
                </ul>
                <Pagination pagination={data.pagination} />
            </div>
        {:else}
            <p>{$LL.menu.empty()}</p>
        {/if}
    </div>
</main>

<style>
    .posts-list {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
    }
    .posts-list-wrapper {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 3.5rem;
        margin-bottom: 6rem;
    }

    @media (max-width: 1199px) {
        .posts-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (max-width: 991px) {
        .posts-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 500px) {
        .posts-list {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
</style>