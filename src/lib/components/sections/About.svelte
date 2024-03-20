<script>
    import LL from "$i18n/i18n-svelte";
    import iconDelivery from '$lib/assets/img/icon-delivery-2.png';
    import iconDetails from '$lib/assets/img/icon-details-2.png';
    import iconPercent from '$lib/assets/img/icon-percents.png';
    import shopImage1 from '$lib/assets/img/shop-1.jpg';
    import shopImage2 from '$lib/assets/img/shop-2.jpg';
</script>

<main class="about">
    <div class="container">
        <div class="section-header">
            <h1 class="section-header__title">{$LL.about.title()}</h1>
            <p class="section-header__suffix">{$LL.about.subtitle()}</p>
        </div>
        <div class="about-row">
            <div class="about-images">
                <img src={shopImage1} alt="фото магазину" width="900" height="506" class="about-images__img">
                <img src={shopImage2} alt="фото магазину" width="900" height="506" class="about-images__img">
            </div>
            <ul class="about-group">
                <li class="about-group__item about-item">
                    <img src={iconDelivery} alt="грузовик" loading="lazy" class="about-item__img"
                    width="62" height="36">
                    <h3 class="about-item__title">{$LL.about.items.a.title()}</h3>
                    <p class="about-item__p">{$LL.about.items.a.description()}</p>
                </li>
                <li class="about-group__item about-item">
                    <img src={iconDetails} alt="деталі" loading="lazy" class="about-item__img"
                    width="53" height="48">
                    <h3 class="about-item__title">{$LL.about.items.b.title()}</h3>
                    <p class="about-item__p">{$LL.about.items.b.description()}</p>
                </li>
                <li class="about-group__item about-item">
                    <img src={iconPercent} alt="проценти" loading="lazy" class="about-item__img"
                    width="40" height="53">
                    <h3 class="about-item__title">{$LL.about.items.c.title()}</h3>
                    <p class="about-item__p">{$LL.about.items.c.description()}</p>
                </li>
            </ul>
        </div>
    </div>
</main>

<style>
    .about-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 3rem;
    }

    .about-images {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;
    }

    .about-images__img {
        border-radius: 2rem;
    }

    .about-group {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 3rem;
        list-style: none;    
    }

    .about-group__item {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-content: start;
        row-gap: 0.3rem;
        border-radius: 2rem;
        box-shadow: var(--box-shadow);
        padding: 3rem;
    }

    .about-item__img {
        height: 4rem;
        width: 6.3rem;
        object-fit: contain;
    }

    .about-item__title {
        font-size: 2.2rem;
        margin-top: 0.3em;
        font-weight: 500;
    }

    .about-item__p {
        font-size: 1.6rem;
    }

    @media (max-width: 991px) {
        .about-group {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            justify-items: center;
            column-gap: 2rem;
        }

        .about-group__item:nth-child(3) {
            grid-column: 1 / -1;
        }
    }

    @media (max-width: 767px) {
        .about-images,
        .about-group {
            grid-template-columns: minmax(0, 1fr);
        }
    }

    @media (max-width: 575px) {
        .about-group__item {
            padding-right: 15px;
            padding-left: 15px;
        }
    }
</style>