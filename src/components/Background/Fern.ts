import { turtle, iterate } from './L-System'

export const AXIOM = 'X'

export const rules = {
  F: 'FX[FX[+XF]]'.split(''),
  X: 'FF[+XZ++X-F[+ZX]][-X++F-X]'.split(''),
  Z: '[+F-X-F][++ZX]'.split(''),
}

export function render(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  { r, g, b }: { r: number; g: number; b: number },
  numIterations: number = 4,
) {
  let sentence = [AXIOM]
  let color: string
  const renderInner = (iterations: number, i = 0) => {
    if (i < iterations) {
      sentence = iterate(sentence, rules)
      color = `rgba(${r ?? 10}, ${g ?? 17}, ${b ?? 23}, ${
        0.5 + 0.5 / iterations / Math.pow(1.61, i)
      })`

      turtle(ctx, sentence, {
        startX,
        startY,
        step: 40 / Math.pow(1.61, i),
        lineWidth: 2 / Math.pow(1.61, i),
        strokeStyle: color,
        rotation: (-(Math.PI * 2) / 360) * 15,
      })
      renderInner(iterations, i + 1)
    }
  }
  renderInner(numIterations)
}
