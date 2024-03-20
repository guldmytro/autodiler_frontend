<script>
    import Layout from '$lib/components/single/Layout.svelte';
    import Item from '$lib/components/archive/Item.svelte';
    import SectionHeader from '$lib/components/global/SectionHeader.svelte';
    import Params from '$lib/components/single/Params.svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    export let data;
</script>

<svelte:head>
	<title>Характеристики {data.item.name} - Авто Ділер</title>
</svelte:head>

<Layout {data}>
    <div class="grid">
        <div class="params">
            <SectionHeader title={`Характеристики ${data.item.name}`} />
            <Params params={data?.item?.params} />
        </div>
        <div class="grid-inner">
            <div class="archive-product-item">
                <Item product={data.item} />
            </div>
        </div>
    </div>
</Layout>
<QuestionForm />

<style>
    .grid {
        display: grid;
        grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
        gap: 3rem;
        align-items: start;
    }

    .grid-inner,
    .params {
        position: sticky;
        top: var(--offset-header);
    }

    :global(.params .section-header__title) {
        font-size: 2.8rem;
    }

    @media (max-width: 1199px) {
        .grid {
            grid-template-columns: minmax(0, 1fr);
        }

        .params {
            position: static;
        }

        .grid-inner {
            display: none;
        }
    }

    @media (max-width: 575px) {
        :global(.params .section-header__title) {
            font-size: 2rem;
        }
    }

</style>