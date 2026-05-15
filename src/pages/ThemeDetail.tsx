import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { themesById } from '../data/themes'
import { evidence } from '../data/evidence'
import { corpusById } from '../data/corpus'
import { lettersById } from '../data/letters'
import EvidenceCard from '../components/EvidenceCard'
import SourceDrawer from '../components/SourceDrawer'

export default function ThemeDetail() {
  const { id } = useParams<{ id: string }>()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = id ? themesById[id] : undefined

  const relatedEvidence = useMemo(
    () => (theme ? evidence.filter((e) => e.themeIds.includes(theme.id)) : []),
    [theme],
  )

  if (!theme) return <Navigate to="/themes" replace />

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-xs text-ink-500 mb-6">
        <Link to="/themes" className="hover:text-ink-800 transition">
          Theology Atlas
        </Link>{' '}
        / <span className="text-ink-700">{theme.title}</span>
      </nav>

      <header className="border-b border-ink-200 pb-6 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
          {theme.subtitle}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink-900">{theme.title}</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
              Paul in brief
            </h2>
            <p className="mt-2 prose-pauline text-ink-700">{theme.paulInBrief}</p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
              Key claims
            </h2>
            <ul className="mt-3 space-y-2 list-disc list-outside ml-5">
              {theme.keyClaims.map((c, i) => (
                <li key={i} className="text-ink-700 leading-relaxed">
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
              Contested territory
            </h2>
            <p className="mt-2 prose-pauline text-ink-700">{theme.contestedTerritory}</p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
              Common distortion
            </h2>
            <p className="mt-2 prose-pauline text-ink-700">{theme.commonDistortion}</p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
              Responsible frame
            </h2>
            <p className="mt-2 prose-pauline text-ink-700">{theme.responsibleFrame}</p>
          </section>

          {relatedEvidence.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-ink-800 mb-4">Evidence cards</h2>
              <div className="grid grid-cols-1 gap-4">
                {relatedEvidence.map((card) => (
                  <EvidenceCard key={card.id} card={card} />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-8">
          <div className="bg-white border border-ink-200 rounded-lg p-5">
            <h3 className="font-serif text-lg text-ink-800">Primary passages</h3>
            <ul className="mt-3 space-y-2">
              {theme.primaryPassages.map((p, i) => (
                <li key={i} className="text-sm">
                  <div className="font-mono text-ink-800">{p.ref}</div>
                  {p.note && <div className="text-xs text-ink-500 mt-0.5">{p.note}</div>}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-ink-200 rounded-lg p-5">
            <h3 className="font-serif text-lg text-ink-800">Where to read it</h3>
            <ul className="mt-3 space-y-2">
              {theme.letterIds.map((lid) => {
                const c = corpusById[lid]
                const hasPage = !!lettersById[lid]
                if (!c) return null
                return (
                  <li key={lid} className="text-sm">
                    {hasPage ? (
                      <Link
                        to={`/letters/${lid}`}
                        className="text-accent hover:text-accent-dark font-medium"
                      >
                        {c.shortTitle}
                      </Link>
                    ) : (
                      <span className="text-ink-700">{c.shortTitle}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className="w-full px-4 py-3 bg-ink-800 text-ink-50 rounded font-medium hover:bg-ink-900 transition"
          >
            Open source drawer
          </button>
        </aside>
      </div>

      <SourceDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sourceIds={theme.sourceIds}
        title={`${theme.title} — sources`}
      />
    </div>
  )
}
