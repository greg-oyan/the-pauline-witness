import type { Confidence } from '../data/types'
import { confidenceLevel, confidenceLabel } from '../lib/confidence'
import Pips from './Pips'

interface Props {
  level: Confidence
  size?: 'sm' | 'md' | 'lg'
  withLabel?: boolean
}

const labelSize = {
  sm: 'text-[10.5px]',
  md: 'text-[10.5px]',
  lg: 'text-xs',
}

export default function ConfidenceBadge({ level, size = 'sm', withLabel = true }: Props) {
  const n = confidenceLevel[level]
  return (
    <span
      className="inline-flex items-center gap-2.5"
      title={confidenceLabel[level]}
      aria-label={`Confidence: ${confidenceLabel[level]}`}
    >
      <Pips n={n} total={4} size={size} />
      {withLabel && (
        <span
          className={`${labelSize[size]} uppercase tracking-[0.12em] font-medium font-mono text-ink-3`}
        >
          {confidenceLabel[level]}
        </span>
      )}
    </span>
  )
}
