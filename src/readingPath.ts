export interface PathNode {
  num: number
  to: string
  label: string
  shortLabel: string
  question: string
}

export const readingPath: PathNode[] = [
  {
    num: 1,
    to: '/',
    label: 'Why this',
    shortLabel: 'Why this',
    question: 'Why read Paul this way at all?',
  },
  {
    num: 2,
    to: '/letters',
    label: 'The letters',
    shortLabel: 'The letters',
    question: 'Which letters do we actually have?',
  },
  {
    num: 3,
    to: '/teaching',
    label: 'What Paul taught',
    shortLabel: 'What Paul taught',
    question: 'What does Paul actually argue?',
  },
  {
    num: 4,
    to: '/how-we-know',
    label: 'How we know',
    shortLabel: 'How we know',
    question: 'How do we tell authentic from disputed from later?',
  },
  {
    num: 5,
    to: '/distortions',
    label: 'What gets distorted',
    shortLabel: 'What gets distorted',
    question: 'What gets distorted in popular readings?',
  },
]

export const pathByNum = Object.fromEntries(readingPath.map((p) => [p.num, p])) as Record<
  number,
  PathNode
>

export function nextOf(num: number): PathNode | undefined {
  return pathByNum[num + 1]
}

export function prevOf(num: number): PathNode | undefined {
  return pathByNum[num - 1]
}
