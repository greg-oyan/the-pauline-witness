import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readingPath } from '../readingPath'

export default function Layout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <header className="border-b border-rule bg-paper/95 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="group">
            <div className="font-display text-xl sm:text-[1.35rem] text-ink-900 leading-none tracking-display group-hover:text-accent transition">
              The Pauline Witness
            </div>
            <div className="eyebrow mt-1.5 text-ink-400 hidden sm:block">
              An evidence-first reading
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {readingPath.map((node) => (
              <NavLink
                key={node.num}
                to={node.to}
                end={node.num === 1}
                className={({ isActive }) =>
                  `group px-3 py-2 flex items-baseline gap-1.5 text-sm transition ${
                    isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-800'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`font-mono text-[10px] ${
                        isActive ? 'text-accent' : 'text-ink-400'
                      }`}
                    >
                      {String(node.num).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display ${
                        isActive ? 'text-ink-900' : ''
                      }`}
                    >
                      {node.shortLabel}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/search"
              aria-label="Search"
              className="ml-2 p-2 text-ink-500 hover:text-ink-800 transition"
            >
              <SearchIcon />
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-ink-700"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden border-t border-rule bg-paper">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col">
              {readingPath.map((node) => (
                <NavLink
                  key={node.num}
                  to={node.to}
                  end={node.num === 1}
                  className={({ isActive }) =>
                    `py-3 flex items-baseline gap-3 border-b border-rule/60 last:border-b-0 ${
                      isActive ? 'text-ink-900' : 'text-ink-700'
                    }`
                  }
                >
                  <span className="font-mono text-[11px] text-ink-400 w-6">
                    {String(node.num).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg">{node.label}</span>
                </NavLink>
              ))}
              <Link
                to="/search"
                className="py-3 flex items-center gap-3 text-ink-500"
              >
                <SearchIcon />
                <span className="font-display text-base">Search</span>
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-rule mt-24 bg-cream/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <div className="font-display text-ink-700 text-base">
            The Pauline Witness
            <span className="text-ink-400 ml-2">— evidence, not slogans.</span>
          </div>
          <div className="flex items-center gap-5 text-xs">
            <Link to="/search" className="text-ink-500 hover:text-ink-800 transition">
              Search
            </Link>
            <span className="text-ink-400">
              No copyrighted biblical text is reproduced.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" strokeLinecap="round" />
    </svg>
  )
}
