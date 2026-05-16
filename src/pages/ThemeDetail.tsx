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
import Tag from '../components/Tag'
import { romanize } from '../lib/confidence'

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
      <section className="border-b border-ink">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 pb-14">
          <nav className="tag text-ink-4 mb-8">
            <Link to="/teaching" className="hover:text-ink transition duration-150">
              ← What Paul taught
            </Link>
            <span className="mx-2 text-ink-4">/</span>
            <span className="text-ink-3">{theme.title}</span>
          </nav>

          <Tag accent>{theme.subtitle}</Tag>
          <h1 className="mt-5 display-claim text-5xl sm:text-6xl lg:text-display-l text-ink">
            {theme.title}
          </h1>
          <p className="mt-8 font-display italic text-2xl sm:text-3xl text-ink-2 leading-snug max-w-measure">
            {firstSentence(theme.paulInBrief)}
          </p>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-5 sm:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
          <aside className="lg:col-span-4 lg:order-2">
            <div className="lg:sticky lg:top-28 space-y-9">
              <div>
                <Tag>Primary passages</Tag>
                <div className="mt-3">
                  <PassageList passages={theme.primaryPassages} />
                </div>
              </div>

              <div>
                <Tag>Read in</Tag>
                <ul className="mt-3 space-y-2">
                  {theme.letterIds.map((lid) => {
                    const c = corpusById[lid]
                    const hasPage = !!lettersById[lid]
                    if (!c) return null
                    return (
                      <li key={lid}>
                        {hasPage ? (
                          <Link
                            to={`/letters/${lid}`}
                            className="font-display text-lg text-ink hover:text-oxblood transition duration-150"
                          >
                            {c.shortTitle}
                          </Link>
                        ) : (
                          <span className="font-display text-lg text-ink-2">{c.shortTitle}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
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
              <p>{theme.paulInBrief}</p>
            </section>

            <section>
              <Tag className="mb-4 block">Key claims</Tag>
              <ul className="space-y-4 max-w-measure">
                {theme.keyClaims.map((c, i) => (
                  <li key={i} className="flex gap-5 items-baseline">
                    <span className="font-display italic text-ink-4 w-6 text-xl flex-shrink-0">
                      {romanize(i + 1)}
                    </span>
                    <span className="font-text text-[15.5px] text-ink-2 leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <Disclosure summary="Contested territory" hint="Where critical scholarship divides">
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
        sourceIds={theme.sourceIds}
        title={`${theme.title} — sources`}
      />
    </article>
  )
}

function firstSentence(s: string): string {
  const m = s.match(/^.*?\.(?:\s|$)/)
  return m ? m[0].trim() : s
}

