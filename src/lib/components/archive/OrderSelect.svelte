<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import LL from '$i18n/i18n-svelte';

    let shopOptions = false;

    const options = {
        '-created': $LL.ordering.new(),
        'price': $LL.ordering.priceASC(),
        '-price': $LL.ordering.priceDESC(),
    };

    $: currentPath = new URL($page.url).pathname;
    // @ts-ignore
    $: currentOption = options[new URL($page.url).searchParams.get('ordering')] || $LL.ordering.new();
    
    /**
     * @param {{ target: { innerText: any; getAttribute: (arg0: string) => any; }; }} e
     */
    function setOptions(e) {
        if (currentOption !== e.target.innerText) {
            goto(`${currentPath}?ordering=${e.target.getAttribute('data-order')}`, {
                noScroll: true
            });
        }
        currentOption = e.target.innerText;
        shopOptions = false;
    }
</script>

<div class="order-wrapper">
    <button type="button" class="order-btn" on:click={() => shopOptions = !shopOptions}>
        <span class="order-btn__text">{currentOption}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" class="order-btn__img"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="currentColor"></path></svg>
    </button>
    <ul class="order-choices" class:active={shopOptions}>
        <li class="order-choices__item">
            <button class="order-choices__btn" class:order-choices__btn_checked={currentOption === $LL.ordering.new()} data-order="-created" on:click={setOptions}>{$LL.ordering.new()}</button>
            <svg fill="currentColor" height="800" width="800" viewBox="0 0 288.941 288.941" class="checked" xml:space="preserve">
                <path id="Check" d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61   c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239   C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"/>
            </svg>
        </li>
        <li class="order-choices__item">
            <button class="order-choices__btn" class:order-choices__btn_checked={currentOption === $LL.ordering.priceASC()} data-order="price" on:click={setOptions}>{$LL.ordering.priceASC()}</button>
            <svg fill="currentColor" height="800" width="800" viewBox="0 0 288.941 288.941" class="checked" xml:space="preserve">
                <path id="Check" d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61   c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239   C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"/>
            </svg>
        </li>
        <li class="order-choices__item">
            <button class="order-choices__btn" class:order-choices__btn_checked={currentOption === $LL.ordering.priceDESC()} data-order="-price" on:click={setOptions}>{$LL.ordering.priceDESC()}</button>
            <svg fill="currentColor" height="800" width="800" viewBox="0 0 288.941 288.941" class="checked" xml:space="preserve">
                <path id="Check" d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61   c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239   C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"/>
            </svg>
        </li>
    </ul>
</div>

<style>
    .order-wrapper {
        margin-left: auto;
        display: inline-flex;
        position: relative;
        z-index: 2;
    }

    .order-btn {
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        column-gap: 1rem;
        font-size: 1.6rem;
        color: inherit;
        border: 1px solid var(--color-border);
        border-radius: 100rem;
        transition: background-color 150ms;
    }

    .order-btn__text {
        white-space: nowrap;
    }

    .order-btn__img {
        width: 2rem;
        height: 2rem;
    }

    .order-btn:hover {
        background-color: var(--color-primary-hover-2);
    }

    .order-choices {
        display: flex;
        flex-flow: column nowrap;
        position: absolute;
        top: calc(100% + 1rem);
        right: 0;
        list-style: none;
        background: var(--color-text-invert);
        border: 1px solid var(--color-border);
        border-radius: 1.6rem;
        padding: 0.6rem 0;
        overflow: hidden;
        scale: 0.95;
        opacity: 0;
        transition: opacity 150ms, scale 150ms;
        pointer-events: none;
    }

    .order-choices.active {
        opacity: 1;
        scale: 1;
        pointer-events: all;
    }

    .order-choices__btn {
        display: block;
        padding: 0.8rem 1.6rem 0.8rem 4rem;
        background: transparent;
        border: none;
        font-size: 1.6rem;
        white-space: nowrap;
        width: 100%;
        cursor: default;
        text-align: left;
        transition: background-color 150ms, color 150ms;
        color: var(--color-text);
    }

    .order-choices__item {
        position: relative;
    }

    .order-choices__btn:hover {
        background-color: var(--color-primary);
        color: var(--color-text-invert);
    }

    .checked {
        display: none;
        position: absolute;
        width: 1.7rem;
        top: 50%;
        left: 2rem;
        transform: translate(-50%, -50%);
        transition: fill 150ms;
        pointer-events: none;
    }

    .order-choices__btn_checked + .checked {
        display: block;
    }

    .order-choices__btn:hover + .checked {
        fill: var(--color-text-invert);
    }
</style>