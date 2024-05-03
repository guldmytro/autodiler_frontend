<script>
    import { PUBLIC_API_MEDIA } from "$env/static/public";
    import { page } from "$app/stores";
    import { locale } from '$i18n/i18n-svelte';
    import LL from "$i18n/i18n-svelte";

    let showAllCars = false;
    let termsToShow = 10;
    function filterTerms(term) {
        if (term.data.image && term.data.image !== '') {
            return true;
        }
        return false;
    }
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
    $: allTermsCnt = $page.data?.terms.filter(filterTerms).length;
    $: terms = showAllCars ? $page.data?.terms.filter(filterTerms) : $page.data?.terms.filter(filterTerms).slice(0, termsToShow);

    $: count = currentCategory?.data?.quantity || currentModel?.data?.quantity || currentProducer?.data?.quantity;
    $: currentTerm = currentCategory?.data?.slug || currentModel?.data?.slug || currentProducer?.data?.slug;
    $: currentLink = currentTerm ? `/${localePrefix}product-cat/${currentTerm}` : null;
    $: key = $locale === 'uk' ? 'name_ua' : 'name_ru';

    let currentProducer = null;
    let currentModel = null;
    let currentModelID = '';

    let currentCategory = null;
    let currentCategoryID = '';

    function setProducer(producer) {
        currentProducer = producer;
        currentModel = null;
        currentModelID = '';
        currentCategory = null;
        currentCategoryID = '';
    }

    function setModel() {
        currentModel = currentProducer?.children.filter(item => item.id == currentModelID)[0];
        currentCategory = null;
        currentCategoryID = '';
    }

    function setCategory() {
        currentCategory = currentModel?.children.filter(item => item.id == currentCategoryID)[0];
    }
</script>


