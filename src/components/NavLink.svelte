<script>
  import {afterUpdate, onMount} from 'svelte';
  import rough from 'roughjs/bundled/rough.esm';

  export let isActive;
  export let href;

  /** @type {SVGElement} */
  let svg;

  function group (name) {
    const rc = rough.svg(svg);
    const g = svg.querySelector(`[name="${name}"]`);
    g.innerHTML = '';
    return [rc, g, svg.clientWidth, svg.clientHeight];
  }

  afterUpdate(() => {
    const [rc, g, w, h] = group('lines');
    const lines = isActive ? [h - 9, h - 6, h - 3] : [h - 8];
    for (const y of lines) {
      g.appendChild(rc.line(0, y, w, y, {
        roughness: 0.7,
        stroke: 'rebeccapurple',
      }));
    }
  });
  onMount(() => {
    const [rc, g, w, h] = group('outline');
    g.appendChild(rc.rectangle(1, 1, w-2, h-2, {
      roughness: 2,
      stroke: 'rgba(0, 0, 255, 0.5)',
      strokeWidth: 2,
      fill: null,
    }));
  });

</script>

<style>
  a {
    display: block;
    position: relative;
    padding: 5px 10px 10px 10px;
    font-family: Blokletters-Balpen;
    text-decoration: none;
  }

  a:focus {
    outline: none;
  }

  svg {
    position: absolute;
    left: -1px;
    top: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }

  [name="outline"] {
    display: none;
  }

  a:focus g[name="outline"] {
    display: block;
  }

</style>

<a
  rel="prefetch"
  aria-current={isActive ? 'page' : undefined}
  {href}
>
  <slot></slot>
  <svg
    aria-hidden={true}
    bind:this={svg}
  >
    <g name="outline" />
    <g name="lines" />
  </svg>
</a>
