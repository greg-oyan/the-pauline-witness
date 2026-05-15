import { useEffect } from 'react'
import { sourcesById } from '../data/sources'
import ConfidenceBadge from './ConfidenceBadge'
import PassageList from './PassageList'

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

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <div
        className={`fixed inset-0 bg-ink-900/30 z-40 transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-paper border-l border-rule z-50 shadow-2xl transition-transform drawer-scroll overflow-y-auto ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="sticky top-0 bg-paper border-b border-rule px-6 py-4 flex items-center justify-between">
          <div>
            <div className="eyebrow text-ink-400">Depth on demand</div>
            <h2 className="font-display text-lg text-ink-900 leading-tight mt-1">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-ink-500 hover:text-ink-900 p-1 transition"
            aria-label="Close drawer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 space-y-8">
          {sourceIds.length === 0 ? (
            <p className="text-sm text-ink-500">No sources attached to this section.</p>
          ) : (
            sourceIds.map((sid) => {
              const s = sourcesById[sid]
              if (!s) return null
              return (
                <article key={sid}>
                  <header className="mb-3">
                    <h3 className="font-display text-lg text-ink-900 leading-snug">{s.title}</h3>
                    <div className="mt-2">
                      <ConfidenceBadge level={s.confidence} />
                    </div>
                  </header>
                  <p className="text-sm text-ink-700 leading-relaxed">{s.body}</p>
                  {s.passages.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-rule">
                      <div className="eyebrow mb-2 text-ink-400">References</div>
                      <PassageList passages={s.passages} />
                    </div>
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
