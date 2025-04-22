<script>
    import HeaderMobileMenu from "./HeaderMobileMenu.svelte";
    import Socials from "./Socials.svelte";
    import Phones from "./Phones.svelte";
    import { mobileMenu } from "$lib/stores/menu";
    import { fly } from "svelte/transition";
    import Account from "./Account.svelte";
    import DownloadLink from "./DownloadLink.svelte";
    import Secure from "./Secure.svelte";
</script>


{#if $mobileMenu }
    <div class="mobile-wrapper" 
        in:fly={{ y: -30, duration: 180 }}
        out:fly={{ y: -30, duration: 130 }}>
        <div class="container">
            <div class="mobile-row">
                <HeaderMobileMenu />
                <hr>
                <Account mobile={true} />
                <hr>
                <Secure />
                <hr>
                <DownloadLink />
                <hr>
                <Phones />
                <hr>
                <Socials />
            </div>
        </div>
    </div>    
{/if}


<style>
    .mobile-wrapper {
        display: none;
        position: absolute;
        width: 100%;
        left: 0;
        top: calc(100% - 1px);
        background-color: var(--color-text-invert);
        z-index: 1;
        border-bottom: 2px solid var(--color-border);
    }

    .mobile-row {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 1.5rem;
        align-items: center;
        padding: 2.5rem 0;
    }

    hr {
        width: 100%;
        max-width: 25rem;
        border: none;
        display: block;
        height: 2px;
        background-color: #f5f5f5;
    }

    @media (max-width: 991px) {
        .mobile-wrapper {
            display: block;
        }
    }
</style>