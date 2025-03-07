<script>
    import LL from "$i18n/i18n-svelte";
    import iconDelivery from '$lib/assets/img/icon-delivery.png';
    import iconCash from '$lib/assets/img/icon-cards.png';
    import iconUrkPoshta from '$lib/assets/img/urkposhta.png';
    import iconNovaPoshta from '$lib/assets/img/novaposhta.png';
    import iconDeliveryService from '$lib/assets/img/delivery.png';
    import bgDelivery from '$lib/assets/img/delivery.jpg';

    import { locale } from '$i18n/i18n-svelte';
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
                {#if $locale === 'uk'}
                    <p class="delivery_p">Доставка здійснюється по всій Україні компанією «Нова Пошта»:</p>
                    <ul class="delivery-group">
                        <li class="delivery-group__item">в найближче відділення Нової Пошти</li>
                        <li class="delivery-group__item">кур’єром  Нової пошти – доставка за вказаною адресою до дому або на роботу</li>
                    </ul>
                    <ul class="delivery-icons">
                        <li class="delivery-icons__item">
                            <img src={iconNovaPoshta} alt="новапошта" width="250" height="80" class="delivery-icons__img">
                        </li>
                    </ul>
                {:else}
                    <p class="delivery_p">Доставка осуществляется по всей Украине компанией «Новая Почта»:</p>
                    <ul class="delivery-group">
                        <li class="delivery-group__item">в ближайшее отделение Новой Почты</li>
                        <li class="delivery-group__item">курьером Новой почты – доставка по указанному адресу на дом или на работу</li>
                    </ul>
                    <ul class="delivery-icons">
                        <li class="delivery-icons__item">
                            <img src={iconNovaPoshta} alt="новапошта" width="250" height="80" class="delivery-icons__img">
                        </li>
                    </ul>
                {/if}
            </div>
            <div class="col">
                <h2 class="delivery-title">
                    <img src={iconCash} alt="грузовик" width="114" height="118" class="delivery-title__icon">
                    <span class="delivery-title__text">{$LL.delivery.payment.title()}</span>
                </h2>
                {#if $locale === 'uk'}
                    <h3>Онлайн оплата</h3>
                    <p>Оплатити товар ви можете на сайті картою будь-якого банку через LiqPay</p>
                    <h3>Оплата готівкою</h3>
                    <p>Оплата здійснюється готівкою під час отримання Вами замовлення в нашому магазині, або на Новій Пошті під час оплати післяплати. За послугу післяплати сплачує клієнт – 2% від вартості товару + 20 грн</p>
                    <h3>Оплата на розрахунковий рахунок</h3>
                    <p>Ви можете здійснити оплату на розрахунковий рахунок ФОП:  UA303052990000026001005906736 через будь-яке відділення банку. Товар відправляється на Вашу адресу (якщо не зазначено інакше) після зарахування грошей на наш рахунок</p>
                    <h3>Оплата за безготівковим розрахунком</h3>
                    <p>Оплата проводиться тільки в національній валюті</p>
                {:else}
                    <h3>Онлайн оплата</h3>
                    <p>Оплатить товар можно на сайте картой любого банка через LiqPay</p>
                    <h3>Оплата наличными</h3>
                    <p>Оплата производится наличными при получении Вами заказа в нашем магазине, или на Новой Почте при оплате наложенного платежа. За услугу наложенного платежа платит клиент – 2% от стоимости товара + 20 грн</p>
                    <h3>Оплата на расчетный счет</h3>
                    <p>Вы можете произвести оплату на расчетный счет ФЛП: UA303052990000026001005906736 через любое отделение банка. Товар отправляется по Вашему адресу (если не указано иначе) после зачисления денег на наш счет</p>
                    <h3>Оплата по безналичному расчету</h3>
                    <p>Оплата производится только в национальной валюте</p>
                {/if}
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
    
    p + h3 {
        margin-top: 10px;
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