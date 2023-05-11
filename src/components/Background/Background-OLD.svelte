<script>
  const shapes = [
    { cx: 500, cy: 100, r: 1000, fill: 'blue' },
    { cx: 450, cy: 450, r: 1000, fill: 'white' },
    { cx: 150, cy: 550, r: 1000, fill: 'blue' },
    { cx: 850, cy: 50, r: 1000, fill: 'white' },
    { cx: 950, cy: 250, r: 1000, fill: 'blue' },
    { cx: 350, cy: 1000, r: 1000, fill: 'white' },
    { cx: 950, cy: 550, r: 1000, fill: 'blue' },
  ]
</script>

<svg>
  {#each shapes as shape, index}
    <circle {...shape} style="--offset: {index}" />
  {/each}
</svg>

<style>
  svg {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  svg circle {
    opacity: 0.2;
    filter: blur(calc(75px + 15px * var(--offset)));
    animation: wander calc(25s + 1s * var(--offset)) infinite;
  }

  @keyframes wander {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(100%, calc(50% + 50% * var(--offset)));
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>
