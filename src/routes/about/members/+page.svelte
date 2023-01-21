<script lang="ts">
	import Member from '../../../components/member.svelte';
	import { members } from './members';
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
