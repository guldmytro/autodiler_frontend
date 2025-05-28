<script lang="ts">
    import LL from "$i18n/i18n-svelte";
    import IconClock from '$lib/assets/img/icon-clock.png'; 
	const now = new Date();
	const day = now.getDay(); // 0 = неділя, ..., 6 = субота
	const hour = now.getHours();
	const minute = now.getMinutes();

	function isWorkingTime(): boolean {
		if (day === 0) return false;
		if (day >= 1 && day <= 5) return hour >= 9 && hour < 18;
		if (day === 6) return hour >= 9 && hour < 15;
		return false;
	}

	function getNextWorkDateTime(): Date {
        const next = new Date(now);
        const currentDay = next.getDay();
        const currentHour = next.getHours();

        // Якщо сьогодні робочий день, але ще до початку
        if (
            (currentDay >= 1 && currentDay <= 5 && currentHour < 9) || // пн–пт до 9:00
            (currentDay === 6 && currentHour < 9) // субота до 9:00
        ) {
            next.setHours(9, 0, 0, 0);
            return next;
        }

        // Інакше шукаємо наступний робочий день
        next.setDate(next.getDate() + 1);

        for (let i = 0; i < 7; i++) {
            const day = next.getDay();

            if (day >= 1 && day <= 5) {
                next.setHours(9, 0, 0, 0); // пн–пт
                return new Date(next);
            }
            if (day === 6) {
                next.setHours(9, 0, 0, 0); // субота
                return new Date(next);
            }

            next.setDate(next.getDate() + 1); // +1 день
        }

        return next;
    }


	$: isOutOfHours = !isWorkingTime();
	$: nextProcessingTime = isOutOfHours ? getNextWorkDateTime() : null;
    $: message = isOutOfHours && nextProcessingTime ? String($LL.scheduleWarn())
        .replace('[when]', formatNextProcessingDate(nextProcessingTime))
        .replace('[image]', `<img src="${IconClock}" width="18" height="18" style="display: inline-block; margin-right: 4px; transform: translateY(3px)">`) : '';

	// Форматуємо дату як "понеділок, 09:00"
	function formatNextProcessingDate(date: Date): string {
		const days = String($LL.days()).split(', ');
		const dayName = days[date.getDay() !== now.getDay() ? date.getDay() : 7];
		const h = String(date.getHours()).padStart(2, "0");
		const m = String(date.getMinutes()).padStart(2, "0");

		return `${dayName} о ${h}:${m}`;
	}
</script>

{#if isOutOfHours && nextProcessingTime}
	<p class="schedule-warning">
		{@html message}
	</p>
{/if}

<style>
    .schedule-warning {
        margin-top: 1.8rem;
        color: orange;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
    }

    :global(.schedule-warning strong) {
        text-decoration: underline;
    }
</style>