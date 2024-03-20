<script>
    import shopImg from '$lib/assets/img/shop.jpg';
    import LL from '$i18n/i18n-svelte';
</script>

<section class="stats">
    <div class="container">
        <div class="stats-row">
            <div class="stats-info">
                <div class="section-header">
                    <h2 class="section-header__title">{$LL.stats.title()}</h2>
                </div>
                <ul class="stats-group">
                    <li class="stats-group__item stats-item">
                        <strong class="stats-item__number">{$LL.stats.group.a.title()}</strong>
                        <p class="stats-item__text">{$LL.stats.group.a.value()}</p>
                    </li>
                    <li class="stats-group__item stats-item">
                        <strong class="stats-item__number">{$LL.stats.group.b.title()}</strong>
                        <p class="stats-item__text">{$LL.stats.group.b.value()}</p>
                    </li>
                    <li class="stats-group__item stats-item">
                        <strong class="stats-item__number">{$LL.stats.group.c.title()}</strong>
                        <p class="stats-item__text">{$LL.stats.group.c.value()}</p>
                    </li>
                </ul>
            </div>
            <div class="stats-image">
                <img src={shopImg} alt="магазин автоділер" class="stats-image__img" loading="lazy"
                width="980" height="436">
            </div>
        </div>
    </div>
</section>

<style>
    .stats-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
        gap: 4rem;
    }

    .section-header__title {
        max-width: 34rem;
    }

    .stats-group {
        list-style: none;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 1.5rem;
    }
    
    .stats-item__number {
        font-size: 3.5rem;
        font-weight: 700;
        color: var(--color-primary);
        line-height: 1;
    }

    .stats-item__text {
        font-size: 1.5rem;
        margin-top: 0.2em;
    }

    .stats-image {
        margin-left: auto;
        margin-top: -2rem;
        position: relative;
        padding-top: 2rem;
        padding-right: 2rem;
        isolation: isolate;
    }

    .stats-image::before {
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        display: block;
        background-color: var(--color-primary);
        width: 10rem;
        height: 10rem;
        border-radius: 2rem;
        z-index: -1;
    }

    @media (max-width: 991px) {
        .stats-row {
            grid-template-columns: minmax(0, 1fr);
        }

        .stats-group {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (max-width: 575px) {
        .stats-group {
            grid-template-columns: minmax(0, 1fr);
        }

        .stats-image {
            padding-right: 0.7rem;
            padding-top: 0.7rem;
            width: 100%;
            aspect-ratio: 1 / 1;
        }

        .stats-image::before {
            border-radius: 1.5rem;
        }

        .stats-image__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: left center;
            border-top-right-radius: 1rem;
            border-top-left-radius: 10rem;
            border-bottom-left-radius: 10rem;
            border-bottom-right-radius: 10rem;

        }
    }
</style>