import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { lettersById } from '../data/letters'
import { corpusById } from '../data/corpus'
import { themes, themesById } from '../data/themes'
import { evidence } from '../data/evidence'
import EvidenceCard from '../components/EvidenceCard'
import SourceDrawer from '../components/SourceDrawer'
import ConfidenceBadge from '../components/ConfidenceBadge'

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
    return <Navigate to="/corpus" replace />
  }

  const themesForLetter = themes.filter((t) => letter.themeIds.includes(t.id))

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-xs text-ink-500 mb-6">
        <Link to="/corpus" className="hover:text-ink-800 transition">
          Corpus
        </Link>{' '}
        / <span className="text-ink-700">{letter.title}</span>
      </nav>

      <header className="border-b border-ink-200 pb-6 mb-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <h1 className="font-serif text-4xl sm:text-5xl text-ink-900">{letter.title}</h1>
          <ConfidenceBadge level={corpusEntry.confidence} />
        </div>
        <p className="mt-2 text-sm text-ink-500">
          {corpusEntry.approxDate} · {corpusEntry.audience}
        </p>
        <p className="mt-4 max-w-3xl text-ink-700 italic">{corpusEntry.authenticityNote}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xs uppercase tracking-wider text-ink-500 font-semibold">Occasion</h2>
            <p className="mt-2 prose-pauline text-ink-700">{letter.occasion}</p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
              Central question
            </h2>
            <p className="mt-2 font-serif text-xl text-ink-800 italic leading-snug max-w-2xl">
              {letter.centralQuestion}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
              Literary shape
            </h2>
            <p className="mt-2 prose-pauline text-ink-700">{letter.literaryShape}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink-800 mb-4">Movement of the letter</h2>
            <ol className="space-y-5">
              {letter.sections.map((s, i) => (
                <li key={i} className="border-l-2 border-ink-200 pl-5">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-mono text-xs text-ink-500">{s.passageRange}</span>
                    <h3 className="font-serif text-lg text-ink-800">{s.heading}</h3>
                  </div>
                  <p className="mt-1 text-ink-700 leading-relaxed">{s.summary}</p>
                </li>
              ))}
            </ol>
          </section>

          {relatedEvidence.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-ink-800 mb-4">Evidence cards from this letter</h2>
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
            <h3 className="font-serif text-lg text-ink-800">Key passages</h3>
            <ul className="mt-3 space-y-2">
              {letter.keyPassages.map((p, i) => (
                <li key={i} className="text-sm">
                  <div className="font-mono text-ink-800">{p.ref}</div>
                  {p.note && <div className="text-xs text-ink-500 mt-0.5">{p.note}</div>}
                </li>
              ))}
            </ul>
          </div>

          {themesForLetter.length > 0 && (
            <div className="bg-white border border-ink-200 rounded-lg p-5">
              <h3 className="font-serif text-lg text-ink-800">Connected themes</h3>
              <ul className="mt-3 space-y-2">
                {themesForLetter.map((t) => (
                  <li key={t.id}>
                    <Link
                      to={`/themes/${t.id}`}
                      className="text-sm text-accent hover:text-accent-dark font-medium"
                    >
                      {t.title}
                    </Link>
                    <p className="text-xs text-ink-500 mt-0.5">{themesById[t.id].subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

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
        sourceIds={letter.sourceIds}
        title={`${letter.title} — sources`}
      />
    </div>
  )
}
