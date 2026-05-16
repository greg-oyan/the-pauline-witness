import { Link } from 'react-router-dom'
import { caricatures } from '../data/caricatures'
import { themesById } from '../data/themes'
import Disclosure from '../components/Disclosure'
import PassageList from '../components/PassageList'
import Tag from '../components/Tag'
import ReadingPathFooter from '../components/ReadingPathFooter'
import { pathByNum, prevOf } from '../readingPath'

export default function Distortions() {
  const node = pathByNum[5]
  return (
    <article>
      <section className="border-b border-ink">
        <div className="max-w-cover mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-12">
          <Tag accent>Part 05 — What gets distorted</Tag>
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <h1 className="lg:col-span-7 display-claim text-5xl sm:text-6xl lg:text-display-l text-ink">
              <span className="block">Two caricatures persist</span>
              <span className="block font-display italic text-oxblood mt-1">
                because they catch something real.
              </span>
            </h1>
            <p className="lg:col-span-5 font-text text-[17px] text-ink-2 leading-relaxed lg:pl-7 lg:border-l lg:border-rule">
              A caricature is not a random misunderstanding. It is a flattening that survives
              because it captures something true and discards what makes the real thing
              difficult. Each module names what the caricature gets right, then shows what it
              has to ignore.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-cover mx-auto px-5 sm:px-10 py-14 space-y-24">
        {caricatures.map((c) => (
          <section key={c.id}>
            <blockquote className="border-l-2 border-oxblood pl-5 sm:pl-7 mb-12 max-w-measure">
              <p className="font-display italic text-2xl sm:text-3xl text-ink leading-snug">
                {c.caricature}
              </p>
            </blockquote>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
              <div className="lg:col-span-8 space-y-10">
                <Block label="Why it persists">{c.whyItPersists}</Block>
                <Block label="What Paul actually says">{c.whatPaulActuallySays}</Block>
                <Block label="Tension retained">{c.tensionRetained}</Block>
                <Block label="Responsible frame">{c.responsibleFrame}</Block>
              </div>

              <aside className="lg:col-span-4 space-y-8">
                <div className="bg-vellum border border-rule p-7">
                  <Tag>Primary evidence</Tag>
                  <div className="mt-4">
                    <PassageList passages={c.primaryEvidence} />
                  </div>
                </div>

                {c.themeIds.length > 0 && (
                  <div>
                    <Tag>Where to read more</Tag>
                    <ul className="mt-3 space-y-2">
                      {c.themeIds.map((tid) => {
                        const t = themesById[tid]
                        if (!t) return null
                        return (
                          <li key={tid}>
                            <Link
                              to={`/teaching/${tid}`}
                              className="font-display text-lg text-ink hover:text-oxblood transition duration-150"
                            >
                              {t.title}
                            </Link>
                            <p className="font-text italic text-[12.5px] text-ink-3 leading-snug mt-0.5">
                              {t.subtitle}
                            </p>
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
        prev={
          prevOf(node.num) && {
            to: prevOf(node.num)!.to,
            label: prevOf(node.num)!.label,
            eyebrow: '← Part 04',
          }
        }
        next={{ to: '/letters/romans', label: 'Begin again with Romans', eyebrow: 'Read deeper' }}
        closing="The reading has run its length. Romans is the densest single argument in the corpus; turning to it now, with the evidence sorted, is the natural next move."
      />
    </article>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Tag className="mb-2 block">{label}</Tag>
      <p className="font-text text-[16px] text-ink-2 leading-relaxed max-w-measure">{children}</p>
    </div>
  )
}
