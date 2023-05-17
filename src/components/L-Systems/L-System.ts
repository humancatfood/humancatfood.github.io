import memoize from 'lodash/memoize'

export type Sentence = string[]

export type RuleSet = Record<string, Sentence>

export const SAMPLE_AXIOM: Sentence = 'F+F+F+F'.split('')

export const sample_rules: RuleSet = {
  F: 'F+F-F-FF+F+F-F'.split(''),
}

export type TurtleOptions = {
  startX?: number
  startY?: number
  step?: number
  lineWidth?: number
  strokeStyle?: CanvasRenderingContext2D['strokeStyle']
  rotation?: number
  opacity?: number
}

export function turtle(
  ctx: CanvasRenderingContext2D,
  sentence: string[],
  {
    startX = 0,
    startY = 0,
    step = 100,
    rotation = ((Math.PI * 2) / 360) * 25,
    lineWidth = 1,
    strokeStyle = 'rgb(10, 17, 23)',
    opacity = 1,
  }: TurtleOptions,
) {
  let x = startX
  let y = startY
  let angle = 0
  const stack: number[][] = []

  const turn = (delta: number) => (angle += delta)

  const forward = () => {
    x += Math.sin(angle) * step
    y -= Math.cos(angle) * step
  }

  ctx.beginPath()
  ctx.moveTo(x, y)

  ctx.lineWidth = lineWidth
  ctx.strokeStyle = strokeStyle
  ctx.globalAlpha = opacity

  for (const word of sentence) {
    switch (word) {
      case 'F':
        forward()
        ctx.lineTo(x, y)
        break

      case '+':
        turn(rotation)
        break

      case '-':
        turn(-rotation)
        break

      case '[':
        stack.push([x, y, angle])
        break

      case ']': {
        const state = stack.pop()
        if (!state) {
          throw new Error('unbalanced brackets')
        }
        x = state[0]
        y = state[1]
        angle = state[2]
        ctx.moveTo(x, y)
        break
      }

      default:
        break
    }
  }

  ctx.closePath()
  ctx.stroke()
}

export const iterate = memoize(
  (sentence: Sentence, rules: RuleSet) => sentence.flatMap((word) => rules[word] || word),
  (sentence: Sentence, rules: RuleSet) => JSON.stringify(sentence) + JSON.stringify(rules),
)

export function render(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  iterations: number = 6,
) {
  let sentence = SAMPLE_AXIOM
  for (let i = 0; i < iterations; i += 1) {
    sentence = iterate(sentence, sample_rules)
  }

  turtle(ctx, sentence, {
    startX,
    startY,
    step: 50 / Math.pow(2, iterations),
    lineWidth: iterations / Math.pow(2, iterations),
    strokeStyle: `black`,
    rotation: ((Math.PI * 2) / 360) * 90,
  })
}
