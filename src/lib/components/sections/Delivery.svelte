<script>
    import LL from "$i18n/i18n-svelte";
    import iconDelivery from '$lib/assets/img/icon-delivery.png';
    import iconCash from '$lib/assets/img/icon-cards.png';
    import iconUrkPoshta from '$lib/assets/img/urkposhta.png';
    import iconNovaPoshta from '$lib/assets/img/novaposhta.png';
    import iconDeliveryService from '$lib/assets/img/delivery.png';
    import bgDelivery from '$lib/assets/img/delivery.jpg';
</script>

<main class="delivery">
    <div class="container">
        <div class="section-header">
            <h1 class="section-header__title">{$LL.delivery.title()}</h1>
        </div>
        <div class="delivery-row">
            <div class="col">
                <h2 class="delivery-title">
                    <img src={iconDelivery} alt="грузовик" width="120" height="80" class="delivery-title__icon">
                    <span class="delivery-title__text">{$LL.delivery.delivery.title()}</span>
                </h2>
                <p class="delivery_p">{$LL.delivery.delivery.p()}</p>
                <ul class="delivery-group">
                    <li class="delivery-group__item">{$LL.delivery.delivery.a()}</li>
                    <li class="delivery-group__item">{$LL.delivery.delivery.b()}</li>
                    <li class="delivery-group__item">{$LL.delivery.delivery.c()}</li>
                </ul>
                <ul class="delivery-icons">
                    <li class="delivery-icons__item">
                        <img src={iconUrkPoshta} alt="укрпошта" width="300" height="80" class="delivery-icons__img">
                    </li>
                    <li class="delivery-icons__item">
                        <img src={iconNovaPoshta} alt="новапошта" width="250" height="80" class="delivery-icons__img">
                    </li>
                    <li class="delivery-icons__item">
                        <img src={iconDeliveryService} alt="делівері" width="368" height="80" class="delivery-icons__img">
                    </li>
                </ul>
            </div>
            <div class="col">
                <h2 class="delivery-title">
                    <img src={iconCash} alt="грузовик" width="114" height="118" class="delivery-title__icon">
                    <span class="delivery-title__text">{$LL.delivery.payment.title()}</span>
                </h2>
                <p class="delivery_p">{$LL.delivery.payment.p()}</p>
                <ul class="delivery-group">
                    <li class="delivery-group__item">{$LL.delivery.payment.a()}</li>
                    <li class="delivery-group__item">{$LL.delivery.payment.b()}</li>
                    <li class="delivery-group__item">{$LL.delivery.payment.c()}</li>
                </ul>
            </div>
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

    .delivery-title {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        column-gap: 1rem;
        color: var(--color-primary);
        margin-bottom: 0.5em;
    }
    
    .delivery-title__icon {
        width: auto;
        height: 3.2rem;
        object-fit: contain;
    }
    
    .delivery_p {
        margin-bottom: 0.2em;
    }
    
    .delivery-group {
        list-style-position: inside;
    }
    
    .delivery-group__item::marker {
        content: '- '; 
    }

    .delivery-icons {
        margin-top: 2rem;
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
        list-style: none;
    }
    
    .delivery-icons__item {
        flex-shrink: 0;
    }
    
    .delivery-icons__img {
        height: 3rem;
        width: auto;
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