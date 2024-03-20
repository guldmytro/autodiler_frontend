<script>
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import LL from "$i18n/i18n-svelte";
    import { locale } from "$i18n/i18n-svelte";
</script>

<svelte:head>
	<title>{$LL.account.register.title()} - Авто Ділер</title>
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.account.register.title()} />

<main class="login">
    <div class="container">
        <div class="login-row">
            <div class="auth-form">
                <div class="auth-form__inner">
                    <svg width="24" height="24" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="add-copy" fill="green" transform="translate(42.666667, 42.666667)">
                                <path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.43872,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.438933,384 213.333333,384 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z" id="Shape"></path>
                            </g>
                        </g>
                    </svg>
                    <h1 class="auth-form__title">{$LL.account.success.title()}</h1>
                    <p class="create create_left">{$LL.account.success.p()} <a href="/{$locale}/account/login">{$LL.account.success.p2()}</a></p>
                </div>
            </div>
        </div>
    </div>
</main>