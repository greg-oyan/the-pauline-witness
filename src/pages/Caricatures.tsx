import { Link } from 'react-router-dom'
import { caricatures } from '../data/caricatures'
import { themesById } from '../data/themes'

export default function Caricatures() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="border-b border-ink-200 pb-6 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
          Paul vs. Caricature
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-ink-900">
          Two persistent misreadings, tested against the letters.
        </h1>
        <p className="mt-4 text-ink-700 leading-relaxed">
          A caricature is not a random misunderstanding. It is a flattening that survives because
          it captures something real and discards what makes the real thing difficult. The two
          modules below take the strongest version of each caricature, name what it gets right,
          and then show what it has to ignore.
        </p>
      </header>

      <div className="space-y-12">
        {caricatures.map((c) => (
          <article key={c.id} className="bg-white border border-ink-200 rounded-lg overflow-hidden">
            <header className="px-6 py-5 border-b border-ink-200 bg-ink-50/40">
              <div className="font-mono text-xs uppercase tracking-wider text-ink-500 mb-2">
                The caricature
              </div>
              <p className="font-serif text-xl text-ink-800 leading-snug">{c.caricature}</p>
            </header>

            <div className="px-6 py-5 space-y-6">
              <Block label="Why it persists">{c.whyItPersists}</Block>
              <Block label="What Paul actually says">{c.whatPaulActuallySays}</Block>

              <div>
                <div className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
                  Primary evidence
                </div>
                <ul className="mt-2 space-y-1">
                  {c.primaryEvidence.map((p, i) => (
                    <li key={i} className="text-sm">
                      <span className="font-mono text-ink-800">{p.ref}</span>
                      {p.note && <span className="text-ink-500"> — {p.note}</span>}
                    </li>
                  ))}
                </ul>
              </div>

              <Block label="Tension retained">{c.tensionRetained}</Block>
              <Block label="Responsible frame">{c.responsibleFrame}</Block>

              {c.themeIds.length > 0 && (
                <div className="border-t border-ink-100 pt-4 flex flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider text-ink-500 font-semibold mr-1">
                    Related themes:
                  </span>
                  {c.themeIds.map((tid) => {
                    const t = themesById[tid]
                    if (!t) return null
                    return (
                      <Link
                        key={tid}
                        to={`/themes/${tid}`}
                        className="text-xs px-2 py-1 bg-ink-100 text-ink-700 rounded hover:bg-ink-200 transition"
                      >
                        {t.title}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-ink-500 font-semibold">{label}</div>
      <p className="mt-2 text-ink-700 leading-relaxed prose-pauline">{children}</p>
    </div>
  )
}
