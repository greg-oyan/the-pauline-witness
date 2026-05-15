import { Link } from 'react-router-dom'
import { themes } from '../data/themes'
import { corpusById } from '../data/corpus'
import { lettersById } from '../data/letters'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, nextOf, prevOf } from '../readingPath'

export default function Teaching() {
  const node = pathByNum[3]

  return (
    <article>
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14">
          <div className="eyebrow eyebrow-accent mb-5">Step 03 — What Paul taught</div>
          <h1 className="display-claim text-4xl sm:text-5xl lg:text-6xl text-ink-900 max-w-cover">
            Working from the strongest evidence first, three arguments do most of the load-bearing.
          </h1>
          <p className="mt-7 max-w-measure font-display text-lg text-ink-600 leading-relaxed">
            Justification, the law, and resurrection. Each is built from the undisputed letters,
            each holds an honest tension, and each is widely distorted in popular reading.
          </p>
        </div>
      </section>

      <section className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ol className="divide-y divide-rule border-y border-rule">
          {themes.map((t, i) => (
            <li key={t.id} className="py-8 sm:py-10">
              <Link to={`/teaching/${t.id}`} className="block group">
                <div className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline">
                  <div className="col-span-12 sm:col-span-1 font-mono text-xs text-ink-400 group-hover:text-accent transition">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="col-span-12 sm:col-span-11">
                    <h2 className="font-display text-3xl sm:text-4xl text-ink-900 group-hover:text-accent transition leading-tight">
                      {t.title}
                    </h2>
                    <p className="eyebrow mt-2 text-ink-400">{t.subtitle}</p>
                    <p className="mt-5 max-w-measure font-display text-lg text-ink-700 leading-snug">
                      {firstSentence(t.paulInBrief)}
                    </p>
                    <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-xs">
                      <span className="eyebrow text-ink-400">Read in</span>
                      {t.letterIds.map((lid, j) => {
                        const c = corpusById[lid]
                        const hasPage = !!lettersById[lid]
                        if (!c) return null
                        return (
                          <span
                            key={lid}
                            className="font-display text-sm text-ink-600 italic"
                          >
                            {c.shortTitle}
                            {hasPage && (
                              <span className="text-accent ml-0.5" aria-hidden="true">
                                ·
                              </span>
                            )}
                            {j < t.letterIds.length - 1 && (
                              <span className="text-ink-300 mx-2">/</span>
                            )}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <ReadingPathFooter
        stepNum={node.num}
        totalSteps={5}
        prev={prevOf(node.num) && { to: prevOf(node.num)!.to, label: prevOf(node.num)!.label, eyebrow: '← Step 2' }}
        next={nextOf(node.num) && { to: nextOf(node.num)!.to, label: nextOf(node.num)!.label, eyebrow: 'Step 4 →' }}
        closing="The arguments above are built from the undisputed letters. The next step shows how scholars decide what counts as Paul’s own — and what does not."
      />
    </article>
  )
}

function firstSentence(s: string): string {
  const m = s.match(/^.*?\.(?:\s|$)/)
  return m ? m[0].trim() : s
}
