import { Link } from 'react-router-dom'
import { readingPath } from '../readingPath'

export default function Home() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28">
          <h1 className="display-claim text-5xl sm:text-7xl lg:text-display-l xl:text-display-xl text-ink max-w-cover">
            <span className="block">Take the evidence</span>
            <span className="block">seriously.</span>
            <span className="block font-display italic text-oxblood mt-1">
              Faith has more to stand on.
            </span>
          </h1>

          <p className="mt-10 max-w-[36rem] font-text text-[20px] sm:text-[21px] leading-[1.55] text-ink-2">
            Some letters of Paul are virtually undisputed. Others are widely judged later,
            written in his name. A reading that begins with the strongest first-hand evidence
            has a steadier place to stand than one that treats every text as equally direct.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              to="/letters"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-paper hover:bg-oxblood transition duration-150"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase">Begin</span>
              <span className="font-display text-xl">→</span>
            </Link>
            <Link
              to="/how-we-know"
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-2 hover:text-oxblood transition duration-150 border-b border-rule hover:border-oxblood pb-0.5"
            >
              Read the diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* ── FIVE-PART PATH ───────────────────────────────────── */}
      <section>
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-16 sm:pt-20 pb-6">
          <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
            The path
          </h2>
        </div>

        <div className="max-w-cover mx-auto px-5 sm:px-10 pb-20 pt-8">
          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            aria-label="Reading path parts"
          >
            {readingPath.map((node, i) => {
              const active = i === 0
              return (
                <li
                  key={node.num}
                  className={`p-6 sm:p-7 border border-rule ${
                    active ? 'bg-vellum' : 'bg-paper'
                  } flex flex-col`}
                >
                  <span
                    className="font-display select-none leading-none"
                    style={{
                      fontSize: 64,
                      color: active ? 'var(--oxblood)' : 'var(--ink-4)',
                    }}
                    aria-hidden="true"
                  >
                    {String(node.num).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl sm:text-display-s text-ink leading-tight mt-4">
                    {node.label}
                  </h3>
                  <p className="font-text text-[13.5px] text-ink-2 leading-relaxed mt-2 italic">
                    {node.question}
                  </p>
                  <div className="mt-auto pt-6">
                    {active ? (
                      <Link
                        to={node.to === '/' ? '/letters' : node.to}
                        className="tag tag-accent hover:text-ink transition duration-150"
                      >
                        Begin →
                      </Link>
                    ) : (
                      <Link
                        to={node.to}
                        className="tag text-ink-4 hover:text-ink transition duration-150"
                      >
                        Part {String(node.num).padStart(2, '0')}
                      </Link>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
    </div>
  )
}
