<script>
    import MainSearch from "$lib/components/forms/MainSearch.svelte";
    import Advantages from "$lib/components/sections/Advantages.svelte";
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import details from '$lib/assets/img/details.png';
    import Stats from "$lib/components/sections/Stats.svelte";
    import Contacts from "$lib/components/sections/Contacts.svelte";
    import LL from "$i18n/i18n-svelte";
    import Posts from "$lib/components/sections/Posts.svelte";
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
	    <title>{$LL.menu.main()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {/if}
</svelte:head>

<MainSearch />
<Advantages />
<QuestionForm><img src={details} class="questions__img" alt="деталі"></QuestionForm>
<Stats />
<Posts posts={data.posts} />
<Contacts />
<SeoContent content={extraContent} />
