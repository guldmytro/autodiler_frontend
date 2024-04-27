<script>
    import SectionHeader from "$lib/components/global/SectionHeader.svelte";
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    export let data;
</script>


<BreadCrumbs items={{}} currentPage={data.post.title} />
<main class="post">
    <div class="container">
        <SectionHeader title={data.post.title} />
        <div class="post__content">
            {@html data.post.body}
        </div>
    </div>
</main>

<style>
    .post {
        padding-bottom: var(--padding-section);
    }
</style>