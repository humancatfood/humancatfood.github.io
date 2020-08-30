<script>
  import { onMount } from 'svelte';

  import {turtle, iterate, AXIOM} from './Tree.js';

  export let style;

  /** @type {HTMLCanvasElement} */
  let canvasEl;

  let sentence = [AXIOM];

  function render (iterations=5) {

    const ctx = canvasEl.getContext('2d');

    const renderInner = (i=0) => {
      if (i < iterations) {
        requestAnimationFrame(() => {
          sentence = iterate(sentence);
          turtle(ctx, sentence, {
            startX: canvasEl.width/2,
            startY: canvasEl.height,
            step: 50 / Math.pow(2, i),
            lineWidth: iterations / Math.pow(2, i),
            strokeStyle: `rgba(0,0,0,${0.25 + (0.75 / iterations) / Math.pow(2, i)})`,
          });
          renderInner(i + 1);
        });
      }
    };
    renderInner();
  }


  onMount(render);


</script>

<style>
  canvas {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>

<div aria-hidden="true">
  <canvas
    bind:this={canvasEl}
    width="400"
    height="600"
    style={style}
  />
</div>
