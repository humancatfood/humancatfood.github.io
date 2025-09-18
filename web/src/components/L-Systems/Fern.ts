import { turtle, iterate, type TurtleOptions, type Sentence, type RuleSet } from './L-System'

export const AXIOM: Sentence = ['X']

export const rules: RuleSet = {
  F: 'FX[FX[+XF]]'.split(''),
  X: 'FF[+XZ++X-F[+ZX]][-X++F-X]'.split(''),
  Z: '[+F-X-F][++ZX]'.split(''),
}

export function render(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  numIterations: number = 4,
  color: TurtleOptions['strokeStyle'],
  height?: number,
) {
  let sentence = AXIOM

  const baseStep = (height ?? ctx.canvas.height) / 15
  const renderInner = (iterations: number, i = 0) => {
    if (i < iterations) {
      sentence = iterate(sentence, rules)

      turtle(ctx, sentence, {
        startX,
        startY,
        step: baseStep / Math.pow(1.61, i),
        lineWidth: 2 / Math.pow(1.61, i),
        strokeStyle: color,
        opacity: 0.5 + 0.5 / iterations / Math.pow(1.61, i),
        rotation: (-(Math.PI * 2) / 360) * 15,
      })
      renderInner(iterations, i + 1)
    }
  }
  renderInner(numIterations)
}
