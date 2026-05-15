import type { AuthenticityMarker, Confidence } from '../data/types'
import { confidenceShort, weightLabel, weightLevel } from '../lib/confidence'

interface Props {
  confidence: Confidence
  headline: string
  italicAccent: string
  summary: string
  markers: AuthenticityMarker[]
}

/**
 * Dark band closing the diagnostic. The Designer reference uses numeric
 * VerdictBars; we use the real marker weights from authenticity.ts —
 * each marker becomes one named bar with its actual weight as the fill.
 * No invented composites.
 */
export default function VerdictStrip({
  confidence,
  headline,
  italicAccent,
  summary,
  markers,
}: Props) {
  return (
    <aside className="bg-ink text-paper border border-ink rounded-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 p-8 sm:p-10">
        <div className="lg:col-span-7">
          <div className="tag text-coral mb-4">Verdict</div>
          <h3 className="font-display text-display-s sm:text-display-m leading-[1.05] text-paper">
            {headline}{' '}
            <em className="font-display italic" style={{ color: 'var(--coral)' }}>
              {italicAccent}
            </em>
          </h3>
          <p className="mt-6 font-text text-[15px] leading-relaxed text-paper-3 max-w-measure">
            {summary}
          </p>
          <div className="tag mt-8 text-paper-3">
            Composite — {confidenceShort[confidence]}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="tag text-paper-3 mb-4">Markers by weight</div>
          <ul className="space-y-3">
            {markers.map((m, i) => {
              const w = weightLevel[m.weight]
              return (
                <li key={i}>
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <span className="font-display text-[15px] leading-tight text-paper truncate">
                      {m.label}
                    </span>
                    <span className="tag text-paper-3 flex-shrink-0">
                      {weightLabel[m.weight]}
                    </span>
                  </div>
                  <div
                    className="h-[2px] w-full bg-ink-2"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full"
                      style={{
                        width: `${(w / 3) * 100}%`,
                        background: 'var(--coral)',
                      }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </aside>
  )
}
