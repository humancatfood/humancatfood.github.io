<script>
  import { onMount } from 'svelte';
  import rough from 'roughjs/bundled/rough.esm.js';

  export let style;

  let canvasEl;

  const AXIOM = 'F';

  const rules = {
    F: 'FF+[+F-F-F]-[-F+F+F]'.split(''),
  };

  let sentence = [AXIOM];

  const transform = word => rules[word] || word;

  const step = sentence => sentence.flatMap(word => transform(word));

  const turtle = (sentence, startX=0, startY=0, step=100, rotation=(Math.PI * 2) / 360 * 25) => {

    let x = startX;
    let y = startY;
    let angle = 0;
    const stack = [];

    const turn = delta => angle += delta;

    const forward = () => {
      x += Math.sin(angle) * step;
      y -= Math.cos(angle) * step;
    };

    const points = [`M${x},${y}`];

    for (const word of sentence) {
      switch (word) {
        case 'F':
          forward();
          points.push(`L${x},${y}`);
          break;

        case '+':
          turn(rotation);
          break;

        case '-':
          turn(-rotation);
          break;

        case '[':
          stack.push([x, y, angle]);
          break;

        case ']': {
          const state = stack.pop();
          x = state[0];
          y = state[1];
          angle = state[2];
          points.push(`M${x},${y}`);
          break;
        }

        default:
          break;
      }
    }

    const path = points.join(' ');

    return path;
  };

  const render = (iterations=5) => {

    const rc = rough.canvas(canvasEl);
    const renderInner = (i=0) => {
      // window.console.log('renderinner:', i);
      if (i < iterations) {
        requestAnimationFrame(() => {
          sentence = step(sentence);
          // const k = `sentence:, ${sentence.length}`;
          // console.time(k);
          const path = turtle(sentence, rc.canvas.width/2, rc.canvas.height, 50 / Math.pow(2, i));
          // console.timeEnd(k);
          requestAnimationFrame(() => {
          // console.time('render');
            rc.path(path, {
              roughness: iterations / Math.pow(2, i),
              strokeWidth: iterations / Math.pow(2, i),
              stroke: `rgba(0,0,0,${0.25 + (0.75 / iterations) / Math.pow(2, i)})`,
            });
            // console.timeEnd('render');
            renderInner(i + 1);
          });
        });
      }
    };
    renderInner();
  };

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
