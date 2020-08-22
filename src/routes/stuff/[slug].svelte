<script context="module">

  export function preload({ params, query }) {
    globalThis.console.log('preload:', params, query);
    return params;
  }

</script>

<script>
  export let slug;
</script>

<svelte:head>
  <title>{slug}</title>
</svelte:head>

<h1>{slug}</h1>
