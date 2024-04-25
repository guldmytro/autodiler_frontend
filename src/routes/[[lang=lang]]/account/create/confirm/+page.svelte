<script>
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import LL from "$i18n/i18n-svelte";
</script>


<svelte:head>
	<title>{$LL.account.register.title()} - Авто Ділер</title>
</svelte:head>

<BreadCrumbs items={{}}  currentPage={$LL.account.register.title()}/>

<main class="login">
    <div class="container">
        <div class="login-row">
            <div class="auth-form">
                <div class="auth-form__inner">
                    <h1 class="auth-form__title">{$LL.account.confirm.title()}</h1>
                    <p>{$LL.account.confirm.p()}</p>
                </div>
            </div>
        </div>
    </div>
</main>