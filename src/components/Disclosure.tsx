import { useState, type ReactNode } from 'react'

interface Props {
  summary: string
  hint?: string
  defaultOpen?: boolean
  children: ReactNode
}

export default function Disclosure({ summary, hint, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-rule">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full py-4 flex items-center justify-between gap-4 text-left group"
      >
        <span className="flex flex-col">
          <span className="font-display text-lg text-ink-800 group-hover:text-accent transition leading-tight">
            {summary}
          </span>
          {hint && <span className="eyebrow mt-1 text-ink-400">{hint}</span>}
        </span>
        <span
          className="font-mono text-base text-ink-500 group-hover:text-accent transition select-none"
          aria-hidden="true"
        >
          {open ? '–' : '+'}
        </span>
      </button>
      {open && <div className="pb-7">{children}</div>}
    </div>
  )
}
