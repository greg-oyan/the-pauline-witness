import { Link } from 'react-router-dom'
import { themes } from '../data/themes'

export default function Themes() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="border-b border-ink-200 pb-6 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
          Theology Atlas
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-ink-900">
          Three themes, worked out at length.
        </h1>
        <p className="mt-4 max-w-3xl text-ink-700 leading-relaxed">
          The atlas pages do not try to compress Paul into bullet points. Each entry holds together
          Paul’s argument in brief, the key passages, the contested territory in contemporary
          scholarship, the most common distortion, and the responsible reading frame.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {themes.map((t) => (
          <Link
            key={t.id}
            to={`/themes/${t.id}`}
            className="block bg-white border border-ink-200 rounded-lg p-6 hover:border-ink-400 hover:shadow-sm transition"
          >
            <h2 className="font-serif text-2xl text-ink-800">{t.title}</h2>
            <p className="text-xs uppercase tracking-wider text-ink-500 mt-1">{t.subtitle}</p>
            <p className="mt-4 text-sm text-ink-700 leading-relaxed line-clamp-5">{t.paulInBrief}</p>
            <p className="mt-5 text-xs text-accent font-medium">Read the full entry →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
