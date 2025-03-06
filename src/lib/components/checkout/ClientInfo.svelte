<script>
    // @ts-nocheck
    import LL from "$i18n/i18n-svelte";
    import CityDropdown from "./CityDropdown.svelte";
    import PostOfficeDropDown from "./PostOfficeDropDown.svelte";
    import LiqPayLogo from '$lib/assets/img/liqpay-white.svg';
    export let form;
    export let user;

    let novaCityRef = '';
    /**
     * @type {never[]}
     */
    let offices = [];
    let currentOffice;

    /**
     * @param {any} e
     */
    function setNovaCity(e) {
        novaCityRef = e.detail.cityRef;
        offices = e.detail.offices;
        currentOffice = '';
    }
</script>
<div class="checkout-form">
    <fieldset class="checkout-form__fieldset fieldset">
        <div class="fieldset__legend">{$LL.checkout.reciever()}</div>
        <div class="fields-box">
            <label class="label-input">
                <span class="label-input__title">{$LL.checkout.surname()} <span class="required">*</span></span>
                <input type="text" name="last_name" class="input" value={user?.last_name || ''}>
                <p class="errors">{#if form?.errors?.last_name === 'required'}{$LL.checkoutErrors.lastName()}{/if}</p>
            </label>
            <label class="label-input">
                <span class="label-input__title">{$LL.checkout.name()} <span class="required">*</span></span>
                <input type="text" name="first_name" class="input" value={user?.first_name || ''}>
                <p class="errors">{#if form?.errors?.first_name === 'required'}{$LL.checkoutErrors.firstName()}{/if}</p>
            </label>
            <label class="label-input">
                <span class="label-input__title">{$LL.checkout.phone()} <span class="required">*</span></span>
                <input type="tel" name="phone" class="input" value={user?.phone || ''}>
                <p class="errors">{#if form?.errors?.phone === 'required'}{$LL.checkoutErrors.phone()}{/if}</p>
            </label>
            <label class="label-input">
                <span class="label-input__title">{$LL.checkout.email()} <span class="required">*</span></span>
                <input type="email" name="email" class="input" value={user?.user?.email || ''}>
                <p class="errors">{#if form?.errors?.email === 'required'}{$LL.checkoutErrors.email()}{/if}</p>
            </label>
        </div>
    </fieldset>
    <fieldset class="checkout-form__fieldset fieldset delivery">
        <div class="fieldset__legend">{$LL.checkout.delivery()}</div>
        <div class="radio-box">
            <label class="label-radio">
                <input type="radio" class="radio" name="delivery" value="nd" checked>
                <span class="pseudo-radio"></span>
                <span class="radio-label">
                    <svg viewBox="0 0 24 24" width="20" height="20"><g fill="red"><path d="m23.8 11.5-4.4-4.8c-.1-.1-.2-.2-.3-.2-.1 0-.1.1-.1.3v10.3c0 .2 0 .3.1.4.1 0 .2 0 .3-.1l4.4-4.9c.3-.3.3-.7 0-1zM13.9 18v-4H10v4H7s-1 0 0 1.5c0 0 4 4.5 5 4.5s5-4.5 5-4.5c1-1.4 0-1.4 0-1.4l-3.1-.1zM13.9 6v4H10V6H7S6 6 7 4.5c0 0 4-4.5 5-4.5s5 4.5 5 4.5c1 1.4 0 1.4 0 1.4l-3.1.1zM4.5 6.6.2 11.5c-.2.3-.2.7 0 .9l4.3 4.9c.1.1.2.1.3.1.1 0 .1-.1.1-.3V6.8c0-.2 0-.3-.1-.3 0 0-.1 0-.3.1z"></path></g></svg>
                    <span>{$LL.checkout.novaDelivery()}</span>
                </span>
            </label>
            <CityDropdown on:setNovaCity={setNovaCity} {form} />
            <PostOfficeDropDown />
        </div>
        <div class="radio-box">
            <label class="label-radio">
                <input type="radio" class="radio" name="delivery" value="pu">
                <span class="pseudo-radio"></span>
                <span class="radio-label">
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 18c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zM15 14.059V9h2.5l2.5 3.333v1.726a3.484 3.484 0 0 0-5 0zM13 16h-2.051c-.245-1.691-1.69-3-3.449-3s-3.204 1.309-3.449 3H4V7h9v9zm-5.5 2c-.827 0-1.5-.673-1.5-1.5S6.673 15 7.5 15s1.5.673 1.5 1.5S8.327 18 7.5 18zM22 11.667 18.5 7H15c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v11h2.333c.006 0 .011-.003.017-.003A3.493 3.493 0 0 0 7.5 20a3.493 3.493 0 0 0 3.148-2h3.704a3.493 3.493 0 0 0 3.148 2 3.493 3.493 0 0 0 3.148-2H22v-6.333z"></path></svg>
                    <span>{$LL.checkout.selfdelivery()}</span>
                </span>
            </label>
        </div>
    </fieldset>
    <fieldset class="checkout-form__fieldset fieldset">
        <div class="fieldset__legend">{$LL.checkout.payment()}</div>
        <div class="radio-box">
            <label class="label-radio">
                <input type="radio" class="radio" name="payment_method" value="od" checked>
                <span class="pseudo-radio"></span>
                <span class="radio-label">{$LL.checkout.paymentAfter()}</span>
            </label>
        </div>

        <div class="radio-box">
            <label class="label-radio">
                <input type="radio" class="radio" name="payment_method" value="ol">
                <span class="pseudo-radio"></span>
                <span class="radio-label">
                    <img class="payment-logo" src={LiqPayLogo} width="500" height="104" alt="лікпей" loading="lazy">
                    Оплатити зараз
                </span>
            </label>
        </div>
    </fieldset>
    <fieldset class="checkout-form__fieldset fieldset">
        <div class="fieldset__legend">{$LL.checkout.comment()}</div>
        <textarea name="comment" class="textarea" cols="30" rows="5"></textarea>
    </fieldset>
</div>

<style>
    .checkout-form {
        --row-gap: 2.5rem;
        --column-gap: 4rem;
        display: flex;
        flex-flow: column nowrap;
        row-gap: var(--row-gap);
    }

    .checkout-form__fieldset {
        padding: 0;
        border: none;
    }

    .fieldset {
        display: flex;
        flex-flow: column nowrap;
        row-gap: calc(var(--row-gap) / 2.5);
    }

    .fieldset__legend {
        display: block;
        font-weight: 700;
    }

    .payment-logo {
        display: block;
        height: 20px;
        width: auto;
        position: relative;
        top: 1px;
    }
</style>