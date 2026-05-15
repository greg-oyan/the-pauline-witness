import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  accent?: boolean
  className?: string
}

export default function Tag({ children, accent, className = '' }: Props) {
  return (
    <span className={`tag ${accent ? 'tag-accent' : ''} ${className}`}>{children}</span>
  )
}
