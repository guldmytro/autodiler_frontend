<script>
    import iconWallet from '$lib/assets/img/icon-wallet.png';
    import iconCards from '$lib/assets/img/icon-cards.png';
    import iconDelivery from '$lib/assets/img/icon-delivery.png';
    import iconBoxes from '$lib/assets/img/icon-boxes.png';

    import ToolsIMG from '$lib/assets/img/tools.jpg';
    import BloodIMG from '$lib/assets/img/blood.png';
    import Blood2IMG from '$lib/assets/img/blood-2.png';
    import { page } from '$app/stores';

    $: lang = $page.params.lang === 'ru' ? '/ru/' : '/';

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
        {#if false}
            <div class="advantages-row">
                <div class="advantages-banner">
                    <div class="advantages-banner__header">
                        <h2 class="advantages-banner__title">{$LL.ad.title()}</h2>
                        <p class="advantages-banner__subtitle">{$LL.ad.subtitle()}</p>
                    </div>
                </div>
            </div>
        {/if}
    </div>
    <div class="partner-banner" style={`background-image: url(${Blood2IMG}), url(${BloodIMG}), url(${ToolsIMG})`}>
        <div class="container">
            <p class="banner-uptitle">{$LL.bannerUpTitle()}</p>
            <h2 class="banner-title">{@html $LL.bannerTitle()}</h2>
            <p class="banner-subtitle">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="26px" width="26px" version="1.1" viewBox="0 0 512.001 512.001" xml:space="preserve">
                <path style="fill:#128e41;" d="M256.001,0C114.615,0,0,114.615,0,256.001s114.615,256.001,256.001,256.001  s256.001-114.615,256.001-256.001S397.385,0,256.001,0z"/>
                <path style="fill:#128e41;" d="M256.001,24c-128.13,0-232,103.87-232,232s103.87,232,232,232S488,384.13,488,256.001  S384.13,24,256.001,24z"/>
                <polygon style="fill:#FFFFFF;" points="345.032,137.848 216.896,295.888 163.04,242.728 127.528,281.848 221.056,374.153   384.472,172.608 "/>
                </svg>
                {$LL.bannerSubTitle()}
            </p>
            <a href="{lang}account/dashboard" class="banner-link">
                {$LL.bannerButton()}
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5L11.7929 11.2929C12.1834 11.6834 12.1834 12.3166 11.7929 12.7071L5.5 19" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.5 5L19.7929 11.2929C20.1834 11.6834 20.1834 12.3166 19.7929 12.7071L13.5 19" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
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

    .partner-banner {
        margin-top: 40px;
        padding-block: 80px;
        border: 4px solid var(--color-primary);
        background-repeat: no-repeat;
        background-color: #fff;
        background-position: top left, right bottom 0px, right bottom -20px;
        background-size: auto, 40% auto, 35% auto;
    }

    .partner-banner .container {
        display: block;
    }

    .banner-uptitle {
        width: fit-content;
        padding: 14px 30px;
        color: var(--color-primary);
        text-transform: uppercase;
        border: 4px solid var(--color-primary);
        border-radius: 14px;
        font-size: 28px;
        font-weight: 800;
        line-height: 1;
    }

    .banner-title {
        margin-top: 30px;
        font-size: 50px;
        font-weight: 800;
        line-height: 1;
    }

    .banner-subtitle {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 20px;
        align-items: baseline;
        margin-top: 30px;
        font-size: 30px;
        line-height: 1;
        font-weight: 600;
        color: #128e41;
    }

    .banner-subtitle svg {
        position: relative;
        top: 2px;
    }

    .banner-link {
        width: fit-content;
        column-gap: 0.4em;
        display: flex;
        flex-flow: row nowrap;
        margin-top: 37px;
        padding: 20px 36px;
        background-image: linear-gradient(to right, #fdbe64, #e29621);
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        border-radius: 14px;
        font-weight: 600;
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

        .partner-banner {
            padding-bottom: 300px;
            background-repeat: no-repeat;
            background-color: #fff;
            background-position: top left, right bottom 0px, center bottom -30px;
            background-size: auto, 100% auto, auto 310px;
        }

        .banner-uptitle {
            font-size: 16px;
            padding-inline: 14px;
            padding-block: 10px;
            margin-inline: auto;
            text-align: center;
        }

        .banner-title {
            margin-top: 20px;
            font-size: 35px;
            text-align: center;
        }

        .banner-subtitle {
            margin-top: 20px;
            display: block;
            font-size: 25px;
            text-align: center;
            width: 100%;
        }

        .banner-subtitle svg {
            display: none;
        }

        .banner-link {
            margin-top: 30px;
            margin-inline: auto;            
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