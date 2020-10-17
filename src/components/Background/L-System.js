import memoize from 'lodash/memoize';

export const SAMPLE_AXIOM = 'F+F+F+F'.split('');

export const sample_rules = {
  F: 'F+F-F-FF+F+F-F'.split(''),
};

/**
 * turtle
 * @param {CanvasRenderingContext2D} ctx - canvas element
 * @param {string} sentence - num iterations
 * @param {object} options
 * @param {number} options.startX -
 * @param {number} options.startY -
 * @param {number} options.step -
 * @param {number} options.lineWidth -
 * @param {number} options.strokeStyle -
 */
export function turtle (ctx, sentence, {
  startX = 0,
  startY = 0,
  step = 100,
  rotation = (Math.PI * 2) / 360 * 25,
  lineWidth  =  1,
  strokeStyle = '#000',
}) {

  let x = startX;
  let y = startY;
  let angle = 0;
  const stack = [];

  const turn = delta => angle += delta;

  const forward = () => {
    x += Math.sin(angle) * step;
    y -= Math.cos(angle) * step;
  };

  ctx.beginPath();
  ctx.moveTo(x, y);

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;

  for (const word of sentence) {
    switch (word) {
      case 'F':
        forward();
        ctx.lineTo(x, y);
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
        ctx.moveTo(x, y);
        break;
      }

      default:
        break;
    }
  }

  ctx.closePath();
  ctx.stroke();

}


export const iterate = memoize((sentence, rules) => {
  return sentence.flatMap(word => rules[word] || word);
}, (sentence, rules) => JSON.stringify(sentence) + JSON.stringify(rules));



export function render (ctx, startX, startY, iterations=6) {

  let sentence = [SAMPLE_AXIOM];
  for (let i = 0; i < iterations; i += 1) {
    sentence = iterate(sentence, sample_rules);
  }

  turtle(ctx, sentence, {
    startX,
    startY,
    step: 50 / Math.pow(2, iterations),
    lineWidth: iterations / Math.pow(2, iterations),
    strokeStyle: `black`,
    rotation: (Math.PI * 2) / 360 * 90,
  });
}