import { useState } from 'react'
import { Link } from 'react-router-dom'
import { authenticityCases } from '../data/authenticity'
import { corpusById } from '../data/corpus'
import { lettersById } from '../data/letters'
import ConfidenceBadge from '../components/ConfidenceBadge'
import SourceDrawer from '../components/SourceDrawer'

const weightStyles: Record<string, string> = {
  strong: 'bg-rose-50 text-rose-800 border-rose-200',
  moderate: 'bg-amber-50 text-amber-800 border-amber-200',
  suggestive: 'bg-sky-50 text-sky-800 border-sky-200',
}

export default function Lab() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null)
  const activeCase = activeCaseId ? authenticityCases.find((a) => a.id === activeCaseId) : null

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="border-b border-ink-200 pb-6 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
          Authenticity Lab
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-ink-900">
          What does "Pauline" actually mean — and how do we tell?
        </h1>
        <p className="mt-4 max-w-3xl text-ink-700 leading-relaxed">
          New Testament authorship judgments are not arbitrary and they are not certain. They rest
          on cumulative markers: vocabulary, sentence length and style, theological emphasis,
          assumed church structure, eschatological tense, historical setting, and literary
          dependence on other writings. Below: Ephesians, the most discussed case, compared to the
          undisputed letters that form the Pauline baseline.
        </p>
      </header>

      {authenticityCases.map((c) => {
        const comp = corpusById[c.comparisonLetter]
        return (
          <section key={c.id} className="mb-12">
            <div className="bg-white border border-ink-200 rounded-lg overflow-hidden">
              <header className="px-6 py-5 border-b border-ink-200 bg-ink-50/40">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="font-serif text-2xl text-ink-800">
                    {comp.shortTitle} vs. undisputed baseline
                  </h2>
                  <ConfidenceBadge level={c.consensusConfidence} />
                </div>
                <p className="mt-2 text-sm text-ink-600">
                  Baseline:{' '}
                  {c.baseline
                    .map((id) => corpusById[id].shortTitle)
                    .join(', ')}
                </p>
                <p className="mt-3 text-ink-700 leading-relaxed max-w-3xl">{c.consensus}</p>
              </header>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-ink-200 bg-ink-50/60 text-left text-xs uppercase tracking-wider text-ink-500">
                      <th className="px-4 py-3 font-semibold">Marker</th>
                      <th className="px-4 py-3 font-semibold">Undisputed pattern</th>
                      <th className="px-4 py-3 font-semibold">
                        {comp.shortTitle} pattern
                      </th>
                      <th className="px-4 py-3 font-semibold">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.markers.map((m, i) => (
                      <tr
                        key={i}
                        className="border-b border-ink-100 last:border-b-0 align-top"
                      >
                        <td className="px-4 py-4">
                          <div className="font-medium text-ink-800">{m.label}</div>
                          <div className="text-xs uppercase tracking-wider text-ink-500 mt-1">
                            {m.category}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-ink-700 leading-relaxed max-w-xs">
                          {m.undisputedPattern}
                        </td>
                        <td className="px-4 py-4 text-ink-700 leading-relaxed max-w-xs">
                          {m.comparisonPattern}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${weightStyles[m.weight]}`}
                          >
                            {m.weight}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-5 bg-ink-50/40 border-t border-ink-200">
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
                    Counterpoint
                  </div>
                  <p className="mt-2 text-ink-700 text-sm leading-relaxed">{c.counterpoint}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
                    Responsible frame
                  </div>
                  <p className="mt-2 text-ink-700 text-sm leading-relaxed">{c.responsibleFrame}</p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-ink-200 flex flex-wrap gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-3 text-sm">
                  {lettersById[c.comparisonLetter] && (
                    <Link
                      to={`/letters/${c.comparisonLetter}`}
                      className="text-accent hover:text-accent-dark font-medium"
                    >
                      Read the {comp.shortTitle} letter page →
                    </Link>
                  )}
                </div>
                <button
                  onClick={() => {
                    setActiveCaseId(c.id)
                    setDrawerOpen(true)
                  }}
                  className="px-4 py-2 bg-ink-800 text-ink-50 rounded text-sm font-medium hover:bg-ink-900 transition"
                >
                  View sources & notes
                </button>
              </div>
            </div>
          </section>
        )
      })}

      <SourceDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sourceIds={activeCase ? activeCase.sourceIds : []}
        title="Authenticity sources"
      />
    </div>
  )
}
