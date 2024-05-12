<script>
    import formImage from '$lib/assets/img/dropshipping/oil.png';
    import { enhance } from "$app/forms";
    import { addNotification } from '$lib/stores/notifications';
    import LL from '$i18n/i18n-svelte';

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

<section class="feadback">
    <div class="container">
        <div class="feadback-row">
            <div class="col">
                <div class="section-header">
                    <h2 class="section-header__title">{$LL.ds.feadback.title()}</h2>
                    <p class="section-header__subtitle">{$LL.ds.feadback.subtitle()}</p>
                </div>
                <form class="feadback-form" action="/api/senddropshipping-1" method="post" use:enhance={send}>
                    <fieldset class="feadback-form__fieldset">
                        <div class="input-wrapper">
                            <input type="tel" class="input" name="phone" placeholder="Ваш телефон" bind:value={phone}>
                            {#if errors.phone === 'required' }
                                <p class="errors">{$LL.feadback.errors.required.phone()}</p>
                            {/if}
                        </div>
                        <div class="input-wrapper">
                            <input type="email" class="input" name="email" placeholder="Ваш E-mail" bind:value={email}>
                            {#if errors.email === 'required' }
                                <p class="errors">{$LL.feadback.errors.required.email()}</p>
                            {/if}
                        </div>
                        <button type="submit" disabled={loading} class="button feadback-form__submit">{$LL.ds.feadback.submit()}</button>
                    </fieldset>
                </form>
            </div>
            <div class="col">
                <img class="feadback__img" src={formImage} alt="запчастини до авто" width="588" height="452">
            </div>
        </div>
    </div>
</section>

<style>
    .feadback {
        background-color: #222;
        color: var(--color-text-invert);
    }

    .feadback-row {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    }

    .section-header__title {
        margin-bottom: 0.2em;
    }
    
    .feadback-form__fieldset {
        padding: 0;
        border: none;
        display: flex;
        flex-flow: row nowrap;
        gap: 1rem;
    }
    
    .input-wrapper {
        position: relative;
    }
    
    .feadback-form__submit {
        border-radius: 0.8rem;
    }

    .feadback__img {
        position: relative;
        top: 1rem;
        right: 4rem;
        margin-right: auto;
        margin-left: auto;
        height: 10.6rem;
        scale: 3;
        width: auto;
    }

    .input {
        height: 100%;
    }

    .errors {
        position: absolute;
        color: var(--color-text-invert);
        left: 1em;    
        top: calc(100% + 0.1em);
    }

    @media (max-width: 991px) {
        .feadback-row {
            grid-template-columns: minmax(0, 1fr);
        }

        .feadback__img {
            position: relative;
            top: 1rem;
            right: 4rem;
            margin-right: auto;
            margin-left: auto;
            width: 100%;
            scale: none;
            height: auto;
            max-width: 40rem;
        }
    }

    @media (max-width: 575px) {
        .feadback-form__fieldset {
            row-gap: 2.4rem;
            flex-direction: column;
        }
        .input {
            height: 4rem;
        }
    }
</style>