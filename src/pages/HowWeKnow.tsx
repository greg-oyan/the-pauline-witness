import { useState } from 'react'
import { authenticityCases } from '../data/authenticity'
import { corpusById } from '../data/corpus'
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

  return (
    <article>
      {/* CASE HEADER */}
      <section className="border-b border-ink">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-12">
          <Tag accent>Part 04 — How we know · an example</Tag>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <h1 className="display-claim text-5xl sm:text-7xl lg:text-display-l text-ink">
                {comp.shortTitle}
              </h1>
              <p className="mt-7 font-text text-[17px] text-ink-2 leading-relaxed max-w-measure">
                {activeCase.consensus}
              </p>
            </div>

            <aside className="lg:col-span-4 lg:pl-7 lg:border-l lg:border-rule">
              <Tag>The case against Pauline authorship</Tag>
              <div className="mt-4 flex items-center gap-4">
                <Pips n={compLevel} total={4} size="lg" />
                <div>
                  <p className="font-display text-xl text-ink leading-tight">
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

      {/* THE PASSAGE — editorial framing, no quotation */}
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-14 pb-14">
          <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
            The passage
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8">
            <article className="lg:col-span-7 bg-vellum border border-rule p-7 sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
                <span className="tag">Ephesians · the most-quoted summary of Pauline grace</span>
                <CiteChip>Eph 2:8–10</CiteChip>
              </div>
              <p className="font-text text-[17px] text-ink-2 leading-relaxed">
                Ephesians 2:8–10 frames salvation as a gift rather than a wage, then pairs that
                claim with the corrective note that the saved are made for good works. It reads,
                in the editor’s judgment, as a settled epitome of Pauline teaching rather than a
                live argument.
              </p>
              <p className="mt-4 font-text text-[17px] text-ink-2 leading-relaxed">
                Read the verses in your own translation alongside this page. The diagnostic
                question is not whether the passage is true to Paul, but whether it speaks in
                Paul’s own voice or in the voice of a careful follower a generation later.
              </p>

              <hr className="hr-hair my-7" />

              <Tag>Cross-references</Tag>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <CiteChip>Gal 2:16</CiteChip>
                <CiteChip>Rom 3:28</CiteChip>
                <CiteChip>Eph 1:3–14</CiteChip>
              </div>
            </article>

            <aside className="lg:col-span-5 space-y-7">
              <Tag>Notes on the passage</Tag>
              <Note
                title="Vocabulary shift"
                body="The undisputed Paul writes “works of the law” (erga nomou), specifying Torah identity markers. Ephesians writes “works” unqualified, shifting the register away from the situated Galatian fight."
              />
              <Note
                title="Argumentative register"
                body="In Galatians and Romans the formulation is forensic and contested. Here it reads as settled, doxological — a confessional epitome rather than a live argument."
              />
              <Note
                title="Coherence with Galatians"
                body="The sequel — created for good works — preserves the Pauline ethical seam but in abstracted form. The grace-and-ethics fit Paul builds in Romans 6 is here pre-resolved."
              />
            </aside>
          </div>
        </div>
      </section>

      {/* THE AXES */}
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-14 pb-14">
          <h2 className="font-display text-display-s sm:text-display-m text-ink leading-none">
            The axes of diagnosis
          </h2>
          <p className="mt-6 font-text text-[16px] text-ink-2 max-w-measure leading-relaxed mb-10">
            All {activeCase.markers.length} markers from the typed authenticity data, in the
            categories the field actually uses. Each panel’s weight — strong, moderate, or
            suggestive — comes from the recorded marker, not from an invented number.
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

      {/* VERDICT */}
      <section>
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
            eyebrow: '← Part 03',
          }
        }
        next={
          nextOf(node.num) && {
            to: nextOf(node.num)!.to,
            label: nextOf(node.num)!.label,
            eyebrow: 'Part 05 →',
          }
        }
        closing="Once the seam between Paul and his later interpreters is visible, two persistent caricatures fall away under their own weight."
      />
    </article>
  )
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="tag mb-1.5 text-ink-3">{title}</div>
      <p className="font-text text-[13.5px] text-ink-2 leading-relaxed">{body}</p>
    </div>
  )
}
