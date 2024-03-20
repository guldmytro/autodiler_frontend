<script>
    import Gallery from '$lib/components/single/Gallery.svelte';
    import Info from '$lib/components/single/Info.svelte';
    import Layout from '$lib/components/single/Layout.svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    export let data;
</script>

<svelte:head>
	<title>{data.item.name} - Авто Ділер</title>
</svelte:head>

<Layout {data}>
    <div class="row">
        <Gallery src={data.item.image} alt={data.item.alt} />
        <Info product={data.item} />
    </div>
</Layout>

<QuestionForm />

<style>
    .row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 3rem;
        align-items: start;
    }

    @media (max-width: 991px) {
        .row {
            grid-template-columns: minmax(0, 1fr);
        }
    }
</style>
