import { Link } from 'react-router-dom'
import { corpus } from '../data/corpus'
import ConfidenceBadge from '../components/ConfidenceBadge'
import { lettersById } from '../data/letters'
import type { AuthenticityStatus } from '../data/types'

const groupOrder: { id: AuthenticityStatus; title: string; subtitle: string }[] = [
  {
    id: 'undisputed',
    title: 'Undisputed letters',
    subtitle:
      'The seven letters whose Pauline authorship is virtually undisputed across critical scholarship. These form the evidentiary bedrock of this project.',
  },
  {
    id: 'disputed',
    title: 'Disputed / deutero-Pauline letters',
    subtitle:
      'Letters whose authorship is genuinely contested. Ephesians, Colossians, and 2 Thessalonians sit here in differing degrees.',
  },
  {
    id: 'pseudonymous-majority',
    title: 'Pastoral Epistles',
    subtitle:
      '1 Timothy, 2 Timothy, and Titus. A strong majority of critical scholars judge these pseudonymous, written in Paul’s name a generation or two after his death.',
  },
  {
    id: 'adjacent',
    title: 'Adjacent evidence',
    subtitle:
      'Hebrews (not Pauline) and Acts of the Apostles (secondary, Lukan narrative) are sometimes treated as Pauline sources. They are not on equal footing with the letters.',
  },
]

export default function Corpus() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="border-b border-ink-200 pb-6 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">Corpus Map</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-ink-900">
          Fourteen writings, four very different evidentiary tiers.
        </h1>
        <p className="mt-4 text-ink-700 max-w-3xl leading-relaxed">
          The "Pauline corpus" in the New Testament is not a single thing. It contains letters
          almost no one disputes, letters whose authorship is genuinely divided, letters a strong
          majority judges pseudonymous, and adjacent material that is not Pauline at all. Sorting
          them honestly is the first step in any responsible reading.
        </p>
      </header>

      <div className="space-y-12">
        {groupOrder.map((group) => {
          const items = corpus.filter((c) => c.status === group.id)
          return (
            <section key={group.id}>
              <header className="mb-4">
                <h2 className="font-serif text-2xl text-ink-800">{group.title}</h2>
                <p className="mt-2 text-sm text-ink-600 max-w-3xl leading-relaxed">
                  {group.subtitle}
                </p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((c) => {
                  const hasPage = !!lettersById[c.id]
                  const Wrapper: React.ElementType = hasPage ? Link : 'div'
                  const wrapperProps = hasPage ? { to: `/letters/${c.id}` } : {}
                  return (
                    <Wrapper
                      key={c.id}
                      {...wrapperProps}
                      className={`block bg-white border border-ink-200 rounded-lg p-5 ${
                        hasPage ? 'hover:border-ink-400 hover:shadow-sm transition' : 'opacity-90'
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-serif text-lg text-ink-800">{c.shortTitle}</h3>
                        <ConfidenceBadge level={c.confidence} />
                      </div>
                      <p className="text-xs text-ink-500 mt-1">{c.approxDate}</p>
                      <p className="text-sm text-ink-700 mt-3 leading-relaxed">{c.oneLine}</p>
                      <p className="text-xs text-ink-500 mt-3 italic">{c.audience}</p>
                      {hasPage && (
                        <p className="text-xs mt-3 text-accent font-medium">Read the letter page →</p>
                      )}
                    </Wrapper>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
