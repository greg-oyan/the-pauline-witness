import type { AuthenticityMarker, Confidence } from '../data/types'
import { confidenceShort, weightLabel } from '../lib/confidence'

interface Props {
  confidence: Confidence
  headline: string
  italicAccent: string
  summary: string
  markers: AuthenticityMarker[]
}

/**
 * Dark band closing the diagnostic. Right column is a plain marker list
 * — label left, weight word right, hairline between rows. No bars,
 * no fabricated composites.
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
            Confidence — {confidenceShort[confidence]}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="tag text-paper-3 mb-4">Markers by weight</div>
          <ul className="border-t border-ink-3">
            {markers.map((m, i) => (
              <li
                key={i}
                className="flex items-baseline justify-between gap-5 py-3 border-b border-ink-3"
              >
                <span className="font-display text-[15.5px] leading-snug text-paper">
                  {m.label}
                </span>
                <span className="tag text-paper-3 flex-shrink-0">
                  {weightLabel[m.weight]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
