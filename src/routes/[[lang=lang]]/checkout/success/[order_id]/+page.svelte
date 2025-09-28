<script>
    import LL from "$i18n/i18n-svelte";
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import SectionHeader from "$lib/components/global/SectionHeader.svelte";
    import { afterNavigate } from "$app/navigation";
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    onMount(() => {
        if (browser) {
            localStorage.setItem("buyed", "true");
        }
    });
    const crumbs = {'parents': [], 'slug': 'cart', 'name_ua': 'Кошик', 'name_ru': 'Корзина'};
    export let data;

    $: items = data?.order?.items.map((item) => {
        return {
            item_id: item.product.id,
            item_name: item.product.name,
            affiliation: 'Avtodiler',
            currency: 'UAH',
            item_brand: item.product.producer,
            item_category: item?.product?.category?.parents[0]?.name_ua,
            item_category2: item?.product?.category?.parents[1]?.name_ua,
            item_category3: item?.product?.category?.name_ua,
            price: Number(item.price.toFixed(2)),
            quantity: item.quantity
        }
    }) || [];

afterNavigate(() => {
    if (!data?.order || data?.order.passed_to_google) return;

    let attempts = 0;
    const maxAttempts = 20; // наприклад, 20 разів по 500мс = 10 секунд

    const interval = setInterval(() => {
        attempts++;

        if (window?.gtag) {
            // тут відправляєш подію
            window.gtag('event', 'purchase', {
                transaction_id: data.order.id,
                value: data.order.get_total_cost,
                currency: 'UAH',
                items
            });


            clearInterval(interval); // зупиняємо перевірку
        }

        if (attempts >= maxAttempts) {
            clearInterval(interval); // перестаємо чекати
            console.warn('gtag не зʼявився протягом 10 секунд');
        }
    }, 500); // перевірка кожні 500мс
});
</script>


<BreadCrumbs items={crumbs} currentPage={$LL.checkoutTitle()} />

<main class="checkout-success">
    <div class="container">
        <div class="success-content">
            <svg height="512" width="512" viewBox="0 0 512.001 512.001" class="success-content__img">
                <path style="fill:#50C878;" d="M256.001,0C114.615,0,0,114.615,0,256.001s114.615,256.001,256.001,256.001  s256.001-114.615,256.001-256.001S397.385,0,256.001,0z"/>
                <path style="fill:#50C878;" d="M256.001,24c-128.13,0-232,103.87-232,232s103.87,232,232,232S488,384.13,488,256.001  S384.13,24,256.001,24z"/>
                <polygon style="fill:#FFFFFF;" points="345.032,137.848 216.896,295.888 163.04,242.728 127.528,281.848 221.056,374.153   384.472,172.608 "/>
            </svg>
            <SectionHeader title={$LL.checkout.success()} />
        </div>
    </div>
</main>

<style>
    .checkout-success {
        padding-bottom: 80px;
    }

    .success-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        row-gap: 1rem;
    }

    .success-content__img {
        height: 5rem;
    }

    @media (max-width: 575px) {
        :global(.checkout-success .section-header) {
            text-align: center;
        }
    }    
</style>