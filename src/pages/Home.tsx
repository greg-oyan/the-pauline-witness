import { Link } from 'react-router-dom'
import { readingPath } from '../readingPath'

export default function Home() {
  return (
    <div>
      <section className="border-b border-rule">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32">
          <div className="eyebrow eyebrow-accent mb-8">
            A guided reading · five steps
          </div>
          <h1 className="display-claim text-[2.5rem] sm:text-6xl lg:text-7xl text-ink-900 max-w-cover">
            Taking the evidence seriously gives faith more to stand on, not less.
          </h1>
          <p className="mt-10 max-w-measure font-display text-xl sm:text-2xl text-ink-700 leading-snug">
            The letters attributed to Paul do not carry equal weight. Some are virtually undisputed.
            Others are widely judged later, written in his name. A faith that reads the strongest
            evidence first has a steadier place to stand than one that reads everything as if it
            were the same.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/letters"
              className="inline-flex items-baseline gap-3 px-6 py-4 bg-ink-900 text-paper rounded-sm hover:bg-ink-800 transition group"
            >
              <span className="font-mono text-[10px] text-ink-300 tracking-[0.18em]">
                BEGIN
              </span>
              <span className="font-display text-lg">Step 2 — The letters we actually have</span>
              <span className="text-paper/70 group-hover:translate-x-0.5 transition">→</span>
            </Link>
            <Link
              to="#thesis"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('thesis')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="eyebrow text-ink-500 hover:text-ink-800 transition"
            >
              First, the premise ↓
            </Link>
          </div>
        </div>
      </section>

      <section id="thesis" className="border-b border-rule bg-cream/40">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <aside className="md:col-span-3">
              <div className="eyebrow text-ink-400">Premise</div>
              <div className="font-display text-lg text-ink-700 mt-3 leading-snug">
                Why read this way?
              </div>
            </aside>
            <div className="md:col-span-9">
              <p className="font-display text-2xl sm:text-3xl text-ink-900 leading-snug max-w-measure">
                For two centuries critical scholars have argued, with care, that some letters in the
                Pauline corpus are not by Paul. Devotional readings have mostly ignored that
                argument. Skeptical readings have used it to dismantle.
              </p>
              <div className="prose-pauline dropcap mt-8">
                <p>
                  This project does neither. It takes the strongest first-hand evidence — the seven
                  undisputed letters — as the bedrock, marks every claim with an honest confidence
                  level, and shows where the seam appears between Paul and later writers shaped by
                  him. The point is not to subtract from the canon. The point is that an evidence-
                  first reading puts the central Pauline argument on firmer ground than treating
                  every text as equally direct.
                </p>
                <p>
                  Faith does not require pretending the texts are uniform. It can rest, more
                  steadily, on the texts that critical scholarship judges most likely to be Paul’s
                  own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <aside className="md:col-span-3">
            <div className="eyebrow text-ink-400">The path</div>
            <div className="font-display text-lg text-ink-700 mt-3 leading-snug">
              Five steps, in order.
            </div>
          </aside>
          <div className="md:col-span-9">
            <ol className="divide-y divide-rule">
              {readingPath.map((node) => (
                <li key={node.num} className="py-6 first:pt-0 last:pb-0">
                  <Link
                    to={node.to}
                    className="grid grid-cols-12 gap-4 items-baseline group"
                  >
                    <span className="col-span-2 sm:col-span-1 font-mono text-xs text-ink-400 group-hover:text-accent transition">
                      {String(node.num).padStart(2, '0')}
                    </span>
                    <span className="col-span-10 sm:col-span-11">
                      <span className="font-display text-2xl sm:text-3xl text-ink-900 group-hover:text-accent transition leading-snug">
                        {node.label}
                      </span>
                      <span className="block mt-1 font-display text-base text-ink-500 italic">
                        {node.question}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-cream/40">
        <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="font-display text-xl text-ink-700 max-w-measure leading-snug">
            Three disciplines run through every page.
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-ink-700 max-w-2xl">
            <Discipline label="Evidence first" body="Undisputed letters do the load-bearing work. Disputed letters are read as serious early texts in conversation with Paul." />
            <Discipline label="Confidence marked" body="Every claim carries a level: broad consensus, majority view, contested, minority view." />
            <Discipline label="No quotation" body="Chapter-and-verse references only. Read Paul in your own translation alongside this project." />
          </ul>
        </div>
      </section>
    </div>
  )
}

function Discipline({ label, body }: { label: string; body: string }) {
  return (
    <li className="border-l-2 border-ink-300 pl-4">
      <div className="eyebrow text-ink-500 mb-1">{label}</div>
      <p className="text-ink-700 leading-snug">{body}</p>
    </li>
  )
}
