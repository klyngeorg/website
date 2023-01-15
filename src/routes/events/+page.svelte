<script lang="ts">
	import type { PageData } from './$types';
	import Event from './event.svelte';
	export let data: PageData;

	const { events = [] } = data;
</script>

{#each events as event}
  <Event data={event} />
{/each}

{#if events.length === 0}
  <p>Ingen kommende arrangementer planlagt. </p>
{/if}