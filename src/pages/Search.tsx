import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { corpus } from '../data/corpus'
import { themes } from '../data/themes'
import { evidence } from '../data/evidence'
import { lettersById } from '../data/letters'
import ConfidenceBadge from '../components/ConfidenceBadge'
import type { Confidence } from '../data/types'

type Kind = 'letter' | 'theme' | 'claim'

interface Hit {
  kind: Kind
  id: string
  title: string
  snippet: string
  confidence?: Confidence
  to: string
}

const kindLabels: Record<Kind, string> = {
  letter: 'Letter / Corpus entry',
  theme: 'Teaching theme',
  claim: 'Evidence card',
}

const confidenceLabels: Record<Confidence, string> = {
  'broad-consensus': 'Broad consensus',
  'majority-view': 'Majority view',
  contested: 'Contested',
  'minority-view': 'Minority view',
}

export default function Search() {
  const [q, setQ] = useState('')
  const [kinds, setKinds] = useState<Record<Kind, boolean>>({
    letter: true,
    theme: true,
    claim: true,
  })
  const [confidences, setConfidences] = useState<Record<Confidence, boolean>>({
    'broad-consensus': true,
    'majority-view': true,
    contested: true,
    'minority-view': true,
  })

  const allHits: Hit[] = useMemo(() => {
    const hits: Hit[] = []
    corpus.forEach((c) => {
      const hasPage = !!lettersById[c.id]
      hits.push({
        kind: 'letter',
        id: c.id,
        title: c.title,
        snippet: `${c.oneLine} — ${c.authenticityNote}`,
        confidence: c.confidence,
        to: hasPage ? `/letters/${c.id}` : '/letters',
      })
    })
    themes.forEach((t) => {
      hits.push({
        kind: 'theme',
        id: t.id,
        title: t.title,
        snippet: `${t.subtitle}. ${t.paulInBrief}`,
        to: `/teaching/${t.id}`,
      })
    })
    evidence.forEach((e) => {
      hits.push({
        kind: 'claim',
        id: e.id,
        title: e.title,
        snippet: `${e.claim} ${e.responsibleFrame}`,
        confidence: e.confidence,
        to: '/teaching',
      })
    })
    return hits
  }, [])

  const term = q.trim().toLowerCase()
  const filtered = allHits.filter((h) => {
    if (!kinds[h.kind]) return false
    if (h.confidence && !confidences[h.confidence]) return false
    if (!term) return true
    return h.title.toLowerCase().includes(term) || h.snippet.toLowerCase().includes(term)
  })

  return (
    <article>
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
          <div className="eyebrow eyebrow-accent mb-4">Depth on demand</div>
          <h1 className="display-claim text-3xl sm:text-4xl text-ink-900 max-w-cover">
            Search the letters, the teaching, and the evidence cards.
          </h1>
          <p className="mt-5 max-w-measure text-ink-600 leading-relaxed">
            This is the side door, not the main path. If you have not yet read the five steps in
            order, start with{' '}
            <Link to="/" className="text-accent hover:text-accent-dark transition">
              Why this
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <label className="eyebrow block mb-3">Search</label>
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="justification, resurrection…"
                className="w-full px-4 py-3 border border-rule rounded-sm bg-cream/40 text-ink-800 focus:outline-none focus:border-ink-700 transition font-serif"
                autoFocus
              />
            </div>

            <fieldset>
              <legend className="eyebrow mb-3">Kind</legend>
              <div className="space-y-2">
                {(Object.keys(kinds) as Kind[]).map((k) => (
                  <label key={k} className="flex items-center gap-3 text-sm text-ink-700">
                    <input
                      type="checkbox"
                      checked={kinds[k]}
                      onChange={(e) =>
                        setKinds((s) => ({ ...s, [k]: e.target.checked }))
                      }
                      className="rounded border-ink-300 text-accent focus:ring-accent"
                    />
                    {kindLabels[k]}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="eyebrow mb-3">Confidence</legend>
              <div className="space-y-2">
                {(Object.keys(confidences) as Confidence[]).map((c) => (
                  <label key={c} className="flex items-center gap-3 text-sm text-ink-700">
                    <input
                      type="checkbox"
                      checked={confidences[c]}
                      onChange={(e) =>
                        setConfidences((s) => ({ ...s, [c]: e.target.checked }))
                      }
                      className="rounded border-ink-300 text-accent focus:ring-accent"
                    />
                    {confidenceLabels[c]}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="eyebrow text-ink-400">
              {filtered.length} result{filtered.length === 1 ? '' : 's'}
            </div>
          </aside>

          <div className="lg:col-span-3">
            {filtered.length === 0 ? (
              <div className="border border-dashed border-rule rounded-sm p-10 text-center text-ink-500 italic">
                No results for those filters.
              </div>
            ) : (
              <ul className="divide-y divide-rule border-y border-rule">
                {filtered.map((h) => (
                  <li key={`${h.kind}-${h.id}`}>
                    <Link to={h.to} className="block py-5 group">
                      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1.5">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <span className="eyebrow text-ink-400">{kindLabels[h.kind]}</span>
                          <h3 className="font-display text-lg text-ink-900 group-hover:text-accent transition leading-snug">
                            {h.title}
                          </h3>
                        </div>
                        {h.confidence && <ConfidenceBadge level={h.confidence} />}
                      </div>
                      <p className="text-sm text-ink-600 leading-relaxed max-w-measure">
                        {h.snippet}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
