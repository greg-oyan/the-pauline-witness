import type { PassageRef } from '../data/types'
import CiteChip from './CiteChip'

interface Props {
  passages: PassageRef[]
  variant?: 'chips' | 'block'
}

export default function PassageList({ passages, variant = 'block' }: Props) {
  if (passages.length === 0) {
    return <p className="text-sm text-ink-3 italic">None listed.</p>
  }

  if (variant === 'chips') {
    return (
      <div className="flex flex-wrap gap-1.5">
        {passages.map((p, i) => (
          <CiteChip key={i} title={p.note}>
            {p.ref}
          </CiteChip>
        ))}
      </div>
    )
  }

  return (
    <ul className="space-y-2.5">
      {passages.map((p, i) => (
        <li key={i} className="flex flex-col gap-1">
          <CiteChip>{p.ref}</CiteChip>
          {p.note && (
            <span className="text-ink-3 text-[13px] italic font-text leading-snug pl-1">
              {p.note}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
