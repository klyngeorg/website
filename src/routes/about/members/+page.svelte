<script lang="ts">
	import Member from './member.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { members } = data;
</script>

<grid>
	{#each members as member}
		<Member person={member} />
	{/each}
</grid>

<style>
	grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-gap: var(--space-xl);
		margin-top: var(--space-2xl);
	}
</style>
