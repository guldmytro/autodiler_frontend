<script>
    import { novaDelivery2 } from '$lib/stores/novaDelivery2';
    import LL from "$i18n/i18n-svelte";
    /**
     * @type {{ errors: { city: any; }; }}
     */
     export let form;

    let openDropDown = false;
    /**
     * @type {number | null | undefined}
     */
    let timer = null;
    /**
     * @type {any[]}
     */
    let cities = [];
    let searchQueryCity = '';
    let showNovaCityDropDown = false;
    function getCities() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(async () => {
            const searchQueryCleared = String(searchQueryCity).trim()
            if (!searchQueryCleared.length) {
                cities = [];
                showNovaCityDropDown = false;
                return;
            }
            const res = await fetch('/api/delivery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'searchQuery': searchQueryCity
                })
            }).then(r => r.json());

            if (res?.success) {
                cities = res?.data[0]?.Addresses || [];
                showNovaCityDropDown = true; 
            }
        }, 500);
    }

    /**
     * @param {string} city
     * @param {string} DeliveryCity
     */
    async function setNovaCity(city, DeliveryCity) {
        $novaDelivery2.cityHref = DeliveryCity;
        $novaDelivery2.novaCity = city;
        $novaDelivery2.street = '';
        openDropDown = false;
        showNovaCityDropDown = false;
        searchQueryCity = '';
        cities = [];
        const res = await fetch('/api/delivery/street', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "cityRef": $novaDelivery2.cityHref,
            })
        }).then(r => r.json());
        $novaDelivery2.streets = filterOffices(res);
        $novaDelivery2.showStreets = true;
    }

    /**
     * @param {any} res
     */
    function filterOffices(res) {
        if (!res.success) {
            return [];
        }
        // @ts-ignore
        const offices = res.data.filter(office => [
            '841339c7-591a-42e2-8233-7a0a00f0ed6f', 
            '9a68df70-0267-42a8-bb5c-37f427e36ee4'].indexOf(office?.TypeOfWarehouse) !== -1);
        return offices;
    }
</script>

<div class="shipping-select">
    <div class="dropdown">
        <label class="label-input">
            <span class="label-input__title">{$LL.checkout.city()} <span class="required">*</span></span>
            {#if form?.errors?.city2 === 'required'}
                <p class="errors">{$LL.checkoutErrors.city()}</p>
            {/if}
            <div class="dropdown-base">
                <input type="text" name="city2" bind:value={$novaDelivery2.novaCity} class="input dropdown__input" readonly placeholder={$LL.checkout.cityPlaceholder()} on:click={() => openDropDown = !openDropDown}>
                <svg width="24" height="24" viewBox="0 0 24 24" class="dropdown__icon" class:open={openDropDown}>
                    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="currentColor"/>
                </svg>
            </div>
        </label>
        {#if openDropDown}
            <div class="dropdown-box">
                <!-- svelte-ignore a11y-autofocus -->
                <input type="text" bind:value={searchQueryCity} name="city_search" class="input input_white" on:input={getCities} placeholder={$LL.checkout.cityPlaceholder2()} autofocus>
                {#if showNovaCityDropDown && cities.length && String(searchQueryCity).trim().length }    
                    <ul class="dropdown-list">
                        {#each cities as city, i}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <li class="dropdown-list__item" on:click={() => setNovaCity(city.Present, city.DeliveryCity)}>
                                {city.Present}
                            </li>
                        {/each}
                    </ul>
                {:else if showNovaCityDropDown && !cities.length}
                    <p class="empty-suggestions">{$LL.checkout.cityEmpty()}</p>
                {/if}
            </div>    
        {/if}
    </div>
</div>
