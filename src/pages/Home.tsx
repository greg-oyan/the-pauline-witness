import { Link } from 'react-router-dom'
import { readingPath } from '../readingPath'
import { corpus } from '../data/corpus'
import { authenticityCases } from '../data/authenticity'
import { weightLabel, weightLevel, confidenceShort } from '../lib/confidence'
import Pips from '../components/Pips'
import Dial from '../components/Dial'
import CiteChip from '../components/CiteChip'
import Tag from '../components/Tag'

export default function Home() {
  const undisputed = corpus.filter((c) => c.status === 'undisputed')
  const ephesians = authenticityCases[0]

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 sm:pt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <Tag accent>Folio 01 · Threshold</Tag>
            <Tag>A guided reading of the strongest evidence</Tag>
          </div>
        </div>
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-10 sm:pt-14 pb-16 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 relative">
            <span
              aria-hidden="true"
              className="hidden lg:block absolute -left-2 -top-6 font-display italic text-ink-4 select-none pointer-events-none"
              style={{ fontSize: '11rem', lineHeight: 0.8 }}
            >
              i
            </span>
            <h1 className="relative display-claim text-5xl sm:text-7xl lg:text-display-l xl:text-display-xl text-ink">
              <span className="block">Take the evidence</span>
              <span className="block">seriously.</span>
              <span className="block font-display italic text-oxblood mt-1">
                Faith has more to stand on.
              </span>
            </h1>

            <p className="mt-10 max-w-[34rem] font-text text-[20px] sm:text-[21px] leading-[1.55] text-ink-2">
              Some letters of Paul are virtually undisputed. Others are widely judged later,
              written in his name. A reading that begins with the strongest first-hand evidence
              has a steadier place to stand than one that treats every text as equally direct.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to="/letters"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-paper hover:bg-oxblood transition duration-150"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase">Begin the path</span>
                <span className="font-display text-xl">→</span>
              </Link>
              <Link
                to="/how-we-know"
                className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-2 hover:text-oxblood transition duration-150 border-b border-rule hover:border-oxblood pb-0.5"
              >
                Read the diagnostic
              </Link>
              <CiteChip>≈ 38 min · 5 stations</CiteChip>
            </div>
          </div>

          {/* Featured-passage card */}
          <aside className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-rule">
            <article className="relative bg-vellum p-7 sm:p-8 border border-rule">
              <div className="absolute inset-2 border border-dashed border-rule pointer-events-none" />
              <div className="relative">
                <div className="flex items-baseline justify-between gap-3 mb-4">
                  <Tag>Featured passage</Tag>
                  <CiteChip>Rom 3:21–26</CiteChip>
                </div>
                <p className="font-display italic text-2xl text-ink leading-[1.25]">
                  The hinge of Romans — a righteousness from God, apart from the law, yet
                  attested by the law and the prophets.
                </p>
                <p className="mt-4 font-text text-[13.5px] text-ink-3 leading-relaxed">
                  Editor’s paraphrase, not a translation. Read the passage itself in your
                  preferred edition.
                </p>
                <hr className="hr-hair my-5" />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Pips n={4} total={4} />
                    <span className="tag">Strong attestation · core Pauline</span>
                  </div>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </section>

      {/* ── FIVE-STATION PATH ────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-16 sm:pt-20 pb-6">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-2">
            <span className="font-display italic text-ink-4 text-2xl leading-none">§ I</span>
            <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
              The five-station path
            </h2>
            <span className="leader hidden sm:block" aria-hidden="true" />
            <Tag>Stations advance with you</Tag>
          </div>
        </div>

        <div className="max-w-cover mx-auto px-5 sm:px-10 pb-10">
          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-rule border border-rule"
            aria-label="Reading path stations"
          >
            {readingPath.map((node, i) => {
              const active = i === 0
              return (
                <li
                  key={node.num}
                  className={`p-6 sm:p-7 ${active ? 'bg-vellum' : 'bg-paper'} flex flex-col`}
                >
                  <span
                    className="font-display select-none leading-none"
                    style={{
                      fontSize: 72,
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
                  <div className="mt-auto pt-6 flex items-center justify-between gap-3">
                    <span className="tag text-ink-4">
                      {pathMinutes[node.num]} min
                    </span>
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
                        —
                      </Link>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <span className="tag text-ink-3">Your position</span>
            <span className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 bg-oxblood" />
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="w-3 h-px bg-ink-4" />
              ))}
            </span>
            <span className="tag text-ink-3">01 of 05 stations</span>
          </div>
        </div>
      </section>

      {/* ── PREVIEW: HOW WE KNOW ─────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-16 sm:pt-20">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-2">
            <span className="font-display italic text-ink-4 text-2xl leading-none">§ II</span>
            <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
              How we know
            </h2>
            <span className="leader hidden sm:block" aria-hidden="true" />
            <Tag>A preview of the diagnostic</Tag>
          </div>
          <p className="mt-5 font-text text-[16px] text-ink-2 max-w-measure leading-relaxed">
            Every authorship judgment in this project is run through the same battery —
            vocabulary, style, theology, church structure, eschatology, historical setting —
            with the seven undisputed letters as baseline.
          </p>
        </div>

        <div className="max-w-cover mx-auto px-5 sm:px-10 py-14 grid grid-cols-1 lg:grid-cols-12 gap-7">
          <article className="lg:col-span-7 bg-vellum border border-rule p-7 sm:p-8">
            <div className="flex items-baseline justify-between gap-3 mb-5">
              <Tag>Passage under examination</Tag>
              <CiteChip>Eph 2:8–10</CiteChip>
            </div>
            <p className="font-display italic text-2xl sm:text-3xl text-ink leading-[1.2]">
              Ephesians reframes Paul’s justification language in a more abstract, less
              Torah-specific register. The "works" in question are no longer obviously
              works of the law.
            </p>
            <p className="mt-4 font-text text-[13.5px] text-ink-3 leading-relaxed">
              Editor’s paraphrase. Compare against{' '}
              <span className="font-mono text-ink-2">Gal 2:16</span> and{' '}
              <span className="font-mono text-ink-2">Rom 3:28</span> to feel the shift.
            </p>
            <hr className="hr-hair my-6" />
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {[
                { letter: 'A', label: 'Vocabulary', tone: 'oxblood' },
                { letter: 'B', label: 'Citation register', tone: 'indigo' },
                { letter: 'C', label: 'Coherence with Galatians', tone: 'umber' },
                { letter: 'D', label: 'Dependence on Colossians', tone: 'ink' },
              ].map((m) => (
                <li key={m.letter} className="flex items-start gap-3">
                  <span
                    className="font-display text-lg w-6 h-6 flex items-center justify-center border border-current flex-shrink-0"
                    style={{
                      color:
                        m.tone === 'oxblood'
                          ? 'var(--oxblood)'
                          : m.tone === 'indigo'
                          ? 'var(--indigo)'
                          : m.tone === 'umber'
                          ? 'var(--umber)'
                          : 'var(--ink)',
                    }}
                  >
                    {m.letter}
                  </span>
                  <span className="tag pt-1 text-ink-2">{m.label}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="lg:col-span-5 bg-paper-2 border border-rule p-7 sm:p-8">
            <div className="flex items-baseline justify-between gap-3 mb-7">
              <Tag>Composite — Ephesians</Tag>
              <Tag>{confidenceShort[ephesians.consensusConfidence]}</Tag>
            </div>
            <div className="flex items-center gap-7">
              <Dial
                level={4 - { 'broad-consensus': 0, 'majority-view': 1, contested: 2, 'minority-view': 3 }[ephesians.consensusConfidence]}
                max={4}
                size={120}
                label={`Composite: ${ephesians.consensusConfidence} that Ephesians is not by Paul`}
              />
              <div className="flex-1">
                <p className="font-display text-xl text-ink leading-snug">
                  Majority of critical scholars: not by Paul’s own hand.
                </p>
                <p className="mt-3 font-text text-[13px] text-ink-2 leading-relaxed">
                  Driven by cumulative markers — none decisive alone — across six independent axes.
                </p>
              </div>
            </div>

            <hr className="hr-hair my-7" />
            <ul className="space-y-4">
              {ephesians.markers.slice(0, 4).map((m, i) => (
                <li key={i}>
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <span className="font-display text-[15px] text-ink truncate">{m.label}</span>
                    <span className="tag text-ink-3">{weightLabel[m.weight]}</span>
                  </div>
                  <div className="h-px w-full bg-rule">
                    <div
                      className="h-[2px] -translate-y-px bg-ink"
                      style={{ width: `${(weightLevel[m.weight] / 3) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/how-we-know"
              className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-ink hover:text-oxblood transition duration-150 border-b border-rule hover:border-oxblood pb-0.5"
            >
              Open full diagnostic ↗
            </Link>
          </aside>
        </div>
      </section>

      {/* ── DISCIPLINES ──────────────────────────────────────── */}
      <section>
        <div className="max-w-cover mx-auto px-5 sm:px-10 py-20">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-10">
            <span className="font-display italic text-ink-4 text-2xl leading-none">§ III</span>
            <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
              Three disciplines
            </h2>
            <span className="leader hidden sm:block" aria-hidden="true" />
            <Tag>Run through every page</Tag>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
            <Discipline
              numeral="i"
              label="Evidence first"
              body={`The ${undisputed.length} undisputed letters do the load-bearing work. Disputed letters are read as serious early texts in conversation with Paul.`}
            />
            <Discipline
              numeral="ii"
              label="Confidence marked"
              body="Every claim carries a level: broad consensus, majority view, contested, minority view. The pip-row tells you which at a glance."
            />
            <Discipline
              numeral="iii"
              label="No quotation"
              body="Chapter-and-verse references only. Read Paul in your own translation alongside this project. The voice on the page is editorial, not scriptural."
            />
          </dl>
        </div>
      </section>
    </div>
  )
}

const pathMinutes: Record<number, number> = {
  1: 4,
  2: 7,
  3: 11,
  4: 9,
  5: 7,
}

function Discipline({
  numeral,
  label,
  body,
}: {
  numeral: string
  label: string
  body: string
}) {
  return (
    <div className="bg-paper p-7 sm:p-8">
      <div className="font-display italic text-3xl text-oxblood leading-none">{numeral}</div>
      <dt className="font-display text-2xl text-ink mt-3 leading-tight">{label}</dt>
      <dd className="mt-3 font-text text-[14.5px] text-ink-2 leading-relaxed">{body}</dd>
    </div>
  )
}
