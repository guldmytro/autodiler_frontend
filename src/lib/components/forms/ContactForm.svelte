<script>
    import { enhance } from "$app/forms";
    import { addNotification } from '$lib/stores/notifications';
    import LL from '$i18n/i18n-svelte';

    let name = '';
    let phone = '';
    let errors = false;
    let loading = false;

    function send() {
        loading = true;
        // @ts-ignore
        return async ({result, update}) => {
            loading = false;
            if (result.status === 'ok') {
                name = '';
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

<div class="contact-form-wrapper">
    <form class="contact-form" method="post" action="/api/sendmail"
        use:enhance={send}>
        <div class="contact-form-header">
            <h2 class="contact-form-header__title">{$LL.contacts.form.title()}</h2>
            <p class="contact-form-header__subtitle">{$LL.contacts.form.subtitle()}</p>
        </div>
        <fieldset class="contact-form__fieldset">
            <div class="input-wrapper">
                <input type="text" name="name" placeholder="{$LL.feadback.name()}" class="input input_rounded"
                    bind:value={name}>
                {#if errors.name === 'required' }
                    <p class="errors">{$LL.feadback.errors.required.name()}</p>
                {/if}
            </div>
            <div class="input-wrapper">
                <input type="tel" name="phone" placeholder="{$LL.feadback.phone()}" class="input input_rounded"
                    bind:value={phone}>
                {#if errors.phone === 'required' }
                    <p class="errors">{$LL.feadback.errors.required.phone()}</p>
                {/if}
            </div>
            <button type="submit" disabled={loading} class="button">{$LL.feadback.callToAction()}</button>
        </fieldset>
    </form>
</div>



<style>
    .contact-form-wrapper {
        margin-left: auto;
        position: relative;
        isolation: isolate;
        width: 100%;
        max-width: 47rem;
    }

    .contact-form-wrapper::before {
        content: '';
        display: block;
        position: absolute;
        top: -4rem;
        left: -4rem;
        right: -4rem;
        bottom: -4rem;
        background-color: var(--color-primary);
        z-index: -1;
        border-radius: 50%;
    }

    .contact-form {
        margin-left: auto;
        display: flex;
        flex-flow: column nowrap;
        row-gap: 3rem;
        width: 100%;
        max-width: 47rem;
        padding: 4.5rem;
        background-image: linear-gradient(135deg, #222 50%, #a8a8a8);
        color: var(--color-text-invert);
        border-radius: 3rem;
        box-shadow: var(--box-shadow-2);
    }

    .contact-form-header {
        text-align: center;
    }

    .contact-form-header__title {
        font-weight: normal;
        font-size: 2.7rem;
        margin-bottom: 0.2em;
    }

    .contact-form__fieldset {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 2.4rem;
        border: none;
    }
    
    .input-wrapper {
        position: relative;
        height: 7rem;
    }

    .input-wrapper input {
        height: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .input-wrapper .errors {
        color: var(--color-text-invert);
        position: absolute;
        top: calc(100% + 0.1em);
        left: 2rem;
    }
    [type='submit'] {
        height: 7rem;
        text-transform: uppercase;
    }

    @media (max-width: 991px) {
        .contact-form-wrapper {
            margin-right: auto;
        }
    }

    @media (max-width: 575px) {
        .contact-form {
            padding-right: 15px;
            padding: 15px;
        }

        .input-wrapper {
            height: 4.5rem;
        }

        [type='submit'] {
            height: 4.5rem;
            text-transform: uppercase;
        }

    }
</style>