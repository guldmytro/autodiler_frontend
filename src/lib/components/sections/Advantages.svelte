<script>
    import iconWallet from '$lib/assets/img/icon-wallet.png';
    import iconCards from '$lib/assets/img/icon-cards.png';
    import iconDelivery from '$lib/assets/img/icon-delivery.png';
    import iconBoxes from '$lib/assets/img/icon-boxes.png';

    import LL from '$i18n/i18n-svelte';
</script>

<div class="advantages">
    <div class="container">
        <div class="advantages-row">
            <ul class="advantages-group">
                <li class="advantages-group__item advantages-item">
                    <div class="advantages-item__img-box">
                        <img src={iconWallet} alt="гаманець" class="advantages-item__img" loading="lazy"
                        width="104" height="126">
                    </div>
                    <span class="advantages-item__text">{$LL.advantages.a()}</span>
                </li>
                <li class="advantages-group__item advantages-item">
                    <div class="advantages-item__img-box">
                        <img src={iconCards} alt="картки" class="advantages-item__img" loading="lazy"
                        width="114" height="118">
                    </div>
                    <span class="advantages-item__text">{$LL.advantages.b()}</span>
                </li>
                <li class="advantages-group__item advantages-item">
                    <div class="advantages-item__img-box">
                        <img src={iconDelivery} alt="гаманець" class="advantages-item__img" loading="lazy"
                        width="120" height="80">
                    </div>
                    <span class="advantages-item__text">{$LL.advantages.c()}</span>
                </li>
                <li class="advantages-group__item advantages-item">
                    <div class="advantages-item__img-box">
                        <img src={iconBoxes} alt="гаманець" class="advantages-item__img" loading="lazy"
                        width="124" height="120">
                    </div>
                    <span class="advantages-item__text">{$LL.advantages.d()}</span>
                </li>
            </ul>
        </div>
        <div class="advantages-row">
            <div class="advantages-banner">
                <div class="advantages-banner__header">
                    <h2 class="advantages-banner__title">{$LL.ad.title()}</h2>
                    <p class="advantages-banner__subtitle">{$LL.ad.subtitle()}</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .advantages {
        padding: calc(var(--padding-section) / 2) 0 0;
    }

    .advantages .container {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: calc(var(--padding-section) / 2);
    }

    .advantages-group {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 3rem;
    }
    
    .advantages-item {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        column-gap: 1rem;
    }

    .advantages-item__img-box {
        flex-shrink: 0;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 7rem;
        height: 7rem;
        padding: 1rem;
        border: 4px solid #eaeaea;
        border-radius: 50%;
    }
    
    .advantages-item__img {
        width: 95%;
        height: 95%;
        object-fit: contain;
    }
    
    .advantages-item__text {
        white-space: balance;
    }
    
    .advantages-banner {
        position: relative;
        height: 0;
        padding-top: 23%;
        background: url("$lib/assets/img/ad-oil.jpg") no-repeat left center / cover;
        padding-left: 30%;
        border-radius: 2rem;
    }
    
    .advantages-banner__header {
        position: absolute;
        top: 50%;
        left: 35%;
        color: var(--color-text-invert);
        width: 65%;
        transform: translateY(-50%);
        font-size: 1.7rem;
    }

    .advantages-banner__title {
        font-size: 4em;
        font-style: italic;
        font-weight: 800;
        text-transform: uppercase;
        text-shadow: 0.2rem 0.4rem 0.2rem rgba(0, 0, 0, 0.24);
    }

    .advantages-banner__subtitle {
        position: relative;
        font-size: 2.1em;
        font-style: italic;
        text-transform: uppercase;
    }

    .advantages-banner__subtitle::before {
        content: '';
        display: inline-block;
        margin-right: 0.5em;
        margin-left: 1.9em;
        width: 3.5ch;
        height: 1px;
        background-color: var(--color-text-invert);
        transform: translateY(-0.35em);
    }

    @media (max-width: 991px) {
        .advantages-group {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem;
        }
        
        .advantages-banner__header {
            font-size: 1rem;
        }
    }

    @media (max-width: 767px) {        
        .advantages-banner__header {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 575px) {        
        .advantages-group {
            grid-template-columns: minmax(0, 1fr);
        }

        .advantages-row:nth-child(n + 2) {
            display: none;
        }
    }
</style>