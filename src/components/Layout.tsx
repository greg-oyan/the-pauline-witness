import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/corpus', label: 'Corpus' },
  { to: '/themes', label: 'Theology Atlas' },
  { to: '/lab', label: 'Authenticity Lab' },
  { to: '/caricatures', label: 'Paul vs. Caricature' },
  { to: '/search', label: 'Search' },
]

export default function Layout() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-ink-50">
      <header className="border-b border-ink-200 bg-ink-50/95 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-serif text-xl sm:text-2xl text-ink-800 group-hover:text-accent transition">
              The Pauline Witness
            </span>
            <span className="hidden sm:inline text-xs uppercase tracking-widest text-ink-400">
              evidence · not slogans
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-ink-700"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded text-sm font-medium transition ${
                    isActive
                      ? 'bg-ink-800 text-ink-50'
                      : 'text-ink-700 hover:bg-ink-100 hover:text-ink-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        {mobileOpen && (
          <nav className="md:hidden border-t border-ink-200 bg-ink-50">
            <div className="px-4 py-2 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded text-sm font-medium transition ${
                      isActive ? 'bg-ink-800 text-ink-50' : 'text-ink-700 hover:bg-ink-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-ink-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-ink-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <span className="font-serif text-ink-700">The Pauline Witness</span> · An editorial reconstruction.
          </div>
          <div className="text-xs">
            No copyrighted biblical text is quoted. References point to standard public-domain chapter and verse.
          </div>
        </div>
      </footer>
    </div>
  )
}
