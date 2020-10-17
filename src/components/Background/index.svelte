<script>
  import {onMount} from 'svelte';
  import rough from 'roughjs/bundled/rough.esm';

  import {render as renderTree} from './Tree.js';
  // import {render as renderFern} from './Fern.js';

  /** @type {HTMLCanvasElement} */
  let canvasEl;

  function render () {

    const w = canvasEl.width = window.innerWidth;
    const h = canvasEl.height = window.innerHeight;
    const ctx = canvasEl.getContext('2d');

    requestAnimationFrame(() => {
      // renderFern(ctx, w * 0.75, h, 5);
      renderTree(ctx, w / 1.618, h, 5);
    });

  }

  onMount(() => {
    window.addEventListener('resize', render);
    render();
    return () => window.removeEventListener('resize', render);
  });

</script>

<style>
  canvas {
    display: block;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.33;
  }
</style>


<canvas
  bind:this={canvasEl}
  aria-hidden="true"
/>