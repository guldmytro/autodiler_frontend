<script lang="ts">
    import { dontLeave } from '$lib/stores/menu';
    import logo from '$lib/assets/img/banner/banner.png';
    import logoWebp from '$lib/assets/img/banner/banner.webp';
    import { LL } from '$i18n/i18n-svelte';
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { enhance } from '$app/forms';
    import { addNotification } from '$lib/stores/notifications';

    let phone = '';
    let errors = false;
    let loading = false;

    function send() {
        loading = true;
        // @ts-ignore
        return async ({result, update}) => {
            loading = false;
            $dontLeave = false;
            if (result.status === 'ok') {
                phone = '';
                errors = false;
                addNotification('dontLeave', {'id': Date.now(), 'status': 'ok'})
            } else if (result?.errors && Object.keys(result?.errors).length) {
                errors = result?.errors;
            } else {
                errors = false;
                addNotification('email', {'id': Date.now(), 'status': 'bad'})
            }
        }
    }
</script>

{#if $dontLeave}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="dont-leave-bg" on:click={() => dontLeave.set(false)}
        in:fade={{ duration: 180 }}
        out:fade={{ duration: 130 }}>
        <div class="dont-leave" on:click={(e) => e.stopPropagation()}
            
        in:fly={{ y: 30, delay: 100, duration: 180 }}
        out:fly={{ y: 30, duration: 130 }}>
            <div class="dont-leave__content">
                <h2 class="dont-leave__title">{$LL.dlTitle()}</h2>
                <p class="dont-leave__desc">
                    <strong>{$LL.dlSubtitle()}</strong> 📦 
                    {$LL.dlSubtitle2()}
                </p>
                <form action="/api/dontleave" method="post" class="dont-leave__form" use:enhance={send}>
                    <fieldset class="dont-leave__fieldset">
                        <input type="tel" name="phone" placeholder="Ваш телефон" required class="dont-leave__input">
                        <button type="submit" disabled={loading} class="dont-leave__submit">{$LL.dlButton()}</button>
                    </fieldset>
                </form>
            </div>
            <div class="dont-leave__img">
                <picture>
                    <source srcset={logoWebp} type="image/webp">
                    <img src={logo} alt="Dont leave" loading="lazy" width="1948" height="1298">
                </picture>
            </div>
        </div>
    </div>
{/if}

<style>
    .dont-leave-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        z-index: 9998;
    }
    .dont-leave {
        display: grid;
        grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
        align-items: center;
        position: fixed;
        top: 70px;
        left: 50%;
        max-width: 1200px;
        width: calc(100% - 40px);
        background-image: linear-gradient(to right, #222 0%, #222 50%, #2F2F2E 100%);
        color: #fff;
        z-index: 9999;
        transform: translateX(-50%);
        padding: 70px clamp(
                    20px,
                    calc(20px + (50 * ((100vw - 375px) / (1920 - 375)))),
                    70px
                ) 75px;
        border: 7px solid #FFBF00;
        border-radius: 50px;
    }
    .dont-leave__content {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 15px;

    }
    .dont-leave__title {
        font-size: clamp(
                    36px,
                    calc(36px + (8 * ((100vw - 375px) / (1920 - 375)))),
                    42px
                );
        font-weight: 800;
        line-height: 132%;
    }
    .dont-leave__desc {
        font-size: clamp(
                    18px,
                    calc(18px + (2 * ((100vw - 375px) / (1920 - 375)))),
                    20px
                );
        line-height: 132%;
    }
    .dont-leave__desc strong {
        color: #FFC60A;
    }

    .dont-leave__img {
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
        justify-self: center;
        align-self: center;
    }

    .dont-leave__img img {
        width: 80%;
        margin-left: auto;
        scale: 2;
    }
    .dont-leave__form {
        margin-top: 10px;
        width: 100%;
    }

    .dont-leave__fieldset {
        width: fit-content;
        border: none;
        padding: 0;
        margin: 0;
        position: relative;
    }

    .dont-leave__input {
        border-radius: 200px;
        height: 64px;
        padding-left: 20px;
        border: none;
        padding-right: 200px;
        font-size: 18px;
        box-shadow: var(--box-shadow);
    }

    .dont-leave__submit {
        position: absolute;
        right: 5px;
        top: 5px;
        bottom: 5px;
        background-color: var(--color-primary);
        border: none;
        border-radius: 200px;
        color: #fff;
        padding: 0 20px;
        font-size: 18px;
    }

    @media (max-width: 991px) {
        .dont-leave {
            grid-template-columns: minmax(0, 1fr);
            row-gap: 60px;
            text-align: center;
            max-width: 750px;
            max-height: 80svh;
            overflow: auto;
        }
        .dont-leave__input, 
        .dont-leave__fieldset {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
        }
        .dont-leave__content {
            justify-items: center;
        }
        .dont-leave__desc {
            max-width: 500px;
        }
        .dont-leave__img img {
            scale: 1.3;
            margin: 0 auto;
        }
    }

    @media (max-width: 620px) {
        .dont-leave__img img {
            scale: 1.7;
        }
    }

    @media (max-width: 500px) {
        .dont-leave__fieldset {
            width: 100%;
        }
        .dont-leave__input {
            padding-right: 20px;
            width: 100%;
            max-width: 100%;
            display: block;          
        }
        .dont-leave__submit {
            position: static;
            width: 100%;
            margin-top: 10px;
            height: 64px;
        }
    }
</style>