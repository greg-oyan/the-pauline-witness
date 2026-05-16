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

  const onHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col tw-paper">
      <header className="border-b border-rule bg-paper/95 backdrop-blur sticky top-0 z-30">
        <div className="max-w-cover mx-auto px-5 sm:px-10 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="group flex items-baseline gap-3 flex-shrink-0">
            <span className="font-display text-[22px] text-ink leading-none group-hover:text-oxblood transition duration-150">
              The Pauline Witness
            </span>
          </Link>

          <nav
            aria-label="Reading path"
            className="hidden lg:flex items-center gap-7"
          >
            {readingPath.map((node) => (
              <NavLink
                key={node.num}
                to={node.to}
                end={node.num === 1}
                aria-current={undefined}
                className={({ isActive }) =>
                  `relative tag transition duration-150 ${
                    isActive
                      ? 'text-ink'
                      : 'text-ink-3 hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="mr-1.5 text-ink-4">
                      {String(node.num).padStart(2, '0')}
                    </span>
                    <span>{node.shortLabel}</span>
                    {isActive && (
                      <span
                        className="absolute -bottom-1.5 left-0 right-0 h-px bg-ink"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/search"
              aria-label="Search"
              className="ml-1 text-ink-3 hover:text-ink transition duration-150"
            >
              <SearchIcon />
            </Link>
            {onHome && (
              <Link
                to="/letters"
                className="px-4 py-2 ml-2 border border-ink text-ink font-mono uppercase text-[11px] tracking-[0.12em] hover:bg-ink hover:text-paper transition duration-150"
              >
                Begin
              </Link>
            )}
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav
            aria-label="Reading path"
            className="lg:hidden border-t border-rule bg-paper"
          >
            <div className="max-w-cover mx-auto px-5 py-2 flex flex-col">
              {readingPath.map((node) => (
                <NavLink
                  key={node.num}
                  to={node.to}
                  end={node.num === 1}
                  className={({ isActive }) =>
                    `py-3.5 flex items-baseline gap-4 border-b border-rule/60 last:border-b-0 ${
                      isActive ? 'text-ink' : 'text-ink-2'
                    }`
                  }
                >
                  <span className="font-mono text-[11px] tracking-[0.12em] text-ink-4 w-6">
                    {String(node.num).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg">{node.label}</span>
                </NavLink>
              ))}
              <Link
                to="/search"
                className="py-3.5 flex items-center gap-3 text-ink-3"
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

      <footer className="border-t border-ink mt-24 bg-paper-2">
        <div className="max-w-cover mx-auto px-5 sm:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <section>
            <div className="tag mb-3">Colophon</div>
            <p className="font-display text-2xl text-ink leading-tight">
              The Pauline Witness
            </p>
            <p className="mt-4 font-text text-[14px] text-ink-2 leading-relaxed max-w-prose">
              An evidence-first reading. Built from the seven undisputed letters
              outward, with confidence marked on every claim and no copyrighted
              biblical text reproduced.
            </p>
          </section>

          <section>
            <div className="tag mb-3">Path</div>
            <ul className="space-y-2">
              {readingPath.map((node) => (
                <li key={node.num} className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-ink-4">
                    {String(node.num).padStart(2, '0')}
                  </span>
                  <Link
                    to={node.to}
                    className="font-display text-base text-ink-2 hover:text-oxblood transition duration-150"
                  >
                    {node.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="tag mb-3">Side door</div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/search"
                  className="font-display text-base text-ink-2 hover:text-oxblood transition duration-150"
                >
                  Search letters, teaching, evidence cards
                </Link>
              </li>
              <li className="font-text text-[13px] text-ink-3 leading-snug">
                Chapter-and-verse references only. Read Paul in your own
                translation alongside this project.
              </li>
            </ul>
          </section>
        </div>

        <div className="border-t border-rule">
          <div className="max-w-cover mx-auto px-5 sm:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3">
            <span className="tag text-ink-4">v 0.3.0 · evidence, not slogans</span>
            <span className="tag text-ink-4">
              Set in Cormorant Garamond &amp; Spectral
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" strokeLinecap="round" />
    </svg>
  )
}
