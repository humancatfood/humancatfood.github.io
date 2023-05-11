<script lang="ts">
  import { onMount } from 'svelte'
  // import rough from 'roughjs/bundled/rough.esm';

  import { render as renderTree } from './tree'
  import { render as renderFern } from './Fern'
  import { render as renderFernRight } from './FernRight'

  let canvasEl: HTMLCanvasElement

  function render() {
    const w = (canvasEl.width = window.innerWidth)
    const h = (canvasEl.height = window.innerHeight)
    const ctx = canvasEl.getContext('2d')

    if (!ctx) throw new Error('No canvas context')

    requestAnimationFrame(() => {
      // renderFern(ctx, w * 0.25, h, { r: 255, g: 255, b: 255 }, 5)
      // renderTree(ctx, w / 1.618, h, { r: 255, g: 255, b: 255 }, 5)
      renderFernRight(ctx, w / 1.618, h, { r: 255, g: 255, b: 255 }, 5)
    })
  }

  onMount(() => {
    window.addEventListener('resize', render)
    render()
    return () => window.removeEventListener('resize', render)
  })
</script>

<canvas bind:this={canvasEl} aria-hidden="true" />

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
