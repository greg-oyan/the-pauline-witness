import { useState } from 'react'
import type { EvidenceCard as EvidenceCardData } from '../data/types'
import ConfidenceBadge from './ConfidenceBadge'

interface Props {
  card: EvidenceCardData
}

export default function EvidenceCard({ card }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="bg-white border border-ink-200 rounded-lg overflow-hidden">
      <header className="px-5 py-4 border-b border-ink-100 flex items-start gap-3 flex-wrap">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg text-ink-800 leading-tight">{card.title}</h3>
        </div>
        <ConfidenceBadge level={card.confidence} />
      </header>
      <div className="px-5 py-4 space-y-4">
        <Section label="Claim">
          <p className="text-ink-700">{card.claim}</p>
        </Section>
        <Section label="Primary evidence">
          <PassageList passages={card.primaryEvidence} />
        </Section>
        {expanded ? (
          <>
            <Section label="Supporting evidence">
              <PassageList passages={card.supportingEvidence} />
            </Section>
            <Section label="Tension retained">
              <p className="text-ink-700">{card.tension}</p>
            </Section>
            <Section label="Common distortion">
              <p className="text-ink-700">{card.commonDistortion}</p>
            </Section>
            <Section label="Responsible frame">
              <p className="text-ink-700">{card.responsibleFrame}</p>
            </Section>
          </>
        ) : (
          <p className="text-xs text-ink-500 italic">
            Tension, common distortion, and responsible frame are hidden — click expand.
          </p>
        )}
      </div>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full px-5 py-2 text-sm font-medium text-ink-700 bg-ink-50 hover:bg-ink-100 border-t border-ink-100 transition"
      >
        {expanded ? 'Collapse' : 'Expand full card'}
      </button>
    </article>
  )
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider font-semibold text-ink-500 mb-1">{label}</div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function PassageList({ passages }: { passages: { ref: string; note?: string }[] }) {
  if (passages.length === 0) {
    return <p className="text-ink-500 italic">None listed.</p>
  }
  return (
    <ul className="space-y-1">
      {passages.map((p, i) => (
        <li key={i} className="text-ink-700">
          <span className="font-mono text-ink-800">{p.ref}</span>
          {p.note && <span className="text-ink-500"> — {p.note}</span>}
        </li>
      ))}
    </ul>
  )
}
