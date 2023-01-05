<script>
	import Member from '../../../components/member.svelte';
</script>

<grid>
	<Member />
	<Member />
	<Member />
	<Member />
	<Member />
	<Member />
</grid>

<style>
	grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-gap: var(--space-xl);
		margin-top: var(--space-2xl);
	}
</style>
