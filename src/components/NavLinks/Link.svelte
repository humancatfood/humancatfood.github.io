<script>
  import {afterUpdate} from 'svelte';
  import rough from 'roughjs/bundled/rough.esm';

  export let isActive;
  export let href;

  let svg;

  afterUpdate(() => {
    const rc = rough.svg(svg);
    const lines = isActive ? [1,3,5] : [3];
    svg.innerHTML = '';
    const width = svg.clientWidth;
    for (const y of lines) {
      svg.appendChild(rc.line(0, y, width, y, {
        roughness: 0.5,
      }));
    }
  });
</script>

<style>
  a {
    text-decoration: none;
    position: relative;
    padding-bottom: 10px;
  }
  svg {
    position: absolute;
    left: -1px;
    bottom: 0;
    width: calc(100% + 2px);
    height: 6px;
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
    />
  </a>
