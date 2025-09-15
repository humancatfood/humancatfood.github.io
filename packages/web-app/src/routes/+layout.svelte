<script lang="ts">
  import { githubAlt as githubIcon, linkedin as linkedinIcon } from 'svelte-awesome/icons'
  import IconLink from '../components/IconLink.svelte'
  import Background from '../components/Background'
</script>

<svelte:head>
  <title>HumanCatfood</title>
</svelte:head>

<Background />

<main class="container">
  <slot />
</main>

<style>
  :global(html, body) {
    height: 100%;
  }

  :global(#root) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  } */

  main {
    flex: 1;
    display: grid;
  }
</style>
