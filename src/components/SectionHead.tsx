import type { ReactNode } from 'react'

interface Props {
  marker?: string
  title: ReactNode
  tag?: ReactNode
  size?: 'm' | 's'
}

export default function SectionHead({ marker = '§', title, tag, size = 'm' }: Props) {
  return (
    <header className="flex flex-wrap items-end gap-x-6 gap-y-2">
      {marker && (
        <span className="font-display italic text-ink-4 text-2xl leading-none">{marker}</span>
      )}
      <h2
        className={
          size === 'm'
            ? 'font-display text-display-s sm:text-display-m text-ink leading-none flex-shrink-0'
            : 'font-display text-3xl sm:text-display-s text-ink leading-none flex-shrink-0'
        }
      >
        {title}
      </h2>
      <span className="leader hidden sm:block" aria-hidden="true" />
      {tag && <span className="tag self-end">{tag}</span>}
    </header>
  )
}
