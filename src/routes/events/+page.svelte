<script lang="ts">
  import MetaTags from '$components/meta-tags.svelte';
  import type { PageData } from './$types';
  import Event from './event.svelte';
  export let data: PageData;

  const { events = [] } = data;
</script>

<MetaTags
  path="/events"
  title="Arrangementer"
  description="Klynge arrangerer flere arrangementer i løpet av året. Her finner du en oversikt over kommende arrangementer."
/>

{#each events as event}
  <Event data={event} />
{/each}

{#if events.length === 0}
  <p>Ingen kommende arrangementer planlagt.</p>
{/if}
