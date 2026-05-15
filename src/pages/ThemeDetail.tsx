import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { themesById } from '../data/themes'
import { evidence } from '../data/evidence'
import { corpusById } from '../data/corpus'
import { lettersById } from '../data/letters'
import EvidenceCard from '../components/EvidenceCard'
import SourceDrawer from '../components/SourceDrawer'
import Disclosure from '../components/Disclosure'
import PassageList from '../components/PassageList'

export default function ThemeDetail() {
  const { id } = useParams<{ id: string }>()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = id ? themesById[id] : undefined

  const relatedEvidence = useMemo(
    () => (theme ? evidence.filter((e) => e.themeIds.includes(theme.id)) : []),
    [theme],
  )

  if (!theme) return <Navigate to="/teaching" replace />

  return (
    <article>
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14">
          <nav className="eyebrow text-ink-400 mb-8">
            <Link to="/teaching" className="hover:text-ink-900 transition">
              ← What Paul taught
            </Link>
            <span className="mx-2 text-ink-300">/</span>
            <span>{theme.title}</span>
          </nav>

          <div className="eyebrow eyebrow-accent mb-4">{theme.subtitle}</div>
          <h1 className="display-claim text-4xl sm:text-5xl lg:text-6xl text-ink-900">
            {theme.title}
          </h1>
          <p className="mt-8 font-display text-xl sm:text-2xl text-ink-800 leading-snug max-w-measure">
            {theme.paulInBrief}
          </p>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10">
          <aside className="md:col-span-4 lg:col-span-3 md:order-2">
            <div className="md:sticky md:top-28 space-y-8">
              <div>
                <div className="eyebrow mb-3">Primary passages</div>
                <PassageList passages={theme.primaryPassages} />
              </div>

              <div>
                <div className="eyebrow mb-3">Read in</div>
                <ul className="space-y-2">
                  {theme.letterIds.map((lid) => {
                    const c = corpusById[lid]
                    const hasPage = !!lettersById[lid]
                    if (!c) return null
                    return (
                      <li key={lid} className="text-sm">
                        {hasPage ? (
                          <Link
                            to={`/letters/${lid}`}
                            className="font-display text-base text-ink-800 hover:text-accent transition"
                          >
                            {c.shortTitle}
                          </Link>
                        ) : (
                          <span className="font-display text-base text-ink-700">{c.shortTitle}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <button
                onClick={() => setDrawerOpen(true)}
                className="eyebrow eyebrow-accent hover:text-ink-900 transition"
              >
                Open source drawer →
              </button>
            </div>
          </aside>

          <div className="md:col-span-8 lg:col-span-9 md:order-1 space-y-10">
            <section>
              <div className="eyebrow mb-3">Key claims</div>
              <ul className="space-y-3 max-w-measure">
                {theme.keyClaims.map((c, i) => (
                  <li key={i} className="flex gap-4 items-baseline">
                    <span className="font-mono text-xs text-ink-400 flex-shrink-0 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink-700 leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <Disclosure
                summary="Contested territory"
                hint="Where critical scholarship is genuinely divided"
              >
                <p className="prose-pauline">{theme.contestedTerritory}</p>
              </Disclosure>
              <Disclosure
                summary="Common distortion"
                hint="What flattens this argument in popular reading"
              >
                <p className="prose-pauline">{theme.commonDistortion}</p>
              </Disclosure>
              <Disclosure
                summary="Responsible frame"
                hint="How to hold the argument honestly"
                defaultOpen
              >
                <p className="prose-pauline">{theme.responsibleFrame}</p>
              </Disclosure>
            </section>

            {relatedEvidence.length > 0 && (
              <section className="pt-4">
                <div className="eyebrow mb-3">Evidence cards</div>
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
        sourceIds={theme.sourceIds}
        title={`${theme.title} — sources`}
      />
    </article>
  )
}
