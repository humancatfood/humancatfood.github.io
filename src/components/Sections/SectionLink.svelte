<script>
  import {onMount} from 'svelte';
  import rough from 'roughjs/bundled/rough.esm';

  export let down;
  export let up;
  export let meta;

  /** @type {SVGElement} */
  let svg;

  $: href = `#${meta.slug}`;

  onMount(() => {
    const rc = rough.svg(svg);
    const {clientWidth, clientHeight} = svg;
    svg.appendChild(rc.rectangle(1, 1, clientWidth-2, clientHeight-2, {
      roughness: 2,
      stroke: 'rgba(0, 0, 255, 0.5)',
      strokeWidth: 2,
      fill: null,
    }));
  });

  globalThis.console.log('up:', up);
  globalThis.console.log('down:', down);

</script>

<style>
  a {
    display: inline;
    position: sticky;
    top: 100%;
    transform: translateY(-100%);
    padding: 5px 10px 10px 10px;
    font-family: Blokletters-Balpen;
    text-decoration: none;
  }

  svg {
    position: absolute;
    left: -1px;
    top: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }
</style>

<a
  {href}
>
  {meta.title} ->
  <svg
    aria-hidden={true}
    bind:this={svg}
  />
</a>
