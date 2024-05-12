<script>
    import LL from '$i18n/i18n-svelte';
    import { takeOffer } from "$lib/stores/menu";
    import { fly } from "svelte/transition";

    import { enhance } from "$app/forms";
    import { addNotification } from '$lib/stores/notifications';

    let email = '';
    let phone = '';
    let errors = false;
    let loading = false;

    function send() {
        loading = true;
        // @ts-ignore
        return async ({result, update}) => {
            loading = false;
            if (result.status === 'ok') {
                email = '';
                phone = '';
                errors = false;
                $takeOffer = false;
                addNotification('email', {'id': Date.now(), 'status': 'ok'})
            } else if (result?.errors && Object.keys(result?.errors).length) {
                errors = result?.errors;
            } else {
                errors = false;
                addNotification('email', {'id': Date.now(), 'status': 'bad'})
            }
        }
    }
</script>
{#if $takeOffer}
    <form 
        method="post"
        class="take-offer" 
        in:fly={{ y: 30, duration: 180 }} out:fly={{ y: 30, duration: 130 }}
        action="/api/take-offer"
        use:enhance={send}>
        <button type="button" aria-label="закрити форму" class="btn-delete" on:click={() => $takeOffer = false}></button>
        <div class="take-offer__header">
            <h2 class="take-offer__title">{$LL.ds.takeOffer.title()}</h2>
            <p class="take-offer__subtitle">{$LL.ds.takeOffer.subtitle()}</p>
        </div>

        <fieldset class="take-offer__fieldset">
            {#each Array(100) as i }
                {$LL.ds.clientTypes[1]()}
            {/each}
            <div class="select-wrapper">
                <select name="client_type" class="select">
                    {#each Array(100) as el, i }
                        {#if $LL.ds.takeOffer.clientTypes[i]()}
                            {#if i === 0}
                                <option value="">{$LL.ds.takeOffer.clientTypes[i]()}</option>
                            {:else}
                                <option value={$LL.ds.takeOffer.clientTypes[i]()}>
                                    {$LL.ds.takeOffer.clientTypes[i]()}
                                </option>
                            {/if}
                        {/if}
                    {/each}
                </select>
                {#if errors.clientType === 'required'}
                    <p class="errors">
                        {$LL.ds.takeOffer.errors.clientType.required()}
                    </p>
                {/if}
            </div>
            <div class="select-wrapper">
                <select name="product_type" class="select">
                    {#each Array(100) as el, i }
                        {#if $LL.ds.takeOffer.productTypes[i]()}
                            {#if i === 0}
                                <option value="">{$LL.ds.takeOffer.productTypes[i]()}</option>
                            {:else}
                                <option value={$LL.ds.takeOffer.productTypes[i]()}>
                                    {$LL.ds.takeOffer.productTypes[i]()}
                                </option>
                            {/if}
                        {/if}
                    {/each}
                </select>
                {#if errors.productType === 'required'}
                    <p class="errors">
                        {$LL.ds.takeOffer.errors.productType.required()}
                    </p>
                {/if}
            </div>
            <div class="input-wrapper">
                <input type="text" name="name" class="input" placeholder="{$LL.ds.takeOffer.name()}">
                {#if errors.name === 'required'}
                    <p class="errors">
                        {$LL.ds.takeOffer.errors.name.required()}
                    </p>
                {/if}
            </div>
            <div class="input-wrapper">
                <input type="text" name="phone" class="input" placeholder="{$LL.ds.takeOffer.phone()}">
                {#if errors.phone === 'required'}
                    <p class="errors">
                        {$LL.ds.takeOffer.errors.phone.required()}
                    </p>
                {/if}
            </div>
            <div class="input-wrapper">
                <input type="city" name="city" class="input" placeholder="{$LL.ds.takeOffer.city()}">
                {#if errors.city === 'required'}
                    <p class="errors">
                        {$LL.ds.takeOffer.errors.city.required()}
                    </p>
                {/if}
            </div>

            <button type="submit" class="button take-offer__submit">{$LL.ds.takeOffer.submit()}</button>
        </fieldset>
    </form>
{/if}

<style>
    .take-offer {
        position: fixed;
        top: 50%;
        left: 50%;
        padding: 2.6rem 2.4rem;
        width: 100%;
        max-width: 45rem;
        box-shadow: var(--box-shadow);
        z-index: 9999;
        border-radius: 1rem;
        background-color: #fff;
        transform: translate(-50%, -50%);
    }

    .btn-delete {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    .take-offer__header {
        text-align: center;
        margin-bottom: 1em;
    }

    .take-offer__title {
        font-size: 2.4rem;
    }
    .take-offer__subtitle {
        color: #747474;
        font-size: 1.4rem;
    }

    .take-offer__fieldset {
        border: none;
        padding: 0;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 0.9rem;
    }

    .select-wrapper {
    }
    .select {
    }
    .input {
    }
    .button {
    }
    .take-offer__submit {
        border-radius: 0.8rem;
    }

    .errors {
        padding-left: 1em;
        margin-top: 0.2em;
    }

    @media (max-width: 575px) {
        .take-offer {
            padding-right: 15px;
            padding-left: 15px;
        }
    }
</style>