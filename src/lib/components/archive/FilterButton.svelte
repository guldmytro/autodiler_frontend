<script>
    import LL from "$i18n/i18n-svelte";
    import { termsMenu } from "$lib/stores/menu";
</script>

<button type="button" class="terms-btn" on:click={() => $termsMenu = !$termsMenu}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="terms-btn__icon">
        <path d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="terms-btn__text">{$LL.terms()}</span>
</button>

<style>
    .terms-btn {
        position: relative;
        display: none;
        flex-flow: row nowrap;
        align-items: center;
        border: none;
        background-color: transparent;
        font-size: 1.8rem;
        column-gap: 1.2rem;
        z-index: 20;
        background-color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        color: inherit;
    }

    .terms-btn__icon {
        flex-shrink: 0;
    }

    @media (max-width: 1199px) {
        .terms-btn {
            display: flex;
        }
    }
</style>