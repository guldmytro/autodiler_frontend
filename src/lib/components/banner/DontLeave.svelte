<script lang="ts">
    import { dontLeave } from '$lib/stores/menu';
    import logo from '$lib/assets/img/banner/banner.png';
    import logoWebp from '$lib/assets/img/banner/banner.webp';
    import { LL } from '$i18n/i18n-svelte';
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
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
                <div class="dont-leave__controls">
                    <a href="tel:+380990791764" class="dont-leave__button">
                        {$LL.dlButton()}
                    </a>
                    <span class="dont-leave__flash">
                        <span>
                            {$LL.dlText()}
                        </span>
                        <svg width="157" height="35" viewBox="0 0 157 35" fill="none">
                            <path d="M1.15684 6.12241C0.63869 6.31354 0.373571 6.88853 0.5647 7.40669L3.67933 15.8506C3.87046 16.3687 4.44545 16.6338 4.96362 16.4427C5.48177 16.2516 5.74689 15.6766 5.55576 15.1584L2.78719 7.65276L10.2929 4.8842C10.811 4.69307 11.0761 4.11808 10.885 3.59992C10.6939 3.08176 10.1189 2.81665 9.60072 3.00778L1.15684 6.12241ZM149.503 1.06062L148.774 1.74484C152.376 5.58448 154.173 9.12208 154.532 12.2629C154.887 15.3646 153.855 18.2163 151.504 20.7707C146.724 25.9631 136.565 29.8242 122.238 31.353C93.6919 34.3992 49.499 28.0889 1.92163 6.15249L1.50291 7.06062L1.0842 7.96874C48.92 30.0243 93.4759 36.4336 122.451 33.3417C136.884 31.8015 147.679 27.8791 152.975 22.1253C155.662 19.2066 156.949 15.7946 156.52 12.0358C156.094 8.31617 154.004 4.39662 150.232 0.376392L149.503 1.06062Z" fill="currentColor"/>
                        </svg>
                    </span>
                </div>
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
                    50px,
                    calc(50px + (20 * ((100vw - 375px) / (1920 - 375)))),
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
    .dont-leave__controls {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 15px;
        align-items: center;
        margin-top: 10px;
    }
    .dont-leave__button {
        border-radius: 200px;
        color: #fff;
        text-decoration: none;
        background-image: linear-gradient(to right, #97150F 0%, #FF0B00 100%);
        font-size: clamp(
                    18px,
                    calc(18px + (2 * ((100vw - 375px) / (1920 - 375)))),
                    20px
                );
        padding-block: 1.25em;
        padding-inline: 2.75em;
        width: fit-content;
        box-shadow: 0 0 50px rgba(255, 11, 0, 0.502);
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
    .dont-leave__flash {
        padding-inline: 1.75em;
        position: relative;
        font-size: clamp(
                    18px,
                    calc(18px + (2 * ((100vw - 375px) / (1920 - 375)))),
                    20px
                );
    }
    .dont-leave__flash svg {
        position: absolute;
        top: 100%;
        right: 45%;
        width: 60%;
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
        .dont-leave__flash {
            display: none;
        }
        .dont-leave__img img {
            scale: 1.7;
        }
        .dont-leave__button {
            padding-inline: 1.5em;
        }
    }
</style>