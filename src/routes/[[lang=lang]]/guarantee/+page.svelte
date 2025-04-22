<script>
    import LL from '$i18n/i18n-svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import { page } from '$app/stores';
    
    import cards from '$lib/assets/img/guarantee/cards.png';
    import liq from '$lib/assets/img/guarantee/liqpay.png';
    import female from '$lib/assets/img/guarantee/female.jpg';
    import nova from '$lib/assets/img/guarantee/nova.png';
    import t from '$lib/assets/img/guarantee/t.svg';
    import team from '$lib/assets/img/guarantee/team.jpg';

    export let data;

</script>

<svelte:head>
    <title>{$LL.secure()} - Авто Ділер</title>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.delivery.title()}>
    <meta property="og:description" content={$LL.ogDescription()}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content="https://www.avtodiler.com.ua/_app/immutable/assets/shop-2.xx4Bla7R.jpg">
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.secure()} />
{#if data.locale === 'uk'}
<div class="secure">
    <div class="container">
        <h1><strong>20 років на ринку</strong> — досвід, якому можна довіряти</h1>
        <div class="box">
            <div class="box-item">
                <div class="box-item__thumb">
                    <img src={cards} alt="карточки" height="71">
                    <img src={liq} alt="ликпей" height="113">
                    <img src={nova} alt="нова" height="66">
                </div>
                <div class="box-item__text">
                    <h2>✅ 100% безпечна покупка</h2>
                    <div class="simple-text">
                        <p>Оплата після отримання або через надійний платіжний онлайн-сервіс Приват Банку</p>
                        <p>Офіційні документи, чеки, гарантія</p>
                        <p>14 днів на повернення/обмін без зайвих питань</p>
                        <p>Повна прозорість на кожному етапі угоди</p>
                    </div>
                </div>
            </div>
            <div class="box-item">
                <div class="box-item__thumb" style={`background-image: url(${female})`}></div>
                <div class="box-item__text">
                    <h2>✅  Ми перевіряємо кожну запчастину — вручну</h2>
                    <ul class="simple-list">
                        <li>
                            <img src={t} alt="трикутник">
                            <span>
                                Перед тим як товар потрапить до вас, він проходить ретельну перевірку на відповідність, цілісність і якість
                            </span>
                        </li>
                        <li>
                            <img src={t} alt="трикутник">
                            <span>
                                Звіряємо артикул, маркування, комплектацію — щоб ви отримали саме ту запчастину, яку замовили
                            </span>
                        </li>
                        <li>
                            <img src={t} alt="трикутник">
                            <span>
                                Оглядаємо товар вручну — на наявність механічних пошкоджень, виробничих дефектів або невідповідностей
                            </span>
                        </li>
                        <li>
                            <img src={t} alt="трикутник">
                            <span>
                                Тестуємо електроніку (де можливо) перед пакуванням
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mission">
            <div class="col">
                <h2>Наша <strong>місія</strong></h2>
                <div class="mission-text">
                    <p>Ми створили цей магазин автозапчастин не просто як бізнес, а як відображення любові до своєї справи та прагнення до досконалості.</p>
                    <p>Наша місія — робити все чесно, якісно та з повагою до кожної людини, будь то клієнт, співробітник чи партнер.</p>
                    <p class="extra">
                        Ми віримо, що деталі важливі — не лише в автомобілях, а й у житті. <br>
                        Саме тому ми прагнемо, щоб кожен елемент нашого сервісу був зручним, прозорим і продуманим до дрібниць.
                    </p>
                    <p>Ми працюємо від щирого серця, тому що віримо: добрі справи повертаються, а повага та турбота формують справжню репутацію.</p>
                    <p>Наша мета — бути не просто магазином, а місцем, куди хочеться повертатися.</p>
                </div>
            </div>
            <img src={team} alt="команда авто ділер" width="467" height="286">
        </div>
    </div>
</div>
{:else}
<div class="secure">
    <div class="container">
        <h1><strong>20 лет на рынке</strong> — опыт, которому можно доверять</h1>
        <div class="box">
            <div class="box-item">
                <div class="box-item__thumb">
                    <img src={cards} alt="карточки" height="71">
                    <img src={liq} alt="ликпей" height="113">
                    <img src={nova} alt="нова пошта" height="66">
                </div>
                <div class="box-item__text">
                    <h2>✅ 100% безопасная покупка</h2>
                    <div class="simple-text">
                        <p>Оплата после получения или через надёжный платёжный онлайн-сервис ПриватБанка</p>
                        <p>Официальные документы, чеки, гарантия</p>
                        <p>14 дней на возврат/обмен без лишних вопросов</p>
                        <p>Полная прозрачность на каждом этапе сделки</p>
                    </div>
                </div>
            </div>
            <div class="box-item">
                <div class="box-item__thumb" style={`background-image: url(${female})`}></div>
                <div class="box-item__text">
                    <h2>✅ Мы проверяем каждую запчасть — вручную</h2>
                    <ul class="simple-list">
                        <li>
                            <img src={t} alt="треугольник">
                            <span>
                                Прежде чем товар попадёт к вам, он проходит тщательную проверку на соответствие, целостность и качество
                            </span>
                        </li>
                        <li>
                            <img src={t} alt="треугольник">
                            <span>
                                Сверяем артикул, маркировку, комплектацию — чтобы вы получили именно ту запчасть, которую заказали
                            </span>
                        </li>
                        <li>
                            <img src={t} alt="треугольник">
                            <span>
                                Осматриваем товар вручную — на наличие механических повреждений, производственных дефектов или несоответствий
                            </span>
                        </li>
                        <li>
                            <img src={t} alt="треугольник">
                            <span>
                                Тестируем электронику (где возможно) перед упаковкой
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mission">
            <div class="col">
                <h2>Наша <strong>миссия</strong></h2>
                <div class="mission-text">
                    <p>Мы создали этот магазин автозапчастей не просто как бизнес, а как отражение любви к своему делу и стремления к совершенству.</p>
                    <p>Наша миссия — делать всё честно, качественно и с уважением к каждому человеку, будь то клиент, сотрудник или партнёр.</p>
                    <p class="extra">
                        Мы верим, что детали важны — не только в автомобилях, но и в жизни. <br>
                        Именно поэтому мы стремимся, чтобы каждый элемент нашего сервиса был удобным, прозрачным и продуманным до мелочей.
                    </p>
                    <p>Мы работаем от чистого сердца, потому что верим: добрые дела возвращаются, а уважение и забота формируют настоящую репутацию.</p>
                    <p>Наша цель — быть не просто магазином, а местом, куда хочется возвращаться.</p>
                </div>
            </div>
            <img src={team} alt="команда авто дилер" width="467" height="286">
        </div>
    </div>
</div>
{/if}



<style>
    .secure {
        margin-bottom: 100px;
    }
    h1 {
        font-size: 46px;
        line-height: 128%;
        max-width: 702px;
        margin-bottom: 0.6em;
    }

    strong {
        color: var(--color-primary);
    }

    .box {
        display: grid;
        row-gap: 16px;
        margin-bottom: 100px;
    }
    .box-item {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 32px;
        box-shadow: var(--box-shadow-2);
        border-radius: 10px;
    }
    .box-item__thumb {
        flex-shrink: 0;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: center;
        row-gap: 21px;
        padding: 25px 34px;
        width: 326px;
        aspect-ratio: 1;
        background-color: #C8EEAA;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
    }

    .box-item__thumb img:nth-child(1) {
        height: 71px;
        width: auto;
    }

    .box-item__thumb img:nth-child(2) {
        height: 113px;
        width: auto;
    }

    .box-item__thumb img:nth-child(3) {
        height: 66px;
        width: auto;
    }

    .box-item__text {
        padding: 50px 0;
        padding-right: 15px;
        font-size: 18px;
    }
    
    .box-item__text h2 {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 17px;
        line-height: 128%;
    }

    .simple-text {
        line-height: 242%;
    }

    .simple-list {
        list-style: none;
        font-size: 18px;
        display: grid;
        row-gap: 19px;
    }

    .simple-list li {
        display: flex;
        flex-flow: row nowrap;
        align-items: baseline;
        line-height: 147%;
        column-gap: 15px;
    }

    .simple-list li img {
        width: 15px;
        flex-shrink: 0;
        transform: translateY(4px);
    }
    .box-item__thumb {
        height: 100%;
    }

    .mission {
        display: grid;
        gap: 54px;
        grid-template-columns: 1fr 420px;
        font-size: 18px;
        left: 147%;
    }

    .mission img {
        border-radius: 10px;
    }

    .mission h2 {
        font-size: 46px;
        line-height: 128%;
        margin-bottom: 0.6em;
    }

    .mission-text {
        display: grid;
        row-gap: 26px;
    }

    .extra {
        padding: 14px 24px;
        background-color: #fff;
        box-shadow: var(--box-shadow-2);
        color: var(--color-primary);
        border-radius: 10px;
        font-weight: 500;
    }

    .mission img {
        margin-top: 30px;
    }

    @media (max-width: 991px) {
        .box-item {
            display: block;
        }

        .box-item__thumb {
            flex-flow: row nowrap;
            aspect-ratio: unset;
            height: auto;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .box-item__text {
            padding-left: 34px;
            padding-right: 34px;
        }

        .box-item:nth-child(2) .box-item__thumb {
            aspect-ratio: 3 / 2;
        }

        .mission {
            grid-template-columns: minmax(0, 1fr);
        }

        .mission img {
            width: 100%;
            margin-top: 0;
        }
    }

    @media (max-width: 767px) {
        .box-item__thumb {
            flex-direction: column;
            align-items: flex-start;
        }

        h1, h2 {
            font-size: 36px;
        }
        .box {
            margin-bottom: 70px;
        }
    }

    @media (max-width: 575px) {
        .box-item__text {
            padding-right: 30px;
            padding-left: 30px;
        }
    }
</style>
