import { Link } from 'react-router-dom'
import type { CorpusEntry } from '../data/types'
import { confidenceLevel, confidenceShort } from '../lib/confidence'
import { lettersById } from '../data/letters'
import Pips from './Pips'

interface Props {
  entry: CorpusEntry
  index: number
}

const tierLabel: Record<CorpusEntry['status'], string> = {
  undisputed: 'Undisputed',
  disputed: 'Disputed',
  'pseudonymous-majority': 'Pseudonymous (majority view)',
  adjacent: 'Adjacent',
}

export default function Folio({ entry, index }: Props) {
  const level = confidenceLevel[entry.confidence]
  const hasPage = !!lettersById[entry.id]
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <span className="tag tag-accent">No. {String(index + 1).padStart(2, '0')}</span>
        <span className="tag text-ink-3">{entry.approxDate.replace(/^c\.\s*/, '')}</span>
      </div>
      <h3 className="font-display text-2xl sm:text-3xl text-ink leading-[1.04]">
        {entry.shortTitle}
      </h3>
      <p className="mt-2 font-text text-[13.5px] leading-relaxed text-ink-3 line-clamp-2">
        {entry.audience}
      </p>
      <p className="mt-4 font-text text-[14.5px] leading-relaxed text-ink-2 line-clamp-4">
        {entry.oneLine}
      </p>

      <hr className="hr-hair my-5" />

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5" title={confidenceShort[entry.confidence]}>
          <Pips n={level} total={4} size="md" />
          <span className="tag text-ink-3">{confidenceShort[entry.confidence]}</span>
        </div>
        <span className="tag text-ink-4 text-right">{tierLabel[entry.status]}</span>
      </div>
    </>
  )

  if (hasPage) {
    return (
      <Link
        to={`/letters/${entry.id}`}
        className="group block bg-vellum border border-rule p-6 sm:p-7 transition duration-150 hover:border-ink hover:shadow-[0_2px_0_0_var(--ink)]"
      >
        {inner}
      </Link>
    )
  }
  return (
    <div className="bg-vellum border border-rule p-6 sm:p-7 opacity-95">{inner}</div>
  )
}
