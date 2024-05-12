<script>
    import { takeOffer } from "$lib/stores/menu";
    import LL from "$i18n/i18n-svelte";
</script>

<main class="dropshipping">
    <div class="container">
        <div class="dropshipping-row">
            <h1 class="dropshipping__title">
                {@html $LL.ds.main.title()}
            </h1>
            <button type="button" class="button dropshipping__btn" on:click={() => $takeOffer = true}>
                {@html $LL.ds.main.button()}
            </button>
        </div>
    </div>
</main>

<style>
    .dropshipping {
        position: relative;
        padding: 14rem 0 16rem;
        background: url("$lib/assets/img/dropshipping/worker.jpg") no-repeat right top / cover;
        color: var(--color-text-invert);
        isolation: isolate;
    }

    .dropshipping-row {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        row-gap: 2.2rem;
    }

    .dropshipping::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.61);
        z-index: -1;
    }

    .dropshipping__title {
        font-size: 4.5rem;
        line-height: 1.15;
    }

    .dropshipping__btn {
        background-color: var(--color-primary);
        border: none;
        color: var(--color-text-invert);
        padding: 1.5rem 3.5rem;
        border-radius: 0.8rem;
        line-height: 1;
        text-transform: uppercase;
        font-size: 1.6rem;
    }

    @media (max-width: 767px) {
        .dropshipping {
            background-position: top right 20%;
        }
    }

    @media (max-width: 575px) {
        .dropshipping-row {
            align-items: center;
        }
        .dropshipping__title {
            font-size: 3.5rem;
            text-align: center;
        }
    }
</style>