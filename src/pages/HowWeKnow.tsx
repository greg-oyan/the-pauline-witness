import { useState } from 'react'
import { Link } from 'react-router-dom'
import { authenticityCases } from '../data/authenticity'
import { corpusById } from '../data/corpus'
import { caricatures } from '../data/caricatures'
import Dial from '../components/Dial'
import Pips from '../components/Pips'
import CiteChip from '../components/CiteChip'
import Tag from '../components/Tag'
import AxisPanel from '../components/AxisPanel'
import VerdictStrip from '../components/VerdictStrip'
import SourceDrawer from '../components/SourceDrawer'
import Disclosure from '../components/Disclosure'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, nextOf, prevOf } from '../readingPath'
import { confidenceLevel, confidenceLabel, confidenceShort } from '../lib/confidence'

export default function HowWeKnow() {
  const node = pathByNum[4]
  const [drawerOpen, setDrawerOpen] = useState(false)
  const activeCase = authenticityCases[0]
  const comp = corpusById[activeCase.comparisonLetter]

  const compLevel = confidenceLevel[activeCase.consensusConfidence]
  // For the "case against authenticity," the dial reads the OPPOSITE of
  // confidence-in-Paul: a "broad-consensus" verdict that the letter is NOT
  // Paul's renders as a full 4-pip dial against authenticity.
  const dialLevel = invertedDialLevel(compLevel)

  // Caricature bridge — themes Eph 2:8–10 overlaps with
  const cheapGrace = caricatures.find((c) => c.id === 'paul-taught-cheap-grace')

  return (
    <article>
      {/* CASE FILE HEADER */}
      <section className="border-b border-ink">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-12">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-7">
            <Tag accent>Station 04 · How we know</Tag>
            <Tag>Case file</Tag>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <Tag accent>Letter under examination</Tag>
              <h1 className="mt-4 display-claim text-5xl sm:text-7xl lg:text-display-l text-ink">
                {comp.shortTitle}
              </h1>
              <p className="mt-7 font-text text-[17px] text-ink-2 leading-relaxed max-w-measure">
                {activeCase.consensus}
              </p>
            </div>

            <aside className="lg:col-span-4 lg:pl-7 lg:border-l lg:border-rule">
              <Tag>Composite — against authenticity</Tag>
              <div className="mt-4 flex items-center gap-5">
                <Dial
                  level={dialLevel}
                  max={4}
                  size={104}
                  label={`${confidenceLabel[activeCase.consensusConfidence]} against Pauline authorship`}
                />
                <div>
                  <Pips n={dialLevel} total={4} size="lg" />
                  <p className="mt-2 font-display text-xl text-ink leading-tight">
                    {confidenceShort[activeCase.consensusConfidence]}
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.04em] uppercase text-ink-3 mt-1">
                    {confidenceLabel[activeCase.consensusConfidence]}
                  </p>
                </div>
              </div>
              <p className="mt-5 font-text text-[13.5px] text-ink-3 leading-relaxed">
                A categorical level, not a percentage. The judgment rests on the cumulative
                weight of independent markers — never a single number.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* PASSAGE WITH MARGINALIA */}
      <section className="border-b border-rule relative">
        <span
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 font-display italic text-ink-4 select-none"
          style={{ fontSize: 220, lineHeight: 0.85, opacity: 0.25 }}
        >
          iv
        </span>
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-12 relative">
          <header className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-8">
            <span className="font-display italic text-ink-4 text-2xl leading-none">§ I</span>
            <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
              Passage under examination
            </h2>
            <span className="leader hidden sm:block" aria-hidden="true" />
            <Tag>Editorial paraphrase · references only</Tag>
          </header>

          <div className="grid grid-cols-12 gap-6">
            {/* gutter */}
            <div className="hidden lg:block col-span-1 pr-2">
              <ol className="font-mono text-[11px] text-ink-4 space-y-6 text-right pt-7">
                <li>8.</li>
                <li>9.</li>
                <li>10.</li>
              </ol>
            </div>

            {/* passage card */}
            <article className="col-span-12 lg:col-span-7 bg-vellum px-7 sm:px-10 py-8 border-l border-r border-rule">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                <Tag>Ephesians · editorial paraphrase</Tag>
                <CiteChip>Eph 2:8–10</CiteChip>
              </div>
              <p className="font-text text-[18px] text-ink-2 leading-[1.7]">
                <Marker letter="A" /> By grace you have been saved through faith — and this not
                from yourselves; it is the gift of God — <Marker letter="B" /> not from{' '}
                <mark className="mark-a">works</mark>, so that no one may boast. For we are God’s
                workmanship, <Marker letter="C" /> created in Christ Jesus for{' '}
                <mark className="mark-c">good works</mark>, which God prepared beforehand that we
                should walk in them.
              </p>
              <p className="mt-5 font-text italic text-[13.5px] text-ink-3 leading-relaxed">
                Paraphrase, not a translation. Read the passage itself in your edition. The
                marked phrases are the diagnostic hinges.
              </p>

              <hr className="hr-hair my-7" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-4">
                <CrossRef refName="Gal 2:16" note="erga nomou — works of the law" />
                <CrossRef refName="Rom 3:28" note="justified by faith, apart from works of law" />
                <CrossRef refName="Col 2:11–13" note="parallel grace + baptism language" />
              </div>
            </article>

            {/* marginalia */}
            <aside className="col-span-12 lg:col-span-4 lg:pl-4 space-y-5">
              <Tag>Marginalia</Tag>
              <Margin
                letter="A"
                tone="oxblood"
                title="Vocabulary shift"
                body="The undisputed Paul’s “works of the law” specifies Torah identity markers. Ephesians uses an unqualified “works,” shifting the register away from the situated Galatian fight."
              />
              <Margin
                letter="B"
                tone="indigo"
                title="Argumentative register"
                body="In Galatians and Romans, the formulation is forensic and contested. Here it reads as settled, doxological — a confessional epitome rather than a live argument."
              />
              <Margin
                letter="C"
                tone="umber"
                title="Coherence with Galatians"
                body="The sequel — “created for good works” — preserves Pauline ethics but in abstracted form. The grace/ethics seam Paul builds in Rom 6 is here pre-resolved."
              />

              <div className="bg-paper-2 border border-rule p-5">
                <Tag>Cross-references</Tag>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <CiteChip>Eph 1:3–14</CiteChip>
                  <CiteChip>Eph 5:21–33</CiteChip>
                  <CiteChip>Col 1:15–20</CiteChip>
                  <CiteChip>Gal 2:15–21</CiteChip>
                  <CiteChip>Rom 3:21–31</CiteChip>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOUR (SIX) AXIS DIAGNOSTIC */}
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-16 pb-14">
          <header className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-10">
            <span className="font-display italic text-ink-4 text-2xl leading-none">§ II</span>
            <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
              The axes of diagnosis
            </h2>
            <span className="leader hidden sm:block" aria-hidden="true" />
            <Tag>Each panel is its own evidence</Tag>
          </header>
          <p className="font-text text-[16px] text-ink-2 max-w-measure leading-relaxed mb-10">
            All {activeCase.markers.length} markers from the typed authenticity data, in the
            categories the field actually uses. Per-panel weight comes from the marker’s
            recorded weight — strong, moderate, or suggestive — not an invented number.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {activeCase.markers.map((m, i) => (
              <AxisPanel
                key={i}
                marker={m}
                idx={i}
                comparisonLabel={comp.shortTitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VERDICT STRIP */}
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-5 sm:px-10 py-16">
          <VerdictStrip
            confidence={activeCase.consensusConfidence}
            headline="A majority of critical scholars judges Ephesians"
            italicAccent="not by Paul’s own hand."
            summary={activeCase.responsibleFrame}
            markers={activeCase.markers}
          />
          <div className="mt-7">
            <Disclosure
              summary="Counterpoint — the case for authenticity"
              hint="Defenders of Pauline authorship"
            >
              <p className="font-text text-[15.5px] text-ink-2 leading-relaxed max-w-measure">
                {activeCase.counterpoint}
              </p>
            </Disclosure>
            <Disclosure summary="Sources & notes" hint="Stylistic markers, ecclesial vocabulary">
              <p className="font-text text-[14px] text-ink-2 mb-4 leading-relaxed">
                Open the drawer for chapter-and-verse references and editor notes on the markers
                above.
              </p>
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-ink hover:text-oxblood transition duration-150 border-b border-rule hover:border-oxblood pb-0.5"
              >
                Open source drawer ↗
              </button>
            </Disclosure>
          </div>
        </div>
      </section>

      {/* CONTRAST BLOCK — bridge to Distortions */}
      <section>
        <div className="max-w-cover mx-auto px-5 sm:px-10 py-16">
          <header className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-10">
            <span className="font-display italic text-ink-4 text-2xl leading-none">§ III</span>
            <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
              For contrast
            </h2>
            <span className="leader hidden sm:block" aria-hidden="true" />
            <Tag>What slips off the diagnostic in popular reading</Tag>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            <article className="lg:col-span-7 bg-vellum border border-rule p-7 sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
                <Tag>The caricature</Tag>
                <CiteChip>Eph 2:8–9 cited alone</CiteChip>
              </div>
              <p className="font-display italic text-2xl sm:text-3xl text-ink leading-[1.2]">
                “{(cheapGrace?.caricature ?? '').replace(/^"|"$/g, '')}”
              </p>
              <hr className="hr-hair my-7" />
              <ul className="space-y-4">
                <DiffLine
                  sign="−"
                  tone="oxblood"
                  body="Quotes the abstract grace/works formula but drops the situated Galatian polemic that anchors it."
                />
                <DiffLine
                  sign="−"
                  tone="oxblood"
                  body="Ignores Paul’s own counter-question (“shall we sin so that grace may abound? By no means.”) in Rom 6:1–2."
                />
                <DiffLine
                  sign="+"
                  tone="verdigris"
                  body="Sustained ethical instruction in Gal 5–6 and Rom 12–15 makes the cheap-grace reading collapse under its own weight."
                />
                <DiffLine
                  sign="+"
                  tone="verdigris"
                  body="Eph 2:10 itself — “created in Christ Jesus for good works” — completes the very sentence the caricature truncates."
                />
              </ul>
            </article>

            <aside className="lg:col-span-5 bg-paper-2 border border-rule p-7 sm:p-10">
              <Tag>Diagnostic — the caricature</Tag>
              <div className="mt-5 flex items-center gap-6">
                <Dial level={1} max={4} size={96} label="The caricature fails the diagnostic" />
                <div>
                  <Pips n={1} total={4} size="lg" />
                  <p className="mt-2 font-display text-xl leading-tight text-ink">Fails diagnostic</p>
                  <p className="font-mono text-[11px] tracking-[0.04em] uppercase text-ink-3 mt-1">
                    Minority view at best
                  </p>
                </div>
              </div>

              <hr className="hr-hair my-7" />

              <ul className="space-y-4">
                <MiniMarker label="Internal coherence" weight={3} />
                <MiniMarker label="Use of context" weight={1} />
                <MiniMarker label="Counter-evidence" weight={3} />
                <MiniMarker label="Authorial argument" weight={2} />
              </ul>

              <Link
                to="/distortions"
                className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-ink hover:text-oxblood transition duration-150 border-b border-rule hover:border-oxblood pb-0.5"
              >
                See What gets distorted → Station 05
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <SourceDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sourceIds={activeCase.sourceIds}
        title="Authenticity sources"
      />

      <ReadingPathFooter
        stepNum={node.num}
        totalSteps={5}
        prev={
          prevOf(node.num) && {
            to: prevOf(node.num)!.to,
            label: prevOf(node.num)!.label,
            eyebrow: '← Station 03',
          }
        }
        next={
          nextOf(node.num) && {
            to: nextOf(node.num)!.to,
            label: nextOf(node.num)!.label,
            eyebrow: 'Station 05 →',
          }
        }
        closing="Once the seam between Paul and his later interpreters is visible, two persistent caricatures fall away under their own weight."
      />
    </article>
  )
}

/* ──────────────────────────────────────────────────────────── */
function invertedDialLevel(l: 1 | 2 | 3 | 4): number {
  // confidenceLevel measures confidence in the claim "this is the verdict."
  // Here the verdict is "not by Paul." So a "broad-consensus that not Paul"
  // displays as 4 pips against authenticity. confidenceLevel already returns
  // the right magnitude. Return as-is; helper kept for future inversions.
  return l
}

function Marker({ letter }: { letter: 'A' | 'B' | 'C' }) {
  const color =
    letter === 'A' ? 'var(--oxblood)' : letter === 'B' ? 'var(--indigo)' : 'var(--umber)'
  return (
    <sup
      className="font-mono mr-1 text-[10px] tracking-[0.04em] align-super"
      style={{ color }}
      aria-hidden="true"
    >
      [{letter}]
    </sup>
  )
}

function Margin({
  letter,
  tone,
  title,
  body,
}: {
  letter: 'A' | 'B' | 'C'
  tone: 'oxblood' | 'indigo' | 'umber'
  title: string
  body: string
}) {
  const color =
    tone === 'oxblood' ? 'var(--oxblood)' : tone === 'indigo' ? 'var(--indigo)' : 'var(--umber)'
  return (
    <div className="flex gap-4">
      <span
        className="font-display text-lg w-7 h-7 flex items-center justify-center border flex-shrink-0"
        style={{ color, borderColor: color }}
        aria-hidden="true"
      >
        {letter}
      </span>
      <div>
        <div className="tag mb-1" style={{ color }}>
          {title}
        </div>
        <p className="font-text text-[13.5px] text-ink-2 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

function CrossRef({ refName, note }: { refName: string; note: string }) {
  return (
    <div>
      <CiteChip>{refName}</CiteChip>
      <p className="mt-2 font-text italic text-[12.5px] text-ink-3 leading-snug">{note}</p>
    </div>
  )
}

function DiffLine({
  sign,
  tone,
  body,
}: {
  sign: '+' | '−'
  tone: 'verdigris' | 'oxblood'
  body: string
}) {
  const color = tone === 'verdigris' ? 'var(--verdigris)' : 'var(--oxblood)'
  return (
    <li className="flex gap-4">
      <span
        className="font-mono font-medium flex-shrink-0 mt-0.5"
        style={{ color }}
        aria-hidden="true"
      >
        {sign}
      </span>
      <p className="font-text text-[14.5px] text-ink-2 leading-relaxed">{body}</p>
    </li>
  )
}

function MiniMarker({ label, weight }: { label: string; weight: 1 | 2 | 3 }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <span className="font-display text-[15px] text-ink truncate">{label}</span>
        <span className="tag text-ink-3">
          {weight === 3 ? 'Strong' : weight === 2 ? 'Moderate' : 'Suggestive'}
        </span>
      </div>
      <div className="h-px w-full bg-rule">
        <div
          className="h-[2px] -translate-y-px bg-ink"
          style={{ width: `${(weight / 3) * 100}%` }}
        />
      </div>
    </li>
  )
}

