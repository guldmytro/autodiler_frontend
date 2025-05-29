<script>
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import LL from "$i18n/i18n-svelte";
</script>


<svelte:head>
	<title>{$LL.login.form.title()} - Авто Ділер</title>
</svelte:head>

<BreadCrumbs items={{}}  currentPage={$LL.login.form.title()}/>

<main class="login">
    <div class="container">
        <div class="login-row">
            <div class="auth-form">
                <div class="auth-form__inner">
                    <svg class="auth-form__email" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#b30800" d="M15 16L20 21M20 16L15 21M4 21C4 17.134 7.13401 14 11 14M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1 class="auth-form__title">{$LL.confirmEmailTitle()}</h1>
                    <p class="auth-form__subtitle">{$LL.confirmEmailSubTitle()}</p>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .auth-form:has(.auth-form__email) {
        text-align: center;
    }

    .auth-form__email {
        margin-inline: auto;
        width: 70px;
    }
</style>