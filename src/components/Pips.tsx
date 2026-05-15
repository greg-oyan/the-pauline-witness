interface Props {
  n: number
  total?: number
  size?: 'sm' | 'md' | 'lg'
  tone?: 'ink' | 'oxblood' | 'paper'
}

const dotSize = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5',
}

const toneFill = {
  ink: 'bg-ink',
  oxblood: 'bg-oxblood',
  paper: 'bg-paper',
}

const toneEmpty = {
  ink: 'border-rule-strong',
  oxblood: 'border-rule-strong',
  paper: 'border-paper-3',
}

export default function Pips({ n, total = 4, size = 'md', tone = 'ink' }: Props) {
  const safeN = Math.max(0, Math.min(n, total))
  return (
    <span
      className="inline-flex items-center gap-1"
      aria-hidden="true"
      role="presentation"
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`${dotSize[size]} ${
            i < safeN
              ? `${toneFill[tone]} border ${toneFill[tone].replace('bg-', 'border-')}`
              : `border ${toneEmpty[tone]} bg-transparent`
          }`}
        />
      ))}
    </span>
  )
}
