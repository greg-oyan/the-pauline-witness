import type { AuthenticityMarker } from '../data/types'
import { romanize, weightLabel, weightLevel } from '../lib/confidence'
import Dial from './Dial'

interface Props {
  marker: AuthenticityMarker
  idx: number
  comparisonLabel: string
}

export default function AxisPanel({ marker, idx, comparisonLabel }: Props) {
  const w = weightLevel[marker.weight]
  return (
    <article className="bg-vellum border border-rule p-6 sm:p-7 flex flex-col gap-5">
      <header className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <div className="font-display italic text-ink-3 text-lg leading-none">
            {romanize(idx + 1)}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-ink leading-tight mt-2">
            {marker.label}
          </h3>
          <div className="tag mt-2 text-ink-3">{marker.category.replace('-', ' ')}</div>
        </div>
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
          <Dial level={w} max={3} size={72} label={`${weightLabel[marker.weight]} marker`} />
          <span className="tag text-ink-3">{weightLabel[marker.weight]}</span>
        </div>
      </header>

      <hr className="hr-hair" />

      <div className="space-y-4">
        <div>
          <div className="tag mb-2 text-ink-3">Undisputed pattern</div>
          <p className="font-text text-[14.5px] leading-relaxed text-ink-2">
            {marker.undisputedPattern}
          </p>
        </div>
        <div>
          <div className="tag mb-2 tag-accent">{comparisonLabel} pattern</div>
          <p className="font-text text-[14.5px] leading-relaxed text-ink-2">
            {marker.comparisonPattern}
          </p>
        </div>
      </div>
    </article>
  )
}
