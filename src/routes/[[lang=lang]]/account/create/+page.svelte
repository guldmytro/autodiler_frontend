<script>
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import { locale } from "$i18n/i18n-svelte";
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import LL from "$i18n/i18n-svelte";
    export let form;

    let loading = false;
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
    

    function create() {
        loading = true;
        return async ({result, update}) => {
            loading = false;
            if (result.type === 'success') {
                goto(`/${localePrefix}account/create/confirm`);
            } else {
                await update();
            }
        }
    }
</script>

<svelte:head>
	<title>{$LL.account.register.title()} - Авто Ділер</title>
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.account.register.title()}/>

<main class="login">
    <div class="container">
        <div class="login-row">
            <form action="?/create" method="post" class="auth-form"
            use:enhance={create}>
                <div class="auth-form__inner">
                    
                    <h1 class="auth-form__title">{$LL.account.register.title()}</h1>
                    <label class="label-input">
                        <span class="label-input__title">{$LL.account.register.fields.email()}</span>
                        <input type="email" class="input" name="username">
                        <p class="errors">
                            {$LL.create.errors.username[form?.errors?.username]()}
                            {#if Array.isArray(form?.apiErrors?.username)}
                                {form?.apiErrors?.username[0].replace("ім'ям", 'e-mail').replace('именем', 'e-mail')}
                            {/if}
                        </p>
                    </label>
                    <label class="label-input">
                        <span class="label-input__title">{$LL.account.register.fields.password()}</span>
                        <input type="password" class="input" name="password">
                        <p class="errors">
                            {$LL.create.errors.password[form?.errors?.password]()}
                            {#if Array.isArray(form?.apiErrors?.password)}
                                {@html form?.apiErrors?.password.join('<br>')}
                            {/if}
                        </p>
                    </label>
                    <label class="label-input">
                        <span class="label-input__title">{$LL.account.register.fields.password2()}</span>
                        <input type="password" class="input" name="password2">
                        <p class="errors"></p>
                    </label>
                    <button type="submit" class="button" disabled={loading} class:button_loading={loading}>{$LL.account.register.fields.submit()}</button>
                </div>
            </form>
        </div>
    </div>
</main>