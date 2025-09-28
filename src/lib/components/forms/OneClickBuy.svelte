<script>
    // @ts-nocheck
    import { enhance } from "$app/forms";
    import { fly } from "svelte/transition";
    import { activeOneClickBuy } from "$lib/stores/oneclickbuy";
    import LL from "$i18n/i18n-svelte";
    export let product;

    let sent = false;
    let errors = false;
    let loading = false;
    $: showForm = $activeOneClickBuy == product.id;

    function send() {
        localStorage.setItem("buyed", "true");
        loading = true;
        // @ts-ignore
        return async ({result, update}) => {
            loading = false;
            if (result.status === 'ok') {
                errors = false;
                activeOneClickBuy.set('');
                sent = true;
                setTimeout(() => {sent = false}, 5000);
            } else {
                errors = result?.errors;
            }
        }
    }
</script>

{#if showForm }    
    <div class="one-click-form-wrapper"
        in:fly={{ y: 30, duration: 180 }}
        out:fly={{ y: 30, duration: 130 }}>
        <form class="one-click-form" action="/api/oneclick" method="post"
            use:enhance={send}>
            <button type="button" aria-label="закрити форму" class="btn-delete"
            on:click={() => activeOneClickBuy.set('')}></button>
            <div class="one-click-form__header">
                <p class="one-click-form__p">
                    <strong>
                        {$LL.oneClick.header1()}
                    </strong>
                </p>
                <p class="one-click-form__p">
                    {$LL.oneClick.header2()}
                </p>
            </div>
            <!-- svelte-ignore a11y-autofocus -->
            <label class="label-input">
                <span class="label-input__title">Телефон <span class="required">*</span></span>
                <input type="hidden" name="product_id" value={product.slug}>
                <input type="tel" name="phone" class="input">
                {#if errors?.phone === 'required'}
                    <p class="errors">{$LL.oneClick.errors.phone.required()}</p>
                {/if} 
            </label>
            <button type="submit" class="button" class:loading disabled={loading}>{$LL.oneClick.callToAction()}</button>
        </form>
    </div>
{:else if sent}
    <div class="one-click-form-wrapper"
        in:fly={{ y: 30, duration: 180 }}
        out:fly={{ y: 30, duration: 130 }}>
        <div class="one-click-form">
            <div class="one-click-form__header">
                <p class="one-click-form__p"><strong>{$LL.oneClick.success1()}</strong></p>
                <p class="one-click-form__p">{$LL.oneClick.success2()}</p>
            </div>
        </div>
    </div>
{/if}

<style>
    .one-click-form-wrapper {
        position: absolute;
        top: 100%;
        left: 0;
        margin-right: -999px;
        background-color: #fff;
        box-shadow: var(--box-shadow);
        isolation: isolate;
        border-radius: 1rem;
        max-width: 28rem;
        z-index: 99;
    }

    .one-click-form-wrapper::before {
        position: absolute;
        left: 2rem;
        top: 0;
        content: '';
        display: block;
        width: 2rem;
        height: 2rem;
        box-shadow: inherit;
        transform: rotate(-45deg) translateY(-50%);
        background-color: inherit;
        z-index: -1;
    }

    .one-click-form {
        --gap: 1rem;
        position: relative;
        padding: 2rem;
        display: flex;
        flex-flow: column nowrap;
        row-gap: var(--gap);
        background-color: inherit;
        border-radius: 1rem;
    }

    .one-click-form__p {
        font-size: 1.4rem;
    }

    .one-click-form__header > * + * {
        margin-top: 0.4em;
    }

    .btn-delete {
        width: 2rem;
        height: 2rem;
        top: var(--gap);
        right: var(--gap);
        position: absolute;
    }
    
    .button {
        transition: color 150 ease;
    }

    .button.loading {
        position: relative;
        color: transparent;
    }

    .button.loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        width: 22px;
        aspect-ratio: 1;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        border-top-color: rgba(255, 255, 255, 0.9);
        animation-name: spin;
        animation-duration: 0.6s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes spin {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }

    @media (max-width: 450px) {
        
        :global(main.product .one-click-form-wrapper) {
            transform: translateX(-40%);
        }

        :global(main.product .one-click-form-wrapper::before) {
            left: 50%!important;
        }
    }
</style>