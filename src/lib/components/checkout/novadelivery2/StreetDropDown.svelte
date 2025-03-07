<script>
    // @ts-nocheck
    import { novaDelivery2 } from "$lib/stores/novaDelivery2";
    import LL from "$i18n/i18n-svelte";

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
    let searchQueryOffice = '';


    function searchOffice() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(async () => {
            const res = await fetch('/api/delivery/street', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "cityRef": $novaDelivery2.cityHref,
                    "queryString": searchQueryOffice
                })
            }).then(r => r.json());

            $novaDelivery2.streets = filterOffices(res);
            $novaDelivery2.showOffices = true;
        }, 500);
        
    }

    /**
     * @param {any} res
     */
    function filterStreets(res) {
        if (!res.success) {
            return [];
        }
        // @ts-ignore
        const streets = res.data;
        return offices;
    }


    /**
     * @param {string} office
     */
    function setNovaOffice(office) {
        $novaDelivery2.novaOffice = office;
        openDropDown = false;
        searchQueryOffice = '';
        cities = [];
    }

</script>

{#if $novaDelivery2.showStreets}
    {#if form?.errors?.address === 'required'}
        <p class="errors">{$LL.checkoutErrors.city()}</p>
    {/if}
    <input type="text" name="address" class="input" placeholder="Введіть вашу адресу">
{/if}
