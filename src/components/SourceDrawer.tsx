import { useEffect } from 'react'
import { sourcesById } from '../data/sources'
import ConfidenceBadge from './ConfidenceBadge'

interface Props {
  open: boolean
  onClose: () => void
  sourceIds: string[]
  title?: string
}

export default function SourceDrawer({ open, onClose, sourceIds, title = 'Sources & notes' }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div
        className={`fixed inset-0 bg-ink-900/40 z-40 transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-ink-50 border-l border-ink-200 z-50 shadow-xl transition-transform drawer-scroll overflow-y-auto ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="sticky top-0 bg-ink-50 border-b border-ink-200 px-5 py-3 flex items-center justify-between">
          <h2 className="font-serif text-lg text-ink-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-ink-500 hover:text-ink-800 p-1"
            aria-label="Close drawer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-4 space-y-6">
          {sourceIds.length === 0 ? (
            <p className="text-sm text-ink-500">No sources attached to this section.</p>
          ) : (
            sourceIds.map((sid) => {
              const s = sourcesById[sid]
              if (!s) return null
              return (
                <article key={sid} className="border-l-2 border-ink-200 pl-4">
                  <header className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="font-serif text-base text-ink-800">{s.title}</h3>
                    <ConfidenceBadge level={s.confidence} />
                  </header>
                  <p className="text-sm text-ink-700 leading-relaxed">{s.body}</p>
                  {s.passages.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {s.passages.map((p, i) => (
                        <li key={i} className="text-xs text-ink-600">
                          <span className="font-mono text-ink-800">{p.ref}</span>
                          {p.note && <span className="text-ink-500"> — {p.note}</span>}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            })
          )}
        </div>
      </aside>
    </>
  )
}
