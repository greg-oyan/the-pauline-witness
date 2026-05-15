import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="border-b border-ink-200 bg-gradient-to-b from-ink-100/50 to-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
            An editorial reconstruction
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink-900 leading-[1.05] max-w-3xl">
            Reconstructing Paul’s authentic teaching from the strongest textual evidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-700 leading-relaxed prose-pauline">
            The letters attributed to Paul carry uneven weight. Some are virtually undisputed; others
            are widely judged pseudonymous; a few sit on contested ground. This project works from
            the strongest first-hand evidence first, marks confidence honestly, and refuses to flatten
            the difficult passages into slogans.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/corpus"
              className="px-5 py-3 bg-ink-800 text-ink-50 rounded font-medium hover:bg-ink-900 transition"
            >
              Start with the corpus
            </Link>
            <Link
              to="/themes"
              className="px-5 py-3 bg-white border border-ink-200 text-ink-800 rounded font-medium hover:bg-ink-100 transition"
            >
              Read the theology atlas
            </Link>
            <Link
              to="/lab"
              className="px-5 py-3 bg-white border border-ink-200 text-ink-800 rounded font-medium hover:bg-ink-100 transition"
            >
              Open the authenticity lab
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xs uppercase tracking-wider text-ink-500 font-semibold">Premise 1</div>
            <h2 className="font-serif text-2xl text-ink-800 mt-2 leading-tight">
              Evidence has hierarchy
            </h2>
            <p className="mt-3 text-ink-700 leading-relaxed">
              The seven undisputed letters — Romans, 1 & 2 Corinthians, Galatians, Philippians,
              1 Thessalonians, Philemon — form the bedrock. Disputed letters such as Ephesians and
              Colossians are read as serious early Christian texts in conversation with Paul, with
              the seam visible.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-ink-500 font-semibold">Premise 2</div>
            <h2 className="font-serif text-2xl text-ink-800 mt-2 leading-tight">
              Confidence is marked
            </h2>
            <p className="mt-3 text-ink-700 leading-relaxed">
              Every claim carries a label: broad consensus, majority view, contested, minority view.
              Where critical scholarship is genuinely divided — pistis Christou, the "I" of
              Romans 7, the Pauline timetable — the divide is named, not papered over.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-ink-500 font-semibold">Premise 3</div>
            <h2 className="font-serif text-2xl text-ink-800 mt-2 leading-tight">
              No quotation, only reference
            </h2>
            <p className="mt-3 text-ink-700 leading-relaxed">
              To stay clear of copyrighted translations, this site does not reproduce biblical text.
              Citations point to standard chapter and verse. Read Paul alongside this project, not
              through it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-100/40 border-y border-ink-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-3xl text-ink-800 max-w-2xl">What you can do here</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card to="/corpus" title="Corpus Map" body="Tour the fourteen New Testament writings attributed to Paul. See which are undisputed, disputed, pseudonymous, and adjacent." />
            <Card to="/letters/romans" title="Letter pages" body="Romans, Galatians, 1 Corinthians, and Ephesians, each read on its own terms — occasion, central question, literary shape, and key passages." />
            <Card to="/themes" title="Theology Atlas" body="Three core themes worked out at length: justification, law/Torah, and resurrection." />
            <Card to="/lab" title="Authenticity Lab" body="A side-by-side comparison of Ephesians against the undisputed letters across vocabulary, style, theology, and structure." />
            <Card to="/caricatures" title="Paul vs. Caricature" body="Two persistent misreadings — Paul as inventor of Christianity, Paul as teacher of cheap grace — tested against the text." />
            <Card to="/search" title="Search & filter" body="Search across letters, themes, evidence cards, and source notes. Filter by confidence level and corpus status." />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl text-ink-800">A note on tone</h2>
        <div className="mt-4 prose-pauline">
          <p>
            The Pauline Witness is editorial, not devotional. Paul is treated as a difficult,
            historically situated first-century writer whose letters reward sustained attention.
            Where his arguments unsettle modern sensibilities — on sex, on slavery, on the law —
            the project does not erase the difficulty.
          </p>
          <p>
            And where contemporary readings flatten Paul into a slogan, in either direction, the
            project tries to put the texture back. The goal is not agreement; it is an honest
            reading.
          </p>
        </div>
      </section>
    </div>
  )
}

function Card({ to, title, body }: { to: string; title: string; body: string }) {
  return (
    <Link
      to={to}
      className="block bg-white border border-ink-200 rounded-lg p-5 hover:border-ink-400 hover:shadow-sm transition"
    >
      <h3 className="font-serif text-lg text-ink-800">{title}</h3>
      <p className="mt-2 text-sm text-ink-600 leading-relaxed">{body}</p>
    </Link>
  )
}
