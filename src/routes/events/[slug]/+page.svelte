<script lang="ts">
	import type { PageData } from './$types';
	import Event from '../event.svelte';
	export let data: PageData;
	const { event } = data;
</script>

{#if event}
	<Event data={event} />
{:else}
	<p>Fant ikke dette arrangementet.</p>
{/if}
