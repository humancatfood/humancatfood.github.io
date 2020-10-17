import {iterate, turtle} from './L-System';


export const AXIOM = 'F';


export const rules = {
  F: 'FF+[+F-F-F]-[-F+F+F]'.split(''),
};


/**
 *
 * @param {CanvasRenderingContext2D} ctx - the render context
 * @param {number} startX - the tree's root's x-coordinate
 * @param {number} startY - the tree's root's y-coordinate
 */
export function render (ctx, startX, startY, numIterations=5) {

  let sentence = [AXIOM];

  const renderInner = (iterations, i=0) => {
    if (i < iterations) {
      sentence = iterate(sentence, rules);
      const modifier = Math.pow(2, i);
      const scale = (from, to) => from + ((to - from) / iterations) / modifier;
      turtle(ctx, sentence, {
        startX,
        startY,
        step: 40 / modifier,
        lineWidth: iterations / modifier,
        strokeStyle: `rgba(10, 17, 23, ${scale(0.33, 1.0)})`,
      });
      renderInner(iterations, i + 1);
    }
  };
  renderInner(numIterations);
}