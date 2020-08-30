export const AXIOM = 'F';


export const rules = {
  F: 'FF+[+F-F-F]-[-F+F+F]'.split(''),
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



export function iterate (sentence, _rules=rules) {
  return sentence.flatMap(word => _rules[word] || word);
}