<script>
  import SectionLink from './SectionLink.svelte';

  export let meta = {};
  export let topMetas = [];
  export let bottomMetas = [];

  $: href = `#${meta.slug}`;

  globalThis.console.log('meta:', meta);
</script>


<style>
  section {
    position: relative;
    padding: 0 3rem;
  }

  @media (min-width: 768px) {
    section {
      padding: 0 6rem;
    }
  }

  /* @media (min-width: 1024px) {
    section {
      padding: 0 4rem;
    }
  } */
</style>


<section>
  {#each topMetas as topMeta}
    <SectionLink meta={topMeta} up />
  {/each}

  {#if meta.slug}
    <a {href}>
      <h3 id={meta.slug}>{meta.title}</h3>
    </a>
  {/if}

  <slot />

  {#each bottomMetas as bottomMeta}
    <SectionLink meta={bottomMeta} down />
  {/each}
</section>