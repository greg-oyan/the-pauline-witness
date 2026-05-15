import { useMemo } from 'react'
import { corpus } from '../data/corpus'
import type { AuthenticityStatus, CorpusEntry } from '../data/types'
import Folio from '../components/Folio'
import Tag from '../components/Tag'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, nextOf, prevOf } from '../readingPath'
import { midYearOf } from '../lib/confidence'

const tierMeta: Record<
  AuthenticityStatus,
  { title: string; descriptor: string; lede: string; numeral: string }
> = {
  undisputed: {
    title: 'Undisputed',
    descriptor: 'the bedrock',
    numeral: 'i',
    lede: 'Virtually undisputed across critical scholarship. Internal letter structure, named co-workers, and external attestation align. The seven that do the load-bearing work in this project.',
  },
  disputed: {
    title: 'Disputed',
    descriptor: 'genuinely divided',
    numeral: 'ii',
    lede: 'Authorship is contested. Markers — vocabulary, style, theology, church structure — point in different directions depending on the case. Read as serious early Christian texts in conversation with Paul.',
  },
  'pseudonymous-majority': {
    title: 'Pastoral Epistles',
    descriptor: 'majority pseudonymous',
    numeral: 'iii',
    lede: '1 Timothy, 2 Timothy, and Titus. A strong majority of critical scholars judges these written in Paul’s name a generation or two after his death. The vocabulary, church structure, and theology diverge sharply.',
  },
  adjacent: {
    title: 'Adjacent',
    descriptor: 'not Paul',
    numeral: 'iv',
    lede: 'Hebrews is not a Pauline letter; Acts is a secondary, later, Lukan narrative. Included here only as adjacent witnesses sometimes wrongly attributed to Paul. Where Acts and the letters conflict, critical scholarship privileges the letters.',
  },
}

const tierOrder: AuthenticityStatus[] = ['undisputed', 'disputed', 'pseudonymous-majority', 'adjacent']

