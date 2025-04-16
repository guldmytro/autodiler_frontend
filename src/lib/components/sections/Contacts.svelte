<script>
    import iconPhone from '$lib/assets/img/icon-phone.svg';
    import iconMail from '$lib/assets/img/icon-mail.svg';
    import iconClock from '$lib/assets/img/icon-clock.svg';
    import Socials from '../global/Socials.svelte';
    import ContactForm from '../forms/ContactForm.svelte';
    import LL from '$i18n/i18n-svelte';
    import { locale } from "$i18n/i18n-svelte";
</script>

<section class="contacts">
    <div class="container">
        <div class="contacts-row">
            <div class="col">
                <div class="section-header">
                    <h2 class="section-header__title">{$LL.contacts.title()}</h2>
                </div>
                <ul class="contacts-group">
                    <li class="contacts-item">
                        <div class="contacts-item__header">
                            <div class="icon-wrapper">
                                <img src={iconPhone} alt="телефон" class="contacts-item__icon" loading="lazy"
                                width="24" height="24">
                            </div>
                            <span class="contacts-item__title">{$LL.contacts.phone()}</span>
                        </div>
                        <ul class="contacts-item__list">
                            <li class="contacts-item__element">
                                <a href="tel:+380507673980">+38 (050) 767-39-80</a>
                            </li>
                            <li class="contacts-item__element">
                                <a href="tel:+380971687802">+38 (097) 168-78-02</a>
                            </li>
                        </ul>
                    </li>
                    <li class="contacts-item">
                        <div class="contacts-item__header">
                            <div class="icon-wrapper">
                                <img src={iconMail} alt="телефон" class="contacts-item__icon" loading="lazy"
                                width="24" height="24">
                            </div>
                            <span class="contacts-item__title">{$LL.contacts.mail()}</span>
                        </div>
                        <ul class="contacts-item__list">
                            <li class="contacts-item__element">
                                <a href="mailto:lebed@image-avto.com.ua">lebed@image-avto.com.ua</a>
                            </li>
                        </ul>
                    </li>
                    <li class="contacts-item">
                        <div class="contacts-item__header">
                            <div class="icon-wrapper">
                                <img src={iconClock} alt="телефон" class="contacts-item__icon" loading="lazy"
                                width="24" height="24">
                            </div>
                            <span class="contacts-item__title">{$LL.contacts.address()}</span>
                        </div>            
                        <ul class="contacts-item__list">
                            <li class="contacts-item__element">
                                {#if $locale === 'uk'}
                                    м. Харків, вул. Москалівська, 36
                                {:else}
                                    г. Харьков, ул. Москалевская, 36
                                {/if}
                            </li>
                            
                            <li class="contacts-item__element contacts-item__schedule">
                                {@html $LL.contacts.schedule()}
                            </li>
                        </ul>
                    </li>
                </ul>
                <Socials />
            </div>
            <div class="col">
                <ContactForm />
            </div>
        </div>
    </div>
</section>

<style>
    .contacts {
        overflow: hidden;
    }
    .contacts-row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .contacts-group {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 2rem;
        list-style: none;
    }

    .contacts-item__header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        column-gap: 0.5rem;
        padding-bottom: 0.8rem;
    }

    .icon-wrapper {
        background-color: var(--color-primary);
        width: 2.6rem;
        height: 2.6rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .contacts-item__icon {
        flex-shrink: 0;
        position: relative;
        top: 1px;
        width: 60%;
        height: auto;
    }

    .contacts-item__list {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        list-style: none;
        font-size: 2.4rem;
        row-gap: 0.15em;
    }
    .contacts-item__element {
        font-weight: 800;
        color: inherit;
    }

    .contacts-item__element a {
        color: inherit;
        text-decoration: none;
    }
    .contacts-item__schedule {
        font-weight: 400;
    }

    :global(.contacts-group + *) {
        margin-top: 2rem;
    }

    @media (max-width: 991px) {
        .contacts-group {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .contacts-row {
            grid-template-columns: minmax(0, 1fr);
            row-gap: 5rem;
        }
    }

    @media (max-width: 767px) {
        .contacts-group {
            grid-template-columns: minmax(0, 1fr);
        }
    }
</style>