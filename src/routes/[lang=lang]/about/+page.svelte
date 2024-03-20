<script>
    import LL from '$i18n/i18n-svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import About from '$lib/components/sections/About.svelte';
    import details from '$lib/assets/img/details.png';
</script>

<svelte:head>
	<title>{$LL.about.title()} - Авто Ділер</title>
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.about.title()} />
<About />
<QuestionForm><img src={details} class="questions__img" alt="деталі"></QuestionForm>    
