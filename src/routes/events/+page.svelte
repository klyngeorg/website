<script lang="ts">
  import MetaTags from '$components/meta-tags.svelte';
  import type { PageData } from './$types';
  import Event from './event.svelte';
  export let data: PageData;

  const { events = [] } = data;
</script>

<div class="broadcast">
  Siste nytt: Nå setter vi gang med <a href="/events/networking-lunch">månedlige nettverkslunsjer</a
  > 🙌.
</div>

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

<style>
  .broadcast {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;
  }

  .broadcast a {
    color: var(--color-white);
    font-weight: bold;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    .broadcast {
      font-size: 1.4rem;
    }
  }
</style>
