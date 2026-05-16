import { Link } from 'react-router-dom'
import { themes } from '../data/themes'
import { corpusById } from '../data/corpus'
import { evidence } from '../data/evidence'
import Tag from '../components/Tag'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, nextOf, prevOf } from '../readingPath'
import { romanize } from '../lib/confidence'

export default function Teaching() {
  const node = pathByNum[3]

  return (
    <article>
      <section className="border-b border-ink">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-12">
          <Tag accent>Part 03 — What Paul taught</Tag>
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-7 display-claim text-5xl sm:text-6xl lg:text-display-l text-ink">
              <span className="block">Three arguments</span>
              <span className="block font-display italic text-oxblood mt-1">
                do the load-bearing.
              </span>
            </h1>
            <p className="lg:col-span-5 font-text text-[17px] text-ink-2 leading-relaxed lg:pl-7 lg:border-l lg:border-rule">
              Justification, the law, and resurrection. Each is built from the undisputed
              letters, each holds an honest tension, and each is widely flattened in popular
              reading. Begin with the one that bears the most weight across the corpus.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-cover mx-auto px-5 sm:px-10 py-14">
        <ol className="divide-y divide-rule border-y border-rule">
          {themes.map((t, i) => {
            const claimCount = evidence.filter((e) => e.themeIds.includes(t.id)).length
            return (
              <li key={t.id} className="py-10">
                <Link to={`/teaching/${t.id}`} className="block group">
                  <div className="grid grid-cols-12 gap-5 sm:gap-10 items-baseline">
                    <div className="col-span-12 sm:col-span-1 font-display italic text-ink-4 text-3xl group-hover:text-oxblood transition duration-150">
                      {romanize(i + 1)}
                    </div>
                    <div className="col-span-12 sm:col-span-7">
                      <h2 className="font-display text-display-s sm:text-[44px] text-ink group-hover:text-oxblood transition duration-150 leading-[1.04]">
                        {t.title}
                      </h2>
                      <p className="tag mt-2 text-ink-3">{t.subtitle}</p>
                      <p className="mt-5 font-text text-[16.5px] text-ink-2 leading-relaxed max-w-measure">
                        {firstSentence(t.paulInBrief)}
                      </p>
                    </div>
                    <div className="col-span-12 sm:col-span-4 space-y-3">
                      <div>
                        <Tag>Read in</Tag>
                        <p className="mt-2 font-display italic text-base text-ink-2 leading-snug">
                          {t.letterIds
                            .map((lid) => corpusById[lid]?.shortTitle)
                            .filter(Boolean)
                            .join(' · ')}
                        </p>
                      </div>
                      <div>
                        <Tag>Evidence cards</Tag>
                        <p className="mt-2 font-display italic text-base text-ink-2">
                          {claimCount} claim{claimCount === 1 ? '' : 's'} on file
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </section>

      <ReadingPathFooter
        stepNum={node.num}
        totalSteps={5}
        prev={
          prevOf(node.num) && {
            to: prevOf(node.num)!.to,
            label: prevOf(node.num)!.label,
            eyebrow: '← Part 02',
          }
        }
        next={
          nextOf(node.num) && {
            to: nextOf(node.num)!.to,
            label: nextOf(node.num)!.label,
            eyebrow: 'Part 04 →',
          }
        }
        closing="The arguments above are built from the undisputed letters. The next part shows how scholars decide what counts as Paul’s own — and what does not."
      />
    </article>
  )
}

function firstSentence(s: string): string {
  const m = s.match(/^.*?\.(?:\s|$)/)
  return m ? m[0].trim() : s
}

