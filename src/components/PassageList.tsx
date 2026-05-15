import type { PassageRef } from '../data/types'

interface Props {
  passages: PassageRef[]
  variant?: 'inline' | 'block'
}

export default function PassageList({ passages, variant = 'block' }: Props) {
  if (passages.length === 0) {
    return <p className="text-sm text-ink-500 italic">None listed.</p>
  }
  if (variant === 'inline') {
    return (
      <p className="refnum text-ink-700">
        {passages.map((p, i) => (
          <span key={i}>
            {p.ref}
            {i < passages.length - 1 && <span className="text-ink-300 px-1.5">·</span>}
          </span>
        ))}
      </p>
    )
  }
  return (
    <ul className="space-y-1.5">
      {passages.map((p, i) => (
        <li key={i} className="leading-relaxed">
          <span className="refnum">{p.ref}</span>
          {p.note && (
            <span className="text-ink-500 text-sm font-serif italic"> — {p.note}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
