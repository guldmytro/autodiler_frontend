<script lang="ts">
    import LL from "$i18n/i18n-svelte";
    import iconDelivery from '$lib/assets/img/icon-delivery.png';
    import iconCash from '$lib/assets/img/icon-cards.png';
    import iconNovaPoshta from '$lib/assets/img/novaposhta.png';
    import VM from '$lib/assets/img/visa-mastercard.webp';

    import { locale } from '$i18n/i18n-svelte';
</script>

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
        <br>
        <div class="delivery_p"><strong>Умови обробки та доставки замовлень</strong></div>
        <div class="delivery_p">Замовлення, оформлені з понеділка по п’ятницю до 18:00, обробляються у той самий день.</div>
        <div class="delivery_p">Замовлення, оформлені в суботу до 15:00, також обробляються у день оформлення.</div>
        <div class="delivery_p">Замовлення, зроблені після зазначеного часу або у неділю, обробляються наступного робочого дня.</div>
        <div class="delivery_p">Час обробки: 1 робочий день.</div>
        <div class="delivery_p">Часовий пояс: Київ (UTC+2, влітку UTC+3).</div>
        <br>
        <p class="delivery_p">
            <strong>Доставка "Новою поштою"</strong>
        </p>
        <div class="delivery_p">Відправлення здійснюється по всій Україні.</div>
        <div class="delivery_p">Термін доставки: зазвичай 1–3 робочих дні залежно від регіону.</div>
        <div class="delivery_p">Вартість доставки розраховується за тарифами "Нової пошти" та залежить від ваги, габаритів і напряму.</div>
        <div class="delivery_p">Ви можете обрати доставку до відділення, поштомату або кур’єром за адресою.</div>
        <div class="delivery_p">Вартість доставки оплачує отримувач під час отримання замовлення.</div>
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
        <br>
        <div class="delivery_p"><strong>Условия обработки и доставки заказов</strong></div>
        <div class="delivery_p">Заказы, оформленные с понедельника по пятницу до 18:00, обрабатываются в тот же день.</div>
        <div class="delivery_p">Заказы, оформленные в субботу до 15:00, также обрабатываются в день оформления.</div>
        <div class="delivery_p">Заказы, сделанные после указанного времени или в воскресенье, обрабатываются в следующий рабочий день.</div>
        <div class="delivery_p">Время обработки: 1 рабочий день.</div>
        <div class="delivery_p">Часовой пояс: Киев (UTC+2, летом UTC+3).</div>
        <br>
        <p class="delivery_p">
            <strong>Доставка "Новой почтой"</strong>
        </p>
        <div class="delivery_p">Отправка осуществляется по всей Украине.</div>
        <div class="delivery_p">Срок доставки: обычно 1–3 рабочих дня в зависимости от региона.</div>
        <div class="delivery_p">Стоимость доставки рассчитывается по тарифам «Новой почты» и зависит от веса, габаритов и направления.</div>
        <div class="delivery_p">Вы можете выбрать доставку в отделение, почтомат или курьером по адресу.</div>
        <div class="delivery_p">Стоимость доставки оплачивает получатель при получении заказа.</div>

    {/if}
</div>
<div class="col">
    <h2 class="delivery-title">
        <img src={iconCash} alt="грузовик" width="114" height="118" class="delivery-title__icon">
        <span class="delivery-title__text">{$LL.delivery.payment.title()}</span>
    </h2>
    {#if $locale === 'uk'}
        <h3>Онлайн оплата</h3>
        <p>
            Оплатити товар ви можете на сайті картою будь-якого банку через LiqPay
            <br>
            <img src={VM} alt="віза мастеркард" width="88" height="20" loading="lazy" style="margin-top: 4px;">
        </p>
        <h3>Оплата готівкою</h3>
        <p>Оплата здійснюється готівкою під час отримання Вами замовлення в нашому магазині, або на Новій Пошті під час оплати післяплати. За послугу післяплати сплачує клієнт – 2% від вартості товару + 20 грн</p>
        <h3>Оплата на розрахунковий рахунок</h3>
        <p>Ви можете здійснити оплату на розрахунковий рахунок ФОП: UA413052990000026006025903112 через будь-яке відділення банку. Товар відправляється на Вашу адресу (якщо не зазначено інакше) після зарахування грошей на наш рахунок</p>
        <h3>Оплата за безготівковим розрахунком</h3>
        <p>Оплата проводиться тільки в національній валюті</p>
    {:else}
        <h3>Онлайн оплата</h3>
        <p>Оплатить товар можно на сайте картой любого банка через LiqPay
            <br>
            <img src={VM} alt="віза мастеркард" width="88" height="20" loading="lazy" style="margin-top: 4px;">
        </p>
        <h3>Оплата наличными</h3>
        <p>Оплата производится наличными при получении Вами заказа в нашем магазине, или на Новой Почте при оплате наложенного платежа. За услугу наложенного платежа платит клиент – 2% от стоимости товара + 20 грн</p>
        <h3>Оплата на расчетный счет</h3>
        <p>Вы можете произвести оплату на расчетный счет ФЛП: UA413052990000026006025903112 через любое отделение банка. Товар отправляется по Вашему адресу (если не указано иначе) после зачисления денег на наш счет</p>
        <h3>Оплата по безналичному расчету</h3>
        <p>Оплата производится только в национальной валюте</p>
    {/if}
</div>

<style>
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
        margin-bottom: 0.3em;
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
</style>