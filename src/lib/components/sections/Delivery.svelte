<script>
    import LL from "$i18n/i18n-svelte";
    import bgDelivery from '$lib/assets/img/delivery.jpg';
    import DeliveryText from "./DeliveryText.svelte";
</script>

<main class="delivery">
    <div class="container">
        <div class="section-header">
            <h1 class="section-header__title">{$LL.delivery.title()}</h1>
        </div>
        <div class="delivery-row">
            <DeliveryText />
        </div>
    </div>
    <img src={bgDelivery} alt="фура на трасі" class="delivery-bg" loading="lazy"
    width="1920" height="453">
</main>

<style>
    .container {
        padding-bottom: var(--padding-section);
    }
    
    .delivery-row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 4rem;
    }

    .delivery-bg {
        width: 100%;
    }

    @media (max-width: 991px) {
        .delivery-row {
            grid-template-columns: minmax(0, 1fr);
            row-gap: 4rem;
        }

        .delivery-bg {
            min-height: 27rem;
            object-fit: cover;
        }
    }
</style>