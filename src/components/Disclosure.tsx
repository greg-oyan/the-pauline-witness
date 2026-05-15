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
          <span className="font-display text-xl text-ink group-hover:text-oxblood transition duration-150 leading-tight">
            {summary}
          </span>
          {hint && <span className="tag mt-1.5 text-ink-4">{hint}</span>}
        </span>
        <span
          className="font-mono text-base text-ink-3 group-hover:text-oxblood transition duration-150 select-none"
          aria-hidden="true"
        >
          {open ? '–' : '+'}
        </span>
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  )
}
