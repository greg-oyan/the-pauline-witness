import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  strong?: boolean
  title?: string
}

export default function CiteChip({ children, strong, title }: Props) {
  return (
    <span className={`cite-chip ${strong ? 'cite-chip-strong' : ''}`} title={title}>
      {children}
    </span>
  )
}