export default function Letters() {
  const node = pathByNum[2]

  return (
    <article>
      {/* HEADER */}
      <section className="border-b border-ink">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
            <Tag accent>Station 02 · The letters</Tag>
            <Tag>Folio 02 / 05</Tag>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-7 display-claim text-5xl sm:text-6xl lg:text-display-l text-ink">
              <span className="block">Fourteen writings,</span>
              <span className="block">attributed.</span>
              <span className="block font-display italic text-oxblood mt-1">Seven undisputed.</span>
            </h1>
            <p className="lg:col-span-5 font-text text-[17px] text-ink-2 leading-relaxed lg:pl-6 lg:border-l lg:border-rule">
              The four tiers below sort the corpus by evidentiary weight, not canonical order.
              A folio card carries a four-pip confidence row built from the same scale used
              throughout this project: broad consensus, majority view, contested, minority view.
              The lower the tier, the less directly the text speaks for Paul’s own hand.
            </p>
          </div>
        </div>
      </section>

      {/* CHRONOLOGY AXIS */}
      <ChronologyAxis />

      {/* TIER SECTIONS */}
      <div className="max-w-cover mx-auto px-5 sm:px-10 py-12 space-y-20">
        {tierOrder.map((tier) => {
          const items = corpus.filter((c) => c.status === tier)
          const meta = tierMeta[tier]
          return (
            <section key={tier}>
              <header className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-8">
                <span className="font-display italic text-ink-4 text-3xl leading-none">
                  {meta.numeral}
                </span>
                <h2 className="font-display text-display-s sm:text-[44px] text-ink leading-none">
                  {meta.title}
                </h2>
                <span className="tag text-ink-3">
                  {String(items.length).padStart(2, '0')} · {meta.descriptor}
                </span>
                <span className="leader hidden sm:block" aria-hidden="true" />
              </header>
              <p className="font-text italic text-[15.5px] text-ink-2 max-w-measure leading-relaxed mb-7">
                {meta.lede}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-rule border border-rule">
                {items.map((c) => (
                  <Folio key={c.id} entry={c} index={absoluteIndex(c, corpus)} />
                ))}
                {items.length === 0 && (
                  <div className="p-7 bg-vellum text-ink-3 italic">No entries in this tier.</div>
                )}
                {/* fill empty grid cells with paper-3 so the grid line stays clean */}
                {items.length < gridFiller(items.length) &&
                  Array.from({ length: gridFiller(items.length) - items.length }).map((_, i) => (
                    <div key={`pad-${i}`} className="hidden xl:block bg-paper-2" />
                  ))}
              </div>
            </section>
          )
        })}

        {/* SCORING LEGEND */}
        <section className="bg-vellum border border-rule p-7 sm:p-10">
          <header className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-2">
            <span className="font-display italic text-ink-4 text-2xl leading-none">§</span>
            <h2 className="font-display text-display-s text-ink leading-none">
              How attribution is scored
            </h2>
            <span className="leader hidden sm:block" aria-hidden="true" />
            <Tag>Six axes · composite on each folio</Tag>
          </header>
          <p className="font-text text-[15px] text-ink-2 leading-relaxed mt-5 max-w-measure">
            Critical scholarship runs each disputed letter through a battery of independent
            markers. The Authenticity Lab data behind this project draws from six categories.
            None is decisive on its own; the verdict is cumulative.
          </p>

          <hr className="hr-hair my-7" />

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7">
            {[
              {
                title: 'Vocabulary',
                body: 'Words rare or absent elsewhere in the Pauline corpus; technical terms native to a later, more settled situation.',
              },
              {
                title: 'Style',
                body: 'Sentence length, register, and the rhythm of argument. Elevated, liturgical, formulaic registers contrast with the diatribe of the undisputed letters.',
              },
              {
                title: 'Theology',
                body: 'Center of gravity on the Church, eschatological tense, the role of Israel, the language of salvation — places where a later writer’s development tends to show.',
              },
              {
                title: 'Church structure',
                body: 'Charismatic gifts vs. settled offices; episkopos and presbyteros as institutional categories; the absence or presence of the language of household codes.',
              },
              {
                title: 'Eschatology',
                body: 'Imminence of the Day of the Lord, the present-tense register of resurrection life. Shifts between letters mark different moments in early Christian expectation.',
              },
              {
                title: 'Historical setting',
                body: 'Named persons, travel plans, financial collections, situational pastoral matters. A circular letter or generic address speaks differently from a contested local one.',
              },
            ].map((a) => (
              <li key={a.title}>
                <div className="tag mb-2">{a.title}</div>
                <p className="font-text text-[14px] text-ink-2 leading-relaxed">{a.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <ReadingPathFooter
        stepNum={node.num}
        totalSteps={5}
        prev={
          prevOf(node.num) && {
            to: prevOf(node.num)!.to,
            label: prevOf(node.num)!.label,
            eyebrow: '← Station 01',
          }
        }
        next={
          nextOf(node.num) && {
            to: nextOf(node.num)!.to,
            label: nextOf(node.num)!.label,
            eyebrow: 'Station 03 →',
          }
        }
        closing="With the corpus sorted by evidence, the next station works out what Paul actually argues — read first from the letters that bear his name most securely."
      />
    </article>
  )
}

// Stable index within whole corpus, used as the "No. XX" folio number
function absoluteIndex(c: CorpusEntry, list: CorpusEntry[]): number {
  return list.findIndex((x) => x.id === c.id)
}

function gridFiller(n: number): number {
  if (n <= 1) return 1
  if (n <= 2) return 2
  if (n <= 3) return 3
  return Math.ceil(n / 4) * 4
}

/* ──────────────────────────────────────────────────────────── */
/*  CHRONOLOGY AXIS                                              */
/* ──────────────────────────────────────────────────────────── */

const Y_MIN = 30
const Y_MAX = 150
const TICKS = [30, 50, 70, 90, 110, 130, 150]

function ChronologyAxis() {
  // Plot each letter at midYearOf(approxDate). Group overlapping points by
  // status so they don't smear together.
  const points = useMemo(() => {
    return corpus.map((c) => ({
      id: c.id,
      label: c.shortTitle,
      status: c.status,
      year: midYearOf(c.approxDate),
    }))
  }, [])

  return (
    <section className="hidden md:block border-b border-rule">
      <div className="max-w-cover mx-auto px-5 sm:px-10 pt-10 pb-12">
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <Tag>Chronology · dates from majority scholarship</Tag>
          <span className="font-mono text-[11px] tracking-[0.04em] uppercase text-ink-3">
            ← 30 CE · earliest · 150 CE →
          </span>
        </div>
        <p className="font-text italic text-[14.5px] text-ink-3 max-w-measure leading-relaxed mb-7">
          Positions read off the approxDate strings in the project’s typed corpus data.
          Where the date is a range, the midpoint is plotted; where it is a span of decades,
          the midpoint of the span. No fabricated precision.
        </p>

        <div className="relative" style={{ paddingTop: 18, paddingBottom: 56 }}>
          {/* axis line */}
          <div className="absolute left-0 right-0 top-[40px] h-px bg-ink" aria-hidden="true" />

          {/* ticks */}
          {TICKS.map((y) => {
            const pct = ((y - Y_MIN) / (Y_MAX - Y_MIN)) * 100
            return (
              <div
                key={y}
                className="absolute top-[40px]"
                style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
                aria-hidden="true"
              >
                <div className="w-px h-2 bg-ink" />
                <div className="mt-1 font-mono text-[10px] tracking-[0.04em] text-ink-3 -translate-x-1/2">
                  {y} CE
                </div>
              </div>
            )
          })}

          {/* points */}
          {points.map((p, i) => {
            const pct = ((p.year - Y_MIN) / (Y_MAX - Y_MIN)) * 100
            const clamped = Math.max(0, Math.min(100, pct))
            const tone =
              p.status === 'undisputed'
                ? 'var(--oxblood)'
                : p.status === 'disputed'
                ? 'var(--ink)'
                : p.status === 'pseudonymous-majority'
                ? 'var(--ink-4)'
                : 'var(--ink-3)'
            // alternate above/below to reduce label collisions
            const above = i % 2 === 0
            return (
              <div
                key={p.id}
                className="absolute"
                style={{ left: `${clamped}%`, top: above ? 12 : 64, transform: 'translateX(-50%)' }}
              >
                <div
                  className="w-2.5 h-2.5 mx-auto"
                  style={{ background: tone }}
                  aria-hidden="true"
                />
                {above ? (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-full mt-[-4px] font-mono text-[10px] tracking-[0.04em] uppercase text-ink-3 whitespace-nowrap"
                  >
                    {p.label}
                  </div>
                ) : (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 font-mono text-[10px] tracking-[0.04em] uppercase text-ink-3 whitespace-nowrap">
                    {p.label}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-2 tag text-ink-3">
          <LegendDot tone="oxblood" /> Undisputed
          <LegendDot tone="ink" /> Disputed
          <LegendDot tone="ink-4" /> Pseudonymous (majority)
          <LegendDot tone="ink-3" /> Adjacent
        </div>
      </div>
    </section>
  )
}

function LegendDot({ tone }: { tone: 'oxblood' | 'ink' | 'ink-4' | 'ink-3' }) {
  const color =
    tone === 'oxblood'
      ? 'var(--oxblood)'
      : tone === 'ink'
      ? 'var(--ink)'
      : tone === 'ink-4'
      ? 'var(--ink-4)'
      : 'var(--ink-3)'
  return (
    <span
      className="inline-block w-2 h-2 mr-1.5 align-middle"
      style={{ background: color }}
      aria-hidden="true"
    />
  )
}
