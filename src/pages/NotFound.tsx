import { Link } from 'react-router-dom'
import Tag from '../components/Tag'

export default function NotFound() {
  return (
    <div className="max-w-cover mx-auto px-5 sm:px-10 py-32 text-center">
      <Tag accent>404 · Off the path</Tag>
      <h1 className="mt-5 display-claim text-5xl sm:text-display-s lg:text-display-m text-ink max-w-measure mx-auto">
        That page is not part of this reading.
      </h1>
      <p className="mt-7 font-text text-[16px] text-ink-2 max-w-measure mx-auto leading-relaxed">
        The path is five stations long. The corpus is fourteen entries. The teaching is three
        themes. Return to the first station, or use the side door.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Link
          to="/"
          className="px-5 py-3 bg-ink text-paper font-mono uppercase text-[11px] tracking-[0.18em] hover:bg-oxblood transition duration-150"
        >
          Start at station 01
        </Link>
        <Link
          to="/search"
          className="px-5 py-3 border border-ink font-mono uppercase text-[11px] tracking-[0.18em] text-ink hover:bg-ink hover:text-paper transition duration-150"
        >
          Search
        </Link>
      </div>
    </div>
  )
}
