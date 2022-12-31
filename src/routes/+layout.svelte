<script>
  import "@fontsource/outfit";
  import "@fontsource/outfit/600.css";
</script>

<style>
  :global(body) {
    --primary-color: #344e4c;

    font-family: "Outfit", sans-serif;
    color: var(--primary-color);
    
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<main>
  <slot>
    <!-- +page.svelte is rendered here -->
  </slot>
</main>