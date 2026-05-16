import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { corpus } from '../data/corpus'
import { themes } from '../data/themes'
import { evidence } from '../data/evidence'
import { lettersById } from '../data/letters'
import ConfidenceBadge from '../components/ConfidenceBadge'
import Tag from '../components/Tag'
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
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 pb-12">
          <Tag accent>Side door</Tag>
          <h1 className="mt-5 display-claim text-4xl sm:text-display-s lg:text-display-m text-ink max-w-measure">
            Search the letters, the teaching, and the evidence cards.
          </h1>
          <p className="mt-6 max-w-measure font-text text-[16px] text-ink-2 leading-relaxed">
            This is the side door. If you have not yet read the five parts in order, start with{' '}
            <Link to="/" className="text-oxblood hover:text-oxblood-2 underline underline-offset-4 decoration-rule transition duration-150">
              Part 01
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-5 sm:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3 space-y-9">
            <div>
              <Tag className="mb-3 block">Search</Tag>
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="justification, resurrection…"
                className="w-full px-4 py-3 border border-rule bg-vellum text-ink focus:outline-none focus:border-ink transition duration-150 font-text text-[15px]"
                autoFocus
              />
            </div>

            <fieldset>
              <legend className="tag mb-3">Kind</legend>
              <div className="space-y-2.5">
                {(Object.keys(kinds) as Kind[]).map((k) => (
                  <label key={k} className="flex items-center gap-3 text-[14px] text-ink-2 font-text">
                    <input
                      type="checkbox"
                      checked={kinds[k]}
                      onChange={(e) =>
                        setKinds((s) => ({ ...s, [k]: e.target.checked }))
                      }
                      className="border-rule text-ink focus:ring-ink"
                    />
                    {kindLabels[k]}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="tag mb-3">Confidence</legend>
              <div className="space-y-2.5">
                {(Object.keys(confidences) as Confidence[]).map((c) => (
                  <label key={c} className="flex items-center gap-3 text-[14px] text-ink-2 font-text">
                    <input
                      type="checkbox"
                      checked={confidences[c]}
                      onChange={(e) =>
                        setConfidences((s) => ({ ...s, [c]: e.target.checked }))
                      }
                      className="border-rule text-ink focus:ring-ink"
                    />
                    {confidenceLabels[c]}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="tag text-ink-4">
              {filtered.length} result{filtered.length === 1 ? '' : 's'}
            </div>
          </aside>

          <div className="lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="border border-dashed border-rule p-10 text-center text-ink-3 italic font-text">
                No results for those filters.
              </div>
            ) : (
              <ul className="divide-y divide-rule border-y border-rule">
                {filtered.map((h) => (
                  <li key={`${h.kind}-${h.id}`}>
                    <Link to={h.to} className="block py-6 group">
                      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <Tag>{kindLabels[h.kind]}</Tag>
                          <h3 className="font-display text-xl sm:text-2xl text-ink group-hover:text-oxblood transition duration-150 leading-snug">
                            {h.title}
                          </h3>
                        </div>
                        {h.confidence && <ConfidenceBadge level={h.confidence} />}
                      </div>
                      <p className="font-text text-[14.5px] text-ink-3 leading-relaxed max-w-measure">
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
