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
  theme: 'Theology theme',
  claim: 'Evidence card',
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
        to: hasPage ? `/letters/${c.id}` : '/corpus',
      })
    })
    themes.forEach((t) => {
      hits.push({
        kind: 'theme',
        id: t.id,
        title: t.title,
        snippet: `${t.subtitle}. ${t.paulInBrief}`,
        to: `/themes/${t.id}`,
      })
    })
    evidence.forEach((e) => {
      hits.push({
        kind: 'claim',
        id: e.id,
        title: e.title,
        snippet: `${e.claim} ${e.responsibleFrame}`,
        confidence: e.confidence,
        to: '/themes',
      })
    })
    return hits
  }, [])

  const term = q.trim().toLowerCase()
  const filtered = allHits.filter((h) => {
    if (!kinds[h.kind]) return false
    if (h.confidence && !confidences[h.confidence]) return false
    if (!term) return true
    return (
      h.title.toLowerCase().includes(term) || h.snippet.toLowerCase().includes(term)
    )
  })

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="border-b border-ink-200 pb-6 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
          Search & filter
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-ink-900">
          Search across letters, themes, and evidence cards.
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-ink-500 font-semibold mb-2">
              Search
            </label>
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="justification, resurrection, Romans…"
              className="w-full px-3 py-2 border border-ink-300 rounded bg-white text-ink-800 focus:outline-none focus:ring-2 focus:ring-accent/30"
              autoFocus
            />
          </div>

          <fieldset>
            <legend className="text-xs uppercase tracking-wider text-ink-500 font-semibold mb-2">
              Kind
            </legend>
            <div className="space-y-1.5">
              {(Object.keys(kinds) as Kind[]).map((k) => (
                <label key={k} className="flex items-center gap-2 text-sm text-ink-700">
                  <input
                    type="checkbox"
                    checked={kinds[k]}
                    onChange={(e) => setKinds((s) => ({ ...s, [k]: e.target.checked }))}
                    className="rounded border-ink-300 text-accent focus:ring-accent"
                  />
                  {kindLabels[k]}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xs uppercase tracking-wider text-ink-500 font-semibold mb-2">
              Confidence
            </legend>
            <div className="space-y-1.5">
              {(Object.keys(confidences) as Confidence[]).map((c) => (
                <label key={c} className="flex items-center gap-2 text-sm text-ink-700">
                  <input
                    type="checkbox"
                    checked={confidences[c]}
                    onChange={(e) =>
                      setConfidences((s) => ({ ...s, [c]: e.target.checked }))
                    }
                    className="rounded border-ink-300 text-accent focus:ring-accent"
                  />
                  {c === 'broad-consensus' && 'Broad consensus'}
                  {c === 'majority-view' && 'Majority view'}
                  {c === 'contested' && 'Contested'}
                  {c === 'minority-view' && 'Minority view'}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="text-xs text-ink-500">
            {filtered.length} result{filtered.length === 1 ? '' : 's'}
          </div>
        </aside>

        <div className="lg:col-span-3 space-y-3">
          {filtered.length === 0 ? (
            <div className="border border-dashed border-ink-200 rounded p-8 text-center text-ink-500">
              No results for those filters.
            </div>
          ) : (
            filtered.map((h) => (
              <Link
                key={`${h.kind}-${h.id}`}
                to={h.to}
                className="block bg-white border border-ink-200 rounded-lg p-4 hover:border-ink-400 hover:shadow-sm transition"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-500">
                      {kindLabels[h.kind]}
                    </span>
                    <h3 className="font-serif text-lg text-ink-800">{h.title}</h3>
                  </div>
                  {h.confidence && <ConfidenceBadge level={h.confidence} />}
                </div>
                <p className="text-sm text-ink-600 leading-relaxed line-clamp-3">{h.snippet}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
