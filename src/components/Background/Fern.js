import {turtle, iterate} from './L-System';

export const AXIOM = 'X';


export const rules = {
  F: 'FX[FX[+XF]]'.split(''),
  X: 'FF[+XZ++X-F[+ZX]][-X++F-X]'.split(''),
  Z: '[+F-X-F][++ZX]'.split(''),
};


/**
 *
 * @param {CanvasRenderingContext2D} ctx - the render context
 * @param {number} startX - the tree's root's x-coordinate
 * @param {number} startY - the tree's root's y-coordinate
 */
export function render (ctx, startX, startY, numIterations=4) {

  let sentence = [AXIOM];

  const renderInner = (iterations, i=0) => {
    if (i < iterations) {
      sentence = iterate(sentence, rules);
      turtle(ctx, sentence, {
        startX,
        startY,
        step: 40 / Math.pow(1.61, i),
        lineWidth: 2 / Math.pow(1.61, i),
        strokeStyle: `rgba(10, 17, 23, ${0.5 + (0.5 / iterations) / Math.pow(1.61, i)})`,
        rotation: -(Math.PI * 2) / 360 * 15,
      });
      renderInner(iterations, i + 1);
    }
  };
  renderInner(numIterations);
}