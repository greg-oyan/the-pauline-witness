import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { lettersById } from '../data/letters'
import { corpusById } from '../data/corpus'
import { themes, themesById } from '../data/themes'
import { evidence } from '../data/evidence'
import EvidenceCard from '../components/EvidenceCard'
import SourceDrawer from '../components/SourceDrawer'
import ConfidenceBadge from '../components/ConfidenceBadge'
import Disclosure from '../components/Disclosure'
import PassageList from '../components/PassageList'

export default function LetterPage() {
  const { id } = useParams<{ id: string }>()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const letter = id ? lettersById[id] : undefined
  const corpusEntry = id ? corpusById[id as keyof typeof corpusById] : undefined

  const relatedEvidence = useMemo(
    () => (letter ? evidence.filter((e) => letter.claimIds.includes(e.id)) : []),
    [letter],
  )

  if (!letter || !corpusEntry) {
    return <Navigate to="/letters" replace />
  }

  const themesForLetter = themes.filter((t) => letter.themeIds.includes(t.id))

  return (
    <article>
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14">
          <nav className="eyebrow text-ink-400 mb-8">
            <Link to="/letters" className="hover:text-ink-900 transition">
              ← The letters
            </Link>
            <span className="mx-2 text-ink-300">/</span>
            <span>{letter.title}</span>
          </nav>

          <div className="eyebrow eyebrow-accent mb-4">Letter · {corpusEntry.approxDate}</div>
          <h1 className="display-claim text-4xl sm:text-5xl lg:text-6xl text-ink-900">
            {letter.title}
          </h1>
          <p className="mt-8 font-display text-2xl sm:text-3xl text-ink-800 leading-snug max-w-measure italic">
            {letter.centralQuestion}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <ConfidenceBadge level={corpusEntry.confidence} size="lg" />
            <span className="eyebrow text-ink-400">{corpusEntry.audience}</span>
          </div>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10">
          <aside className="md:col-span-4 lg:col-span-3 md:order-2">
            <div className="md:sticky md:top-28 space-y-8">
              <div>
                <div className="eyebrow mb-3">Key passages</div>
                <PassageList passages={letter.keyPassages} />
              </div>

              {themesForLetter.length > 0 && (
                <div>
                  <div className="eyebrow mb-3">Connected themes</div>
                  <ul className="space-y-2">
                    {themesForLetter.map((t) => (
                      <li key={t.id}>
                        <Link
                          to={`/teaching/${t.id}`}
                          className="font-display text-base text-ink-800 hover:text-accent transition"
                        >
                          {t.title}
                        </Link>
                        <p className="text-xs text-ink-500 italic">{themesById[t.id].subtitle}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => setDrawerOpen(true)}
                className="eyebrow eyebrow-accent hover:text-ink-900 transition"
              >
                Open source drawer →
              </button>
            </div>
          </aside>

          <div className="md:col-span-8 lg:col-span-9 md:order-1 space-y-12">
            <section>
              <div className="eyebrow mb-3">Occasion</div>
              <p className="prose-pauline dropcap">{letter.occasion}</p>
            </section>

            <section>
              <div className="eyebrow mb-3">On authorship</div>
              <p className="text-ink-600 italic leading-relaxed max-w-measure">
                {corpusEntry.authenticityNote}
              </p>
            </section>

            <section>
              <div className="eyebrow mb-3">Literary shape</div>
              <p className="prose-pauline">{letter.literaryShape}</p>
            </section>

            <section>
              <Disclosure
                summary="Movement of the letter"
                hint="Section-by-section, in the letter’s own order"
              >
                <ol className="mt-2 space-y-6">
                  {letter.sections.map((s, i) => (
                    <li key={i} className="border-l-2 border-rule pl-5">
                      <div className="refnum mb-1">{s.passageRange}</div>
                      <h4 className="font-display text-lg text-ink-900 leading-snug">{s.heading}</h4>
                      <p className="mt-2 text-ink-700 leading-relaxed max-w-measure">{s.summary}</p>
                    </li>
                  ))}
                </ol>
              </Disclosure>
            </section>

            {relatedEvidence.length > 0 && (
              <section className="pt-4">
                <div className="eyebrow mb-3">Evidence cards from this letter</div>
                <p className="text-sm text-ink-500 italic mb-6 max-w-measure">
                  Each card holds four slots: claim, evidence, tension retained, responsible frame.
                </p>
                <div className="space-y-2">
                  {relatedEvidence.map((card) => (
                    <EvidenceCard key={card.id} card={card} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <SourceDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sourceIds={letter.sourceIds}
        title={`${letter.title} — sources`}
      />
    </article>
  )
}
