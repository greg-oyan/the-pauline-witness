import type { EvidenceCard as EvidenceCardData } from '../data/types'
import ConfidenceBadge from './ConfidenceBadge'
import Disclosure from './Disclosure'
import PassageList from './PassageList'

interface Props {
  card: EvidenceCardData
}

export default function EvidenceCard({ card }: Props) {
  return (
    <article className="border-y border-rule py-8 sm:py-10">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-3">
          <div className="eyebrow text-ink-400">Evidence card</div>
          <div className="mt-3">
            <ConfidenceBadge level={card.confidence} size="md" />
          </div>
        </div>
        <div className="md:col-span-9">
          <h3 className="font-display text-2xl sm:text-3xl text-ink-900 leading-snug max-w-measure">
            {card.title}
          </h3>
          <p className="mt-4 text-ink-700 leading-relaxed max-w-measure">{card.claim}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <div className="eyebrow">Primary evidence</div>
        </div>
        <div className="md:col-span-9">
          <PassageList passages={card.primaryEvidence} />
        </div>
      </div>

      <div className="mt-8 md:ml-[25%] max-w-measure">
        {card.supportingEvidence.length > 0 && (
          <Disclosure summary="Supporting evidence">
            <PassageList passages={card.supportingEvidence} />
          </Disclosure>
        )}
        <Disclosure summary="Tension retained">
          <p className="text-ink-700 leading-relaxed">{card.tension}</p>
        </Disclosure>
        <Disclosure summary="Common distortion">
          <p className="text-ink-700 leading-relaxed">{card.commonDistortion}</p>
        </Disclosure>
        <Disclosure summary="Responsible frame">
          <p className="text-ink-700 leading-relaxed">{card.responsibleFrame}</p>
        </Disclosure>
      </div>
    </article>
  )
}
