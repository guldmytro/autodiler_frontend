<script>
    // @ts-nocheck
    import LL from "$i18n/i18n-svelte";
    import ClientInfo from "$lib/components/checkout/ClientInfo.svelte";
    import Order from "$lib/components/checkout/Order.svelte";
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { cart, getCart } from '$lib/stores/cart';
    import { locale } from "$i18n/i18n-svelte";

    import { getMetaValue } from "$lib/utils";
    import SeoContent from "$lib/components/global/SeoContent.svelte";

    const crumbs = {'parents': [], 'slug': 'cart', 'name_ua': 'Кошик', 'name_ru': 'Корзина'};
    export let data;
    export let form;

    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';

    let loading = false;

    function create() {
        loading = true;
        return async ({result, update}) => {
            if (result.type === 'failure') {
                loading = false;
                return await update();
            }
            cart.set(await getCart())
            goto(`/${localePrefix}checkout/${result.data.targetURL}`);
        }
    }

    $: extraTitle = getMetaValue(data?.meta, 'title_tag');
    $: extraDescription = getMetaValue(data?.meta, 'meta_description') || false;
    $: extraContent = getMetaValue(data?.meta, 'content') || false;
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{$LL.checkoutTitle()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {/if}
</svelte:head>

<BreadCrumbs items={crumbs} currentPage={$LL.checkoutTitle()} />

<main class="checkout">
    <div class="container">
        <div class="section-header">
            <h1 class="section-header__title">{$LL.checkoutTitle()}</h1>
        </div>
        <form method="post" action="?/create" class="checkout-form checkout__row" use:enhance={create}>
            <ClientInfo {form} cart={data.cart} user={data.user} />
            <Order cart={data.cart} {loading} />
        </form>
    </div>
</main>
<SeoContent content={extraContent} />

<style>
    .checkout__row {
        display: grid;
        grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
        column-gap: 5rem;
    }

    @media (max-width: 1399px) {
        .checkout__row {
            column-gap: 3rem;
            grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
        }
    }

    @media (max-width: 1199px) {
        .checkout__row {
            column-gap: 2rem;
            grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
        }
    }

    @media (max-width: 991px) {
        .checkout__row {
            row-gap: 2.5rem;
            grid-template-columns: minmax(0, 1fr);
        }
    }
</style>