<script context="module">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import spinner from 'svelte-awesome/icons/spinner';
</script>

<script>
  import {onMount} from 'svelte';
  import NavLinks from './_navLinks.svelte';
  export let segment;

  onMount(() => {
    document.getElementById('page').style.opacity = 1;
    document.getElementById('loader').remove();
  });
</script>

<style>

  :global(body) {
    color: #0A1117;
    background-color: #f5f5f5;
  }

  div#page {
    height: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;

    opacity: 0;
    transition: opacity 250ms ease-in;
  }

  @media (min-width: 768px) {
    div#page {
      padding: 0 2rem;
    }
  }

  @media (min-width: 1024px) {
    div#page {
      padding: 0 4rem;
    }
  }

  header {
    margin: 2rem 0;
    position: absolute;
    z-index: 1;
  }

  footer {
    margin: 1rem 0;
  }

  #loader {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }
</style>

<div id="page">

  <header>
    <NavLinks {segment}/>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer>
  </footer>

</div>

<div id="loader">
  <Icon
    data={spinner}
    pulse
    label="loading.."
    scale=2
  />
</div>
