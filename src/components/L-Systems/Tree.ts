import { iterate, turtle, type Sentence, type TurtleOptions, type RuleSet } from './L-System'

export const AXIOM: Sentence = ['F']

export const rules: RuleSet = {
  F: 'FF+[+F-F-F]-[-F+F+F]'.split(''),
}

export function render(
  ctx: CanvasRenderingContext2D,
  rootX: number,
  rootY: number,
  numIterations: number = 5,
  color: TurtleOptions['strokeStyle'],
  height?: number,
) {
  let sentence = AXIOM
  const baseStep = (height ?? ctx.canvas.height) / 8
  const renderInner = (iterations: number, i: number = 0) => {
    if (i < iterations) {
      requestAnimationFrame(() => {
        sentence = iterate(sentence, rules)
        const modifier = Math.pow(2, i)
        const scale = (from: number, to: number) => from + (to - from) / iterations / modifier
        turtle(ctx, sentence, {
          startX: rootX,
          startY: rootY,
          step: baseStep / modifier,
          lineWidth: iterations / modifier,
          strokeStyle: color,
          opacity: scale(0.33, 1.0),
        })
        renderInner(iterations, i + 1)
      })
    }
  }

  renderInner(numIterations)
}
