<script>
    import { addNotification } from "$lib/stores/notifications";
    import LL from "$i18n/i18n-svelte";
    import { locale } from "$i18n/i18n-svelte";
    import { enhance } from "$app/forms";
    import { goto, invalidateAll } from "$app/navigation";
    let loading = false;
    let errors = null;

    export let profile;

    function updateInfo() {
        loading = true;
        return async ({result, update}) => {
            loading = false;
            errors = result?.data?.errors;
            if (result.type === 'success') {
                addNotification('login', {
                    id: Date.now(),
                    type: result.type,
                    title: $LL.account.userForm.title(),
                    message: $LL.account.userForm.success()
                });
                await invalidateAll();
            }
            if (result.status === 400) {
                return await update();
            }
            if ([500].includes(result.status)) {
                addNotification('login', {
                    id: Date.now(),
                    type: result.type,
                    title: $LL.account.userForm.title(),
                    message: $LL.account.userForm.error500()
                });
            }
            if (result.status === 401) {
                goto(`/${$locale}/account/dashboard`);
            }
        }
    }
</script>

<div class="account-box">
    <h2 class="account-box__title">{$LL.account.info.title()}</h2>
    <form action="?/update" class="account-form" method="post" use:enhance={updateInfo}>
        <div class="grid">
            <label class="label-input">
                <span class="label-input__title">{$LL.account.info.fields.first_name()}</span>
                <input type="text" name="first_name" class="input" value={profile.first_name}>
                {#if errors?.first_name === 'required'}
                    <p class="errors">{$LL.checkoutErrors.firstName()}</p>
                {/if}
            </label>
            <label class="label-input">
                <span class="label-input__title">{$LL.account.info.fields.last_name()}</span>
                <input type="text" name="last_name" class="input" value={profile.last_name}>
                {#if errors?.last_name === 'required'}
                    <p class="errors">{$LL.checkoutErrors.lastName()}</p>
                {/if}
            </label>
            <label class="label-input">
                <span class="label-input__title">{$LL.account.info.fields.phone()}</span>
                <input type="tel" name="phone" class="input" value={profile.phone}>
                {#if errors?.phone === 'required'}
                <p class="errors">{$LL.checkoutErrors.phone()}</p>
            {/if}
            </label>
        </div>
        <label class="label-input">
            <button type="submit" class="button" disabled={loading} class:button_loading={loading}>{$LL.account.info.fields.save()}</button>
        </label>
    </form>
</div>

<style>
    .account-form {
        display: grid;
        gap: 1.5rem;
    }

    .grid {
        gap: 1.5rem;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .button {
        margin-right: auto;
    }

    @media (max-width: 767px) {
        .grid {
            grid-template-columns: minmax(0, 1fr);
        }
    }
</style>
