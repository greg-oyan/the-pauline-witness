import type { Confidence } from '../data/types'

const config: Record<Confidence, { label: string; filled: number; gloss: string }> = {
  'broad-consensus': {
    label: 'Broad consensus',
    filled: 4,
    gloss: 'Virtually undisputed across critical scholarship.',
  },
  'majority-view': {
    label: 'Majority view',
    filled: 3,
    gloss: 'Held by most critical scholars; serious dissent exists.',
  },
  contested: {
    label: 'Contested',
    filled: 2,
    gloss: 'Genuinely divided; no settled critical answer.',
  },
  'minority-view': {
    label: 'Minority view',
    filled: 1,
    gloss: 'Held by a respected minority of scholars.',
  },
}

interface Props {
  level: Confidence
  size?: 'sm' | 'md' | 'lg'
  withLabel?: boolean
}

export default function ConfidenceBadge({ level, size = 'sm', withLabel = true }: Props) {
  const c = config[level]
  const dot = size === 'lg' ? 'w-2.5 h-2.5' : size === 'md' ? 'w-2 h-2' : 'w-1.5 h-1.5'
  const gap = size === 'lg' ? 'gap-1.5' : 'gap-1'
  const labelSize = size === 'lg' ? 'text-xs' : 'text-[10px]'

  return (
    <span
      className={`inline-flex items-center ${gap}`}
      title={c.gloss}
      aria-label={`Confidence: ${c.label}. ${c.gloss}`}
    >
      <span className={`inline-flex items-center ${gap}`} aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`${dot} rounded-full border ${
              i < c.filled
                ? 'bg-ink-800 border-ink-800'
                : 'bg-transparent border-ink-300'
            }`}
          />
        ))}
      </span>
      {withLabel && (
        <span
          className={`${labelSize} uppercase tracking-[0.18em] font-semibold text-ink-600`}
        >
          {c.label}
        </span>
      )}
    </span>
  )
}
