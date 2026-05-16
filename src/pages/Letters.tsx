import { useMemo } from 'react'
import { corpus } from '../data/corpus'
import type { AuthenticityStatus } from '../data/types'
import Folio from '../components/Folio'
import Tag from '../components/Tag'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, nextOf, prevOf } from '../readingPath'
import { midYearOf } from '../lib/confidence'

const tierMeta: Record<
  AuthenticityStatus,
  { title: string; descriptor: string; lede: string }
> = {
  undisputed: {
    title: 'Undisputed',
    descriptor: 'the bedrock',
    lede: 'Virtually undisputed across critical scholarship. Internal letter structure, named co-workers, and external attestation align. The seven that do the load-bearing work in this project.',
  },
  disputed: {
    title: 'Disputed',
    descriptor: 'genuinely divided',
    lede: 'Authorship is contested. Markers — vocabulary, style, theology, church structure — point in different directions depending on the case. Read as serious early Christian texts in conversation with Paul.',
  },
  'pseudonymous-majority': {
    title: 'Pastoral Epistles',
    descriptor: 'majority pseudonymous',
    lede: '1 Timothy, 2 Timothy, and Titus. A strong majority of critical scholars judges these written in Paul’s name a generation or two after his death. The vocabulary, church structure, and theology diverge sharply.',
  },
  adjacent: {
    title: 'Adjacent',
    descriptor: 'not Paul',
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
          <Tag accent>Part 02 — The letters</Tag>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-10">
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

      <ChronologyAxis />

      <div className="max-w-cover mx-auto px-5 sm:px-10 py-12 space-y-20">
        {tierOrder.map((tier) => {
          const items = corpus.filter((c) => c.status === tier)
          const meta = tierMeta[tier]
          return (
            <section key={tier}>
              <header className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-8">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {items.map((c) => (
                  <Folio key={c.id} entry={c} />
                ))}
                {items.length === 0 && (
                  <div className="p-7 bg-vellum border border-rule text-ink-3 italic">
                    No entries in this tier.
                  </div>
                )}
              </div>
            </section>
          )
        })}
      </div>

      <ReadingPathFooter
        stepNum={node.num}
        totalSteps={5}
        prev={
          prevOf(node.num) && {
            to: prevOf(node.num)!.to,
            label: prevOf(node.num)!.label,
            eyebrow: '← Part 01',
          }
        }
        next={
          nextOf(node.num) && {
            to: nextOf(node.num)!.to,
            label: nextOf(node.num)!.label,
            eyebrow: 'Part 03 →',
          }
        }
        closing="With the corpus sorted by evidence, the next part works out what Paul actually argues — read first from the letters that bear his name most securely."
      />
    </article>
  )
}

/* ──────────────────────────────────────────────────────────── */
/*  CHRONOLOGY AXIS — dots only, no labels                       */
/* ──────────────────────────────────────────────────────────── */

const Y_MIN = 30
const Y_MAX = 150
const TICKS = [30, 50, 70, 90, 110, 130, 150]

function ChronologyAxis() {
  const points = useMemo(
    () =>
      corpus.map((c) => ({
        id: c.id,
        label: c.shortTitle,
        status: c.status,
        year: midYearOf(c.approxDate),
      })),
    [],
  )

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
          A visual summary, not a labeled chart. Each dot’s exact date appears inside its folio
          card below. Positions are read off the approxDate strings in the project’s typed
          corpus data; ranges are plotted at their midpoint.
        </p>

        <div className="relative" style={{ paddingTop: 16, paddingBottom: 32 }}>
          {/* axis line */}
          <div className="absolute left-0 right-0 top-[24px] h-px bg-ink" aria-hidden="true" />

          {/* ticks */}
          {TICKS.map((y) => {
            const pct = ((y - Y_MIN) / (Y_MAX - Y_MIN)) * 100
            return (
              <div
                key={y}
                className="absolute top-[24px]"
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

          {/* points — dots only */}
          {points.map((p) => {
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
            return (
              <div
                key={p.id}
                className="absolute"
                style={{ left: `${clamped}%`, top: 18, transform: 'translateX(-50%)' }}
                title={`${p.label} · ~${Math.round(p.year)} CE`}
              >
                <div
                  className="w-2.5 h-2.5"
                  style={{ background: tone }}
                  aria-hidden="true"
                />
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
