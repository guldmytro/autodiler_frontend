<script>
    import secureIcon from '$lib/assets/img/secure.png';
    import LL from '$i18n/i18n-svelte';
</script>
<p class="secure">
    <img src={secureIcon} alt="щит" class="secure__icon" width="82" height="101">
    <span class="secure__text">{$LL.secure()}</span>
</p>

<style>
    .secure {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        column-gap: 1rem;
        font-size: 1.4rem;
    }

    .secure__icon {
        width: 1.8rem;
        flex-shrink: 0;
    }
    
    .secure__text {
        color: var(--color-secondary);
    }

    @media (max-width: 1199px) {
        .secure {
            display: none;
        }
    }
</style>