<script>
	import { onMount } from 'svelte';
	import LL from "$i18n/i18n-svelte";
	let visible = false;

	onMount(() => {
		// Ховаємо банер, якщо вже вибір зроблено
		const saved = localStorage.getItem("cookieConsent");
		if (saved === "accepted" || saved === "rejected") {
			visible = false;
		} else {
            visible = true;
        }
	});

	function accept() {
		window.clarity("consentv2", {
			ad_storage: "granted",
			analytics_storage: "granted"
		});
		localStorage.setItem("cookieConsent", "accepted");
		visible = false;
	}

	function reject() {
		window.clarity("consentv2", {
			ad_storage: "denied",
			analytics_storage: "denied"
		});
		localStorage.setItem("cookieConsent", "rejected");
		visible = false;
	}
</script>

{#if visible}
	<div class="cookie-banner">
		<p>{$LL.cookieText()}</p>
		<div class="buttons">
			<button class="reject" on:click={() => reject()}>{$LL.cookieTextReject()}</button>
			<button class="accept" on:click={() => accept()}>{$LL.cookieTextAccept()}</button>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		max-width: 500px;
		background: #fff;
		color: #333;
		padding: 16px;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.15);
		font-family: Arial, sans-serif;
		display: flex;
		flex-direction: column;
		gap: 12px;
		z-index: 10000;
	}
	.cookie-banner p {
		margin: 0;
		font-size: 14px;
	}
	.cookie-banner .buttons {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
	}
	.cookie-banner button {
		padding: 8px 14px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-size: 14px;
	}
	.cookie-banner button.accept {
		background: var(--color-primary);
		color: white;
	}
	.cookie-banner button.reject {
		background: #e0e0e0;
		color: #333;
	}
</style>
