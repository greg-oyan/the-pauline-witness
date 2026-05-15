import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">404</p>
      <h1 className="font-serif text-4xl text-ink-900">That page is not here.</h1>
      <p className="mt-4 text-ink-600">
        The route you followed does not exist in this project. The corpus is fourteen entries; the
        atlas, three themes; the lab, one case study.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link to="/" className="px-4 py-2 bg-ink-800 text-ink-50 rounded font-medium">
          Home
        </Link>
        <Link to="/corpus" className="px-4 py-2 border border-ink-300 rounded font-medium">
          Corpus
        </Link>
      </div>
    </div>
  )
}
