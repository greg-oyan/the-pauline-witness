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
import Tag from '../components/Tag'
import CiteChip from '../components/CiteChip'

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
      <section className="border-b border-ink">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 pb-12">
          <nav className="tag text-ink-4 mb-8">
            <Link to="/letters" className="hover:text-ink transition duration-150">
              ← The letters
            </Link>
            <span className="mx-2 text-ink-4">/</span>
            <span className="text-ink-3">{letter.title}</span>
          </nav>

          <Tag accent>{corpusEntry.approxDate}</Tag>

          <h1 className="mt-5 display-claim text-5xl sm:text-6xl lg:text-display-l text-ink">
            {letter.title}
          </h1>
          <p className="mt-8 font-display italic text-2xl sm:text-3xl text-ink leading-snug max-w-measure">
            {letter.centralQuestion}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-3">
            <ConfidenceBadge level={corpusEntry.confidence} size="lg" />
            <span className="tag text-ink-3">{corpusEntry.audience}</span>
          </div>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-5 sm:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
          <aside className="lg:col-span-4 lg:order-2">
            <div className="lg:sticky lg:top-28 space-y-9">
              <div>
                <Tag>Key passages</Tag>
                <div className="mt-3">
                  <PassageList passages={letter.keyPassages} />
                </div>
              </div>

              {themesForLetter.length > 0 && (
                <div>
                  <Tag>Connected themes</Tag>
                  <ul className="mt-3 space-y-2">
                    {themesForLetter.map((t) => (
                      <li key={t.id}>
                        <Link
                          to={`/teaching/${t.id}`}
                          className="font-display text-lg text-ink hover:text-oxblood transition duration-150"
                        >
                          {t.title}
                        </Link>
                        <p className="font-text italic text-[12.5px] text-ink-3 leading-snug mt-0.5">
                          {themesById[t.id].subtitle}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <Tag>On authorship</Tag>
                <p className="mt-3 font-text italic text-[14px] text-ink-3 leading-relaxed">
                  {corpusEntry.authenticityNote}
                </p>
              </div>

              <button
                onClick={() => setDrawerOpen(true)}
                className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink hover:text-oxblood transition duration-150 border-b border-rule hover:border-oxblood pb-0.5"
              >
                Open source drawer ↗
              </button>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:order-1 space-y-12">
            <section className="prose-pauline dropcap">
              <p>{letter.occasion}</p>
            </section>

            <section>
              <Tag className="mb-4 block">Literary shape</Tag>
              <p className="font-text text-[16px] text-ink-2 leading-relaxed max-w-measure">
                {letter.literaryShape}
              </p>
            </section>

            <section>
              <Disclosure
                summary="Movement of the letter"
                hint="Section-by-section, in the letter’s own order"
              >
                <ol className="mt-3 space-y-6">
                  {letter.sections.map((s, i) => (
                    <li key={i} className="border-l border-rule pl-5">
                      <CiteChip>{s.passageRange}</CiteChip>
                      <h4 className="font-display text-xl text-ink leading-snug mt-2.5">
                        {s.heading}
                      </h4>
                      <p className="mt-2 font-text text-[15px] text-ink-2 leading-relaxed max-w-measure">
                        {s.summary}
                      </p>
                    </li>
                  ))}
                </ol>
              </Disclosure>
            </section>

            {relatedEvidence.length > 0 && (
              <section className="pt-4">
                <header className="mb-6">
                  <h2 className="font-display text-display-s text-ink leading-none">
                    Evidence cards
                  </h2>
                  <Tag className="mt-3 inline-block">Claim · evidence · tension · frame</Tag>
                </header>
                <div className="space-y-6">
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
