<script lang="ts">
  import { onMount } from 'svelte'
  // import rough from 'roughjs/bundled/rough.esm';

  import { renderTree, renderFern, renderFernRight } from '../L-Systems'

  let canvasEl: HTMLCanvasElement

  function render() {
    const width = (canvasEl.width = window.innerWidth)
    const height = (canvasEl.height = window.innerHeight)
    const ctx = canvasEl.getContext('2d')

    if (!ctx) throw new Error('No canvas context')

    requestAnimationFrame(() => {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--contrast')
      // renderFern(ctx, width / 1.618, height, 6, color, height * 0.75)
      // renderFernRight(ctx, width / 1.618, height, 6, color, height * 0.75)
      renderTree(ctx, width / 1.618, height, 7, color, height * 0.75)
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
