<script>
    import oil from '$lib/assets/img/oil.png';
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

<section class="questions">
    <div class="container">
        <slot><img src={oil} class="questions__img" alt="деталі до машини"></slot>
        <form class="questions-form" method="post" action="/api/sendmail"
            use:enhance={send}>
            <div class="section-header">
                <h2 class="section-header__title">{$LL.feadback.title()}</h2>
                <p class="section-header__subtitle">{$LL.feadback.subtitle()}</p>
            </div>
            <fieldset class="questions-form__fieldset">
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
</section>

<style>
    .questions {
        position: relative;
        padding: 4rem 0 2rem;
        background: url("$lib/assets/img/bg-form.jpg") center / cover;
        color: #fff;
        z-index: 90;
    }

    .questions::before {
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: -0.5px;
        height: 13rem;
        background-color: #fff;
        z-index: 2;
    }

    .questions::after {
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .questions .container {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 6rem;
        position: relative;
        z-index: 2;
        isolation: isolate;
    }

    .questions .container::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: -10rem;
        width: 40%;
        z-index: -1;
        background: radial-gradient(ellipse 52% 52% at center, rgba(129, 149, 208, 0.3), transparent);
        pointer-events: none;
    }

    .section-header__title {
        padding-bottom: 0.2em;
    }

    .questions-form {
        padding-top: 16rem;
    }

    .questions-form {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 3rem;
        width: 100%;
    }

    .questions-form__fieldset {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 1rem;
        border: none;
    }

    .questions-form__fieldset > * {
        flex-grow: 1;
    }
    
    .input-wrapper {
        position: relative;
    }

    .input-wrapper input {
        height: 100%;
    }

    .input-wrapper .errors {
        color: var(--color-text-invert);
        position: absolute;
        top: calc(100% + 0.1em);
        left: 1em;
    }

    @media (max-width: 991px) {
        .questions {
            padding-bottom: 0;
        }

        .questions .container {
            flex-flow: column nowrap;
        }

        .questions .container::before {
            content: none;
        }

        .questions-form {
            order: 1;
        }

        :global(.questions .questions__img) {
            order: 2;
            margin-bottom: -4rem;
            width: 100%;
            max-width: 35rem;
            margin-right: auto;
            margin-left: auto;
            height: auto;
        }
    }

    @media (max-width: 991px) {
        .questions-form__fieldset {
            flex-flow: column nowrap;
            row-gap: 1rem;
        }

        .questions-form__fieldset input {
            padding-top: 0.8em;
            padding-bottom: 0.8em;
        }
    }

    @media (max-width: 575px) {
        .questions {
            margin-top: var(--padding-section);
        }
        .questions::before {
            content: none;
        }

        .questions-form {
            padding-top: 0;
        }
    }
</style>