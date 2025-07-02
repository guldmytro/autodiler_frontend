<script lang="ts">
    interface Cat {
        title: string;
        href: string;
        img: {
            src: string;
            alt: string;
        }
    }
    import { page } from "$app/stores";
    import t1 from '$lib/assets/img/cats/t-1.jpg';
    import t2 from '$lib/assets/img/cats/t-2.jpg';
    import t3 from '$lib/assets/img/cats/t-3.jpg';
    import t4 from '$lib/assets/img/cats/t-4.jpg';
    import t5 from '$lib/assets/img/cats/t-5.jpg';
    import t6 from '$lib/assets/img/cats/t-6.jpg';
    import t7 from '$lib/assets/img/cats/t-7.jpg';
    import t8 from '$lib/assets/img/cats/t-8.jpg';

    const cats: {
        [lang in 'ru' | 'uk']: Cat[]
    } = {
        'uk': [
            {title: 'Оливи та рідини', href: '', img: {src: t1, alt: 'Оливи та рідини'}},
            {title: 'Аксесуари', href: '/product-cat/aksesuari-6a877ca3', img: {src: t2, alt: 'Аксесуари'}},
            {title: 'Акумулятори', href: '/product-cat/akumuliatori-2d371099', img: {src: t3, alt: 'Акумурятори'}},
            {title: 'Автохімія', href: '/product-cat/olivi-i-tekhnichni-ridini-6f1a2cd6', img: {src: t4, alt: 'Автохімія'}},
            {title: 'Інструменти', href: '/product-cat/instrumenti-27553f65', img: {src: t5, alt: 'Інструменти'}},
            {title: 'Лампочки', href: '/product-cat/lampochki-b8200af7', img: {src: t6, alt: 'Лампочки'}},
            {title: 'Приладдя', href: '/product-cat/prinadlezhnosti-1da12569', img: {src: t7, alt: 'Приладдя'}},
            {title: 'Резина', href: '/product-cat/shinomontazh-c348056e', img: {src: t8, alt: 'Резина'}},
        ],
        'ru': [
            {title: 'Масла и жидкости', href: '', img: {src: t1, alt: 'Масла и жидкости'}},
            {title: 'Аксесуары', href: '/ru/product-cat/aksesuari-6a877ca3', img: {src: t2, alt: 'Аксесуары'}},
            {title: 'Аккумуляторы', href: '/ru/product-cat/akumuliatori-2d371099', img: {src: t3, alt: 'Аккумуляторы'}},
            {title: 'Автохимия', href: '/ru/product-cat/olivi-i-tekhnichni-ridini-6f1a2cd6', img: {src: t4, alt: 'Автохимия'}},
            {title: 'Инструменты', href: '/ru/product-cat/instrumenti-27553f65', img: {src: t5, alt: 'Инструменты'}},
            {title: 'Лампочки', href: '/ru/product-cat/lampochki-b8200af7', img: {src: t6, alt: 'Лампочки'}},
            {title: 'Принадлежности', href: '/ru/product-cat/prinadlezhnosti-1da12569', img: {src: t7, alt: 'Принадлежности'}},
            {title: 'Резина', href: '/ru/product-cat/shinomontazh-c348056e', img: {src: t8, alt: 'Резина'}},
        ]
    };

    $: currentCats = cats[$page.params.lang === 'ru' ? 'ru' : 'uk'];
    $: title = $page.params.lang === 'ru' ? 'Товары' : 'Товари';
</script>

<section class="cats">
    <div class="container">
        <div class="section-header">
            <h2 class="section-header__title">{title}</h2>
        </div>
        <ul class="cats-group">
            {#each currentCats as cat}
                {#if cat.href}
                    <li class="cats-item">
                        <a class="cats-link" href={cat.href}>
                            <img class="cats-link__img" src={cat.img.src} alt={cat.img.alt} loading="lazy" width="100" height="100">
                            <h3 class="cats-link__title">{cat.title}</h3>
                        </a>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</section>

<style>
    .cats {
        margin-block-start: calc(var(--padding-section) * 0.75);
        margin-block-end: 0;
        background-color: #F0F0F0;
    }

    .cats-group {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        list-style: none;
        column-gap: 13px;
        row-gap: 15px;
    }

    .cats-link {
        display: flex;
        flex-flow: column nowrap;
        border-radius: 16px;
        background-color: #fff;
        overflow: hidden;
        align-items: center;
        padding-top: 16px;
        padding-bottom: 32px;
        padding-inline: 16px;
        text-decoration: none;
        transition: color 150ms ease;
        color: var(--color-text);
    }

    .cats-link:hover {
        color: var(--color-secondary);
    }

    .cats-link__img {
        height: 75px;
        width: auto;
    }

    .cats-link__title {
        font-size: 17px;
        font-weight: 500;
        text-decoration: none;
    }

    @media (max-width: 991px) {
        .cats-group {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (max-width: 480px) {
        .cats-group {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .cats-link {
            padding-top: 8px;
            padding-bottom: 8px;
            padding-inline: 6px;
        }

        .cats-link__img {
            height: 40px;
            width: auto;
        }

        .cats-link__title {
            font-size: 15px;
        }
    }
</style>