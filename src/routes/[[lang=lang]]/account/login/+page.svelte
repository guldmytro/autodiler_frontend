<script>
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import { locale } from "$i18n/i18n-svelte";
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { addNotification, notifications } from "$lib/stores/notifications";
    import LL from "$i18n/i18n-svelte";
    export let form;
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';

    let loading = false;

    function login() {
        loading = true;
        return async ({result, update}) => {
            loading = false;
            if (result.type !== 'success') {
                if ([400, 401].includes(result.status)) {
                    addNotification('login', {
                        id: Date.now(),
                        message: $LL.login.errors['error' + result.status]()
                    });
                } 
                return await update();
            }
            goto(`/${localePrefix}account/login/check-email?email=${result?.data?.serverData?.email}`);
        }
    }
    
</script>


<svelte:head>
	<title>{$LL.login.form.title()} - Авто Ділер</title>
</svelte:head>

<BreadCrumbs items={{}}  currentPage={$LL.login.form.title()}/>

<main class="login">
    <div class="container">
        <div class="login-row">
            <form action="?/login" method="post" class="auth-form"
            use:enhance={login}>
                <div class="auth-form__inner">
                    <h1 class="auth-form__title">{$LL.login.form.title()}</h1>
                    <label class="label-input">
                        <span class="label-input__title">E-mail</span>
                        <input type="email" class="input" name="email" required placeholder="your@mail.com">
                    </label>
                    <button type="submit" class="button" disabled={loading} class:button_loading={loading}>{$LL.login.form.submit()}</button>
                </div>
            </form>
        </div>
    </div>
</main>
