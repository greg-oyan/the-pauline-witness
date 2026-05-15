import type { EvidenceCard as EvidenceCardData } from '../data/types'
import ConfidenceBadge from './ConfidenceBadge'
import Disclosure from './Disclosure'
import PassageList from './PassageList'

interface Props {
  card: EvidenceCardData
}

export default function EvidenceCard({ card }: Props) {
  return (
    <article className="bg-vellum border border-rule p-7 sm:p-8">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-3">
          <div className="tag mb-3">Evidence card</div>
          <ConfidenceBadge level={card.confidence} size="md" />
        </div>
        <div className="md:col-span-9">
          <h3 className="font-display text-3xl sm:text-display-s text-ink leading-tight max-w-measure">
            {card.title}
          </h3>
          <p className="mt-4 font-text text-[15px] text-ink-2 leading-relaxed max-w-measure">
            {card.claim}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <div className="tag">Primary evidence</div>
        </div>
        <div className="md:col-span-9">
          <PassageList passages={card.primaryEvidence} variant="chips" />
        </div>
      </div>

      <div className="mt-8 md:ml-[25%] max-w-measure">
        {card.supportingEvidence.length > 0 && (
          <Disclosure summary="Supporting evidence">
            <PassageList passages={card.supportingEvidence} />
          </Disclosure>
        )}
        <Disclosure summary="Tension retained">
          <p className="font-text text-[15px] text-ink-2 leading-relaxed">{card.tension}</p>
        </Disclosure>
        <Disclosure summary="Common distortion">
          <p className="font-text text-[15px] text-ink-2 leading-relaxed">{card.commonDistortion}</p>
        </Disclosure>
        <Disclosure summary="Responsible frame">
          <p className="font-text text-[15px] text-ink-2 leading-relaxed">{card.responsibleFrame}</p>
        </Disclosure>
      </div>
    </article>
  )
}
