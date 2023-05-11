import { iterate, turtle } from './L-System'

export const AXIOM = 'F'

export const rules = {
  F: 'FF+[+F-F-F]-[-F+F+F]'.split(''),
}

export function render(
  ctx: CanvasRenderingContext2D,
  rootX: number,
  rootY: number,
  { r, g, b }: { r: number; g: number; b: number },
  numIterations: number = 5,
) {
  let sentence: string[] = [AXIOM]
  const baseStep = ctx.canvas.height / 8
  const renderInner = (iterations: number, i: number = 0) => {
    sentence = iterate(sentence, rules)
    const modifier = Math.pow(2, i)
    const scale = (from: number, to: number) => from + (to - from) / iterations / modifier

    if (i < iterations) {
      turtle(ctx, sentence, {
        startX: rootX,
        startY: rootY,
        step: baseStep / modifier,
        lineWidth: iterations / modifier,
        strokeStyle: `rgba(${r ?? 10}, ${g ?? 17}, ${b ?? 23}, ${scale(0.33, 1.0)})`,
      })

      renderInner(iterations, i + 1)
    }
  }
  renderInner(numIterations)
}
