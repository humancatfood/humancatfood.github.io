<script>
  export let meta = {};

  $: href = `#${meta.slug}`;
</script>


<style>
  section {
    position: relative;
  }
</style>


<section>
  {#if meta.slug}
    <a {href}>
      <h3 id={meta.slug}>{meta.title}</h3>
    </a>
  {/if}
  <slot />
</section>