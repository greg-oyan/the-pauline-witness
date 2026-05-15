import { useState } from 'react'
import { Link } from 'react-router-dom'
import { authenticityCases } from '../data/authenticity'
import { corpusById } from '../data/corpus'
import { lettersById } from '../data/letters'
import ConfidenceBadge from '../components/ConfidenceBadge'
import Disclosure from '../components/Disclosure'
import SourceDrawer from '../components/SourceDrawer'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, nextOf, prevOf } from '../readingPath'

const weightLabel: Record<string, { dots: number; label: string }> = {
  strong: { dots: 3, label: 'Strong' },
  moderate: { dots: 2, label: 'Moderate' },
  suggestive: { dots: 1, label: 'Suggestive' },
}

export default function HowWeKnow() {
  const node = pathByNum[4]
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null)
  const activeCase = activeCaseId ? authenticityCases.find((a) => a.id === activeCaseId) : null

  return (
    <article>
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14">
          <div className="eyebrow eyebrow-accent mb-5">Step 04 — How we know</div>
          <h1 className="display-claim text-4xl sm:text-5xl lg:text-6xl text-ink-900 max-w-cover">
            Authorship judgments are cumulative, not arbitrary — and not certain.
          </h1>
          <p className="mt-7 max-w-measure font-display text-lg text-ink-600 leading-relaxed">
            Vocabulary, sentence length, theology, assumed church structure, eschatological tense,
            historical setting, and literary dependence. No single marker decides; together they
            tilt the verdict. Ephesians is the case worth working through.
          </p>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {authenticityCases.map((c) => {
          const comp = corpusById[c.comparisonLetter]
          return (
            <section key={c.id}>
              <header className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline mb-8">
                <div className="md:col-span-3">
                  <div className="eyebrow text-ink-400">Case study</div>
                  <h2 className="font-display text-2xl sm:text-3xl text-ink-900 mt-2 leading-tight">
                    {comp.shortTitle}
                  </h2>
                  <div className="mt-3">
                    <ConfidenceBadge level={c.consensusConfidence} size="md" />
                  </div>
                </div>
                <div className="md:col-span-9">
                  <p className="font-display text-xl sm:text-2xl text-ink-900 leading-snug max-w-measure">
                    {c.consensus}
                  </p>
                  <p className="eyebrow mt-4 text-ink-400">
                    Compared against{' '}
                    {c.baseline.map((id) => corpusById[id].shortTitle).join(' · ')}
                  </p>
                </div>
              </header>

              <ul className="border-y border-rule divide-y divide-rule">
                {c.markers.map((m, i) => {
                  const w = weightLabel[m.weight]
                  return (
                    <li key={i} className="py-6 grid grid-cols-12 gap-4 sm:gap-8">
                      <div className="col-span-12 sm:col-span-3">
                        <div className="font-display text-lg text-ink-900 leading-snug">
                          {m.label}
                        </div>
                        <div className="eyebrow mt-1.5 text-ink-400">{m.category}</div>
                        <div className="mt-3 flex items-center gap-1.5" title={`Weight: ${w.label}`}>
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              className={`w-2 h-2 rounded-full border ${
                                d < w.dots
                                  ? 'bg-ink-800 border-ink-800'
                                  : 'bg-transparent border-ink-300'
                              }`}
                            />
                          ))}
                          <span className="eyebrow ml-1 text-ink-500">{w.label}</span>
                        </div>
                      </div>
                      <div className="col-span-12 sm:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <div className="eyebrow mb-1.5">Undisputed pattern</div>
                          <p className="text-sm text-ink-700 leading-relaxed">
                            {m.undisputedPattern}
                          </p>
                        </div>
                        <div className="sm:border-l sm:border-rule sm:pl-5">
                          <div className="eyebrow mb-1.5 eyebrow-accent">
                            {comp.shortTitle} pattern
                          </div>
                          <p className="text-sm text-ink-700 leading-relaxed">
                            {m.comparisonPattern}
                          </p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                <Block label="Counterpoint">{c.counterpoint}</Block>
                <Block label="Responsible frame">{c.responsibleFrame}</Block>
              </div>

              <div className="mt-10">
                <Disclosure summary="Sources and notes for this case" hint="Stylistic markers, ecclesial vocabulary">
                  <div className="space-y-2 text-sm text-ink-600">
                    <p className="leading-relaxed">
                      Open the source drawer for chapter-and-verse references and editor notes on
                      the markers above.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCaseId(c.id)
                        setDrawerOpen(true)
                      }}
                      className="eyebrow eyebrow-accent hover:text-ink-900 transition mt-2"
                    >
                      Open sources →
                    </button>
                  </div>
                </Disclosure>
                {lettersById[c.comparisonLetter] && (
                  <div className="border-t border-rule py-4">
                    <Link
                      to={`/letters/${c.comparisonLetter}`}
                      className="font-display text-lg text-ink-800 hover:text-accent transition"
                    >
                      Read the {comp.shortTitle} letter page →
                    </Link>
                  </div>
                )}
              </div>
            </section>
          )
        })}
      </div>

      <SourceDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sourceIds={activeCase ? activeCase.sourceIds : []}
        title="Authenticity sources"
      />

      <ReadingPathFooter
        stepNum={node.num}
        totalSteps={5}
        prev={prevOf(node.num) && { to: prevOf(node.num)!.to, label: prevOf(node.num)!.label, eyebrow: '← Step 3' }}
        next={nextOf(node.num) && { to: nextOf(node.num)!.to, label: nextOf(node.num)!.label, eyebrow: 'Step 5 →' }}
        closing="Once the strong evidence and the seam between Paul and his later interpreters are visible, two persistent caricatures fall away under their own weight."
      />
    </article>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-2">{label}</div>
      <p className="text-ink-700 leading-relaxed max-w-measure">{children}</p>
    </div>
  )
}
