import { Link } from 'react-router-dom'
import { corpus } from '../data/corpus'
import { lettersById } from '../data/letters'
import ConfidenceBadge from '../components/ConfidenceBadge'
import Disclosure from '../components/Disclosure'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, nextOf, prevOf } from '../readingPath'
import type { AuthenticityStatus } from '../data/types'

const groupOrder: { id: AuthenticityStatus; title: string; lede: string }[] = [
  {
    id: 'undisputed',
    title: 'Undisputed',
    lede: 'The seven letters whose Pauline authorship is virtually undisputed across critical scholarship. The bedrock of this project.',
  },
  {
    id: 'disputed',
    title: 'Disputed',
    lede: 'Letters whose authorship is genuinely contested. Ephesians, Colossians, and 2 Thessalonians sit here in differing degrees.',
  },
  {
    id: 'pseudonymous-majority',
    title: 'Pastoral Epistles',
    lede: '1 Timothy, 2 Timothy, and Titus. A strong majority of critical scholars judge these pseudonymous.',
  },
  {
    id: 'adjacent',
    title: 'Adjacent',
    lede: 'Hebrews (not Pauline) and Acts (secondary, Lukan narrative). Sometimes treated as Pauline; they are not on equal footing with the letters.',
  },
]

export default function Letters() {
  const node = pathByNum[2]
  return (
    <article>
      <Hero />
      <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {groupOrder.map((group) => {
          const items = corpus.filter((c) => c.status === group.id)
          return (
            <section key={group.id} className="mt-16 first:mt-12">
              <header className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 items-baseline">
                <h2 className="md:col-span-3 font-display text-2xl sm:text-3xl text-ink-900 leading-tight">
                  {group.title}
                </h2>
                <p className="md:col-span-9 text-ink-600 max-w-measure leading-relaxed">
                  {group.lede}
                </p>
              </header>
              <ul className="divide-y divide-rule border-y border-rule">
                {items.map((c) => {
                  const hasPage = !!lettersById[c.id]
                  return (
                    <li key={c.id} className="py-5">
                      {hasPage ? (
                        <Link
                          to={`/letters/${c.id}`}
                          className="grid grid-cols-12 gap-4 items-baseline group"
                        >
                          <LetterRow data={c} linked />
                        </Link>
                      ) : (
                        <div className="grid grid-cols-12 gap-4 items-baseline">
                          <LetterRow data={c} />
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}

        <div className="mt-14">
          <Disclosure
            summary="Why authorship matters at all"
            hint="On the difference between honesty and dismantling"
          >
            <div className="prose-pauline">
              <p>
                Saying that Ephesians or the Pastorals are most likely not by Paul’s own hand is
                not the same as saying they should be removed, ignored, or treated as fraud. They
                are early Christian texts that took shape in conversation with Paul’s legacy.
                Reading them as such — rather than as direct first-person Paul — lets the
                undisputed letters speak with the clarity they deserve, and lets the later texts
                speak as the developments they actually are.
              </p>
              <p>
                The path through this project starts with the strongest evidence and works
                outward. That is how an honest reading is built.
              </p>
            </div>
          </Disclosure>
        </div>
      </div>
      <ReadingPathFooter
        stepNum={node.num}
        totalSteps={5}
        prev={prevOf(node.num) && { to: prevOf(node.num)!.to, label: prevOf(node.num)!.label, eyebrow: '← Step 1' }}
        next={nextOf(node.num) && { to: nextOf(node.num)!.to, label: nextOf(node.num)!.label, eyebrow: 'Step 3 →' }}
        closing="With the corpus sorted by evidence, the next question is what Paul actually argues — read first from the letters that bear his name most securely."
      />
    </article>
  )
}

function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14">
        <div className="eyebrow eyebrow-accent mb-5">Step 02 — The letters</div>
        <h1 className="display-claim text-4xl sm:text-5xl lg:text-6xl text-ink-900 max-w-cover">
          Fourteen writings travel under Paul’s name. Their authority is uneven.
        </h1>
        <p className="mt-7 max-w-measure font-display text-lg text-ink-600 leading-relaxed">
          Seven are virtually undisputed. Three are genuinely contested. Three are judged
          pseudonymous by a strong majority. Two are not letters of Paul at all.
        </p>
      </div>
    </section>
  )
}

function LetterRow({
  data,
  linked = false,
}: {
  data: (typeof import('../data/corpus').corpus)[number]
  linked?: boolean
}) {
  return (
    <>
      <div className="col-span-12 sm:col-span-3">
        <div
          className={`font-display text-xl text-ink-900 leading-tight ${
            linked ? 'group-hover:text-accent transition' : ''
          }`}
        >
          {data.shortTitle}
        </div>
        <div className="eyebrow mt-2 text-ink-400">{data.approxDate}</div>
      </div>
      <div className="col-span-12 sm:col-span-7">
        <p className="text-ink-700 leading-relaxed">{data.oneLine}</p>
        <p className="text-ink-500 italic text-sm mt-1.5">{data.audience}</p>
      </div>
      <div className="col-span-12 sm:col-span-2 sm:text-right">
        <ConfidenceBadge level={data.confidence} withLabel={false} size="md" />
        {linked && (
          <div className="hidden sm:block eyebrow mt-2 text-ink-400 group-hover:text-accent transition">
            Read →
          </div>
        )}
      </div>
    </>
  )
}
