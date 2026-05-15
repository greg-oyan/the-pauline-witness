import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-cover mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <div className="eyebrow eyebrow-accent mb-5">404</div>
      <h1 className="display-claim text-4xl sm:text-5xl text-ink-900 max-w-measure mx-auto">
        That page is not part of this reading.
      </h1>
      <p className="mt-6 text-ink-600 max-w-measure mx-auto leading-relaxed">
        The path is five steps long. The corpus is fourteen entries. The teaching is three themes.
        Return to the first step, or use the side door.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Link
          to="/"
          className="px-5 py-3 bg-ink-900 text-paper rounded-sm font-display hover:bg-ink-800 transition"
        >
          Start at step one
        </Link>
        <Link
          to="/search"
          className="px-5 py-3 border border-rule rounded-sm font-display text-ink-800 hover:border-ink-700 transition"
        >
          Search
        </Link>
      </div>
    </div>
  )
}