<main class="search">
    <div class="container">
        <div class="search__header">
            <h1 class="search__title">{$LL.search.title()}</h1>
            <p class="serch__subtitle">{$LL.search.title2()}</p>
        </div>
        <div class="search-box">
            <ul class="search-cats">
                {#each terms as term }
                    <li class="search-cats__item">
                        <button class="search-link" class:active={currentProducer?.id == term?.id}
                            on:click={setProducer(term)}>
                            <img src={PUBLIC_API_MEDIA + term?.data?.image} alt={term?.data['name_ua']} class="search-link__img">
                            <span class="search-link__label">{term?.data['name_ua']}</span>
                        </button>
                    </li>
                {/each}
            </ul>
            {#if !showAllCars && termsToShow < allTermsCnt}
                <div class="all-box">
                    <button type="button" class="all-brands-btn" on:click={() => showAllCars = true}>
                        <span>{$LL.allBrands()}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" class="order-btn__img s-8MHMtEqssRyI"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="currentColor" class="s-8MHMtEqssRyI"></path></svg>
                    </button>
                </div>
            {/if}
            <fieldset class="search-box__fieldset">
                    <label class="search-label">
                        <span class="search-label__text">{$LL.search.model.title()}</span>
                        <div class="select-wrapper">
                            <select name="model" class="select" 
                                bind:value={currentModelID}
                                on:change={setModel}
                                disabled={!currentProducer}>
                                <option value="">{$LL.search.model.empty()}</option>
                                {#if Array.isArray(currentProducer?.children) && currentProducer?.children.length}
                                    {#each currentProducer.children as child}
                                        <option value={child.id}>{child.data[key]}</option>
                                    {/each}
                                {/if}
                            </select>
                        </div>
                    </label>
                    <label class="search-label">
                        <span class="search-label__text">{$LL.search.category.title()}</span>
                        <div class="select-wrapper">
                            <select name="model" class="select" 
                                bind:value={currentCategoryID}
                                on:change={setCategory}
                                disabled={!currentModelID}>
                                <option value="">{$LL.search.category.empty()}</option>
                                {#if Array.isArray(currentModel?.children) && currentModel?.children.length}
                                    {#each currentModel.children as child}
                                        <option value={child.id}>{child.data[key]}</option>
                                    {/each}
                                {/if}
                            </select>
                        </div>
                    </label>
                    <div class="search-result-link">
                        <a href={currentLink} class="search-result-link__m" class:disabled={!currentLink}>{$LL.search.show()} {#if count}({count}){/if}</a>
                        <a href="#contacts" class="search-result-link__abs">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="currentColor"/>
                            </svg>
                            <span>
                                {$LL.feadback.callToAction()}
                            </span>
                        </a>
                    </div>
            </fieldset>
        </div>
    </div>
</main>

<style>
    .search {
        position: relative;
        padding: 16rem 0 0;
        background: url("$lib/assets/img/bg-search.jpg") no-repeat center / cover;
        isolation: isolate;
    }
    
    .search::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -0.5px;
        left: 0;
        right: 0;
        height: 14rem;
        background-color: #fff;
        z-index: -1;
    }

    .search .container {
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        row-gap: 4rem;
    }

    .search__header {
        display: inline-block;
        position: relative;
        line-height: 1;
        isolation: isolate;
    }

    .search__header::before {
        content: '';
        display: block;
        position: absolute;
        top: -12rem;
        left: -15rem;
        right: -15rem;
        bottom: -18rem;
        z-index: 1;
        background-image: radial-gradient(ellipse 50% 50% at center, rgba(255, 255, 255, 0.8), transparent);        
    }

    .search__title {
        position: relative;
        font-size: 4.4rem;
        font-weight: 700;
        z-index: 2;
    }

    .serch__subtitle {
        position: relative;
        font-size: 4.4rem;
        font-weight: 700;
        color: var(--color-primary);
        z-index: 2;
    }

    .search-box {
        width: 100%;
        background-color: #fff;
        box-shadow: var(--box-shadow-2);
        border-radius: 1rem;
    }

    .search-cats {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        position: relative;
        list-style: none;
        z-index: 2;
    }

    .search-cats__item {
        flex: 0 0 20%;
    }

    .search-link {
        background-color: #fff;
        position: relative;
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        column-gap: 1rem;
        width: 100%;
        height: 100%;
        color: inherit;
        opacity: 1;
        text-decoration: none;
        border-radius: 1rem;
        isolation: isolate;
        border: none;
    }

    .search-link::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 1rem;
        background-image: linear-gradient(to right, #fdbe64, #e29621);
        z-index: -1;
        opacity: 0;
        box-shadow: var(--box-shadow-2);
        transition: opacity 150ms;
    }

    .search-link.active,
    .search-link:hover {
        color: var(--color-text-invert);
    }

    .search-link.active::before,
    .search-link:hover::before {
        opacity: 1;
    }

    .search-link__img {
        width: 6.5rem;
        height: 4rem;
        object-fit: contain;
        filter: var(--filter-color-text);
        transition: filter 150ms;
        flex-shrink: 0;
    }

    .search-link.active .search-link__img,
    .search-link:hover .search-link__img {
        filter: var(--filter-color-text-invert);
    }

    .search-link__label {
        text-transform: uppercase;
        font-size: 1.5rem;
        white-space: nowrap;
    } 
    
    .all-box {
        padding-top: 1rem;
        text-align: center;
    }

    .all-brands-btn {
        position: relative;
        display: inline-flex;
        padding: 0.6rem 5rem 0.6rem 2.5rem;
        border: none;
        border-radius: 10rem;
        font-size: 1.5rem;
        color: inherit;
        background-color: #f1f1f1;
    }

    .all-brands-btn svg {
        position: absolute;
        top: 50%;
        right: 2.5rem;
        transform: translateY(-50%);

    }

    .search-box__fieldset {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        column-gap: 2rem;
        padding: 3rem 2rem 5rem;
        border: none;
        font-size: 1.5rem;
    }

    .search-label {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 0.2rem;
    }

    .search-label__text {
        font-size: 1.4rem;
        color: var(--color-lighter);
    }

    .search-result-link {
        position: relative;
        flex: 0 0 20%;
        align-self: flex-end;
        font-weight: 400;
        transition: opacity 150ms, background-color 150ms;
    }

    .search-result-link__m {
        display: block;
        text-align: center;
        padding: 0 1em;
        color: inherit;
        text-decoration: none;
        height: 4rem;
        line-height: 3.8rem;
        background-color: var(--color-primary);
        color: var(--color-text-invert);
        border-radius: 1rem;
    }

    .search-result-link__abs {
        position: absolute;
        top: calc(100% + 1rem);
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        text-decoration: none;
        color: #4CBB17;
        font-size: 0.95em;
        display: flex;
        align-items: center;
        column-gap: 0.4rem;
        flex-flow: row nowrap;
        margin-right: -9999px;
        font-weight: 500;
    }

    .search-result-link__abs svg {
        position: relative;
        top: 1px;
        flex-shrink: 0;
        width: 16px;
        height: 16px;
    }

    .search-label {
        flex: 0 0 25%;
    }

    .disabled {
        opacity: 0.5;
    }
    
    @media (max-width: 991px) {
        .search-cats__item {
            flex: 0 0 33.33333333%;
        }

        .search-link__img {
            width: 8rem;
            height: 3.5rem;
        }

        .search-label {
            flex: 1 0 25%;
        }

        .search-box__fieldset {
            flex-flow: column nowrap;
            row-gap: 1rem;
        }

        .search-result-link {
            width: 100%;
        }
    }

    @media (max-width: 767px) {
        .search-cats__item {
            flex: 0 0 50%;
        }

        .search-result-link {
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (max-width: 575px) {
        .search {
            background: none;
        }

        .search::before {
            top: 0;
            position: absolute;
            content: '';
            display: block;
            width: 100%;
            height: 17rem;
            background: url('$lib/assets/img/bg-search_mobile.jpg') no-repeat center / cover;
            
        }

        .search .container {
            position: relative;
            padding-top: 2.5rem;
            background-color: #fff;
            row-gap: 2rem;
        }

        .search .container::before {
            position: absolute;
            content: '';
            display: block;
            width: 100px;
            height: 35px;
            background-color: red;
            background: 
                url("$lib/assets/img/shape.png") no-repeat center / contain;
            left: 50%;
            bottom: calc(100% - 1px);
            border-radius: 50%;
            transform: translate(-50%, 44%);
        }

        .search .container::after {
            position: absolute;
            content: '';
            display: block;
            width: 24px;
            height: 24px;
            background: url("$lib/assets/img/icon-search.svg") no-repeat center / contain;
            left: 50%;
            bottom: calc(100% - 1px);
            transform: translate(-50%, 44%);
        }

        .search__header {
            text-align: center;
            width: 100%;
        }

        .search__header::before,
        .search__header::after {
            content: none;
        }

        .search-link__img {
            width: 4rem;
            height: 2rem;
        }

        .search__title {
            font-size: 3.5rem;
            font-weight: 900;
        }

        .serch__subtitle {
            font-size: 3.2rem;
        }

        .search-result-link {
            width: 100%;
        }
    }
</style>