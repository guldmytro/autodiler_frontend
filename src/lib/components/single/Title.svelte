<script lang="ts">
    export let title: string;
</script>

<h1>{title}</h1>

<style>
    h1 {
        font-weight: 700;
        font-size: 2.8rem;
    }

    @media (max-width: 575px) {
        h1 {
            font-size: 2rem;
        }
    }
</style>