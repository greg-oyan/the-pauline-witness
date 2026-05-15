import { Link } from 'react-router-dom'
import { caricatures } from '../data/caricatures'
import { themesById } from '../data/themes'
import Disclosure from '../components/Disclosure'
import PassageList from '../components/PassageList'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, prevOf } from '../readingPath'

export default function Distortions() {
  const node = pathByNum[5]
  return (
    <article>
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14">
          <div className="eyebrow eyebrow-accent mb-5">Step 05 — What gets distorted</div>
          <h1 className="display-claim text-4xl sm:text-5xl lg:text-6xl text-ink-900 max-w-cover">
            Two caricatures persist because they catch something real and discard what makes the
            real thing difficult.
          </h1>
          <p className="mt-7 max-w-measure font-display text-lg text-ink-600 leading-relaxed">
            Each module names what the caricature gets right, then shows what it has to ignore in
            the undisputed letters to stand.
          </p>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {caricatures.map((c) => (
          <section key={c.id}>
            <header className="border-l-2 border-accent pl-5 sm:pl-7 mb-10">
              <div className="eyebrow mb-3">The caricature</div>
              <p className="font-display text-2xl sm:text-3xl text-ink-900 leading-snug max-w-measure italic">
                {c.caricature}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10">
              <div className="md:col-span-7 space-y-8">
                <Block label="Why it persists">{c.whyItPersists}</Block>
                <Block label="What Paul actually says">{c.whatPaulActuallySays}</Block>
                <Block label="Tension retained">{c.tensionRetained}</Block>
                <Block label="Responsible frame">{c.responsibleFrame}</Block>
              </div>

              <aside className="md:col-span-5 space-y-8">
                <div className="bg-cream/60 border border-rule p-6 rounded-sm">
                  <div className="eyebrow mb-4">Primary evidence</div>
                  <PassageList passages={c.primaryEvidence} />
                </div>

                {c.themeIds.length > 0 && (
                  <div>
                    <div className="eyebrow mb-3">Where to read more</div>
                    <ul className="space-y-2">
                      {c.themeIds.map((tid) => {
                        const t = themesById[tid]
                        if (!t) return null
                        return (
                          <li key={tid}>
                            <Link
                              to={`/teaching/${tid}`}
                              className="font-display text-lg text-ink-800 hover:text-accent transition"
                            >
                              {t.title}
                              <span className="text-ink-400 italic ml-2 text-sm font-normal">
                                — {t.subtitle}
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </section>
        ))}

        <Disclosure
          summary="Why hold the difficulty rather than smooth it"
          hint="A closing word on the four-slot discipline"
        >
          <div className="prose-pauline">
            <p>
              Each evidence and caricature card holds four slots: the claim, the evidence that
              carries it, the tension that does not resolve, and the frame a responsible reader
              should adopt. The third slot is the disciplinary one.
            </p>
            <p>
              A reading that flattens Paul’s tensions also flattens what makes the strongest
              evidence load-bearing. A reading that lets the tensions breathe gives faith a
              steadier place to stand than either devotional smoothing or skeptical dismantling.
            </p>
          </div>
        </Disclosure>
      </div>

      <ReadingPathFooter
        stepNum={node.num}
        totalSteps={5}
        prev={prevOf(node.num) && { to: prevOf(node.num)!.to, label: prevOf(node.num)!.label, eyebrow: '← Step 4' }}
        next={{ to: '/letters/romans', label: 'Begin again with Romans', eyebrow: 'Read deeper' }}
        closing="The path has run its length. Romans is the densest single argument in the corpus; reading it now, with the evidence sorted, is the natural next move."
      />
    </article>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-2">{label}</div>
      <p className="text-ink-700 leading-relaxed max-w-measure">{children}</p>
    </div>
  )
}
