import { romanize } from '../lib/confidence'

interface Props {
  level: number
  max?: number
  size?: number
  tone?: 'ink' | 'oxblood' | 'paper'
  label?: string
}

/**
 * Composite diagnostic ring. The Designer reference renders a percentage
 * inside the dial; we render a roman numeral (i–iv) instead, because the
 * source data is a categorical confidence level — not a measured percent —
 * and the roman keeps the editorial register.
 *
 * `label` is required for assistive tech. Pair with a visible Pips row or
 * text label nearby so the visual reads at a glance.
 */
export default function Dial({ level, max = 4, size = 96, tone = 'ink', label }: Props) {
  const safe = Math.max(0, Math.min(level, max))
  const stroke = 2
  const r = size / 2 - stroke * 2
  const c = 2 * Math.PI * r
  const filled = (safe / max) * c
  const colorStroke =
    tone === 'oxblood' ? 'var(--oxblood)' : tone === 'paper' ? 'var(--paper)' : 'var(--ink)'
  const trackStroke =
    tone === 'paper' ? 'rgba(244,239,228,0.30)' : 'rgba(27,22,18,0.18)'

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
      role="img"
      aria-label={label ?? `Level ${safe} of ${max}`}
    >
      <svg width={size} height={size} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={trackStroke}
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={colorStroke}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${filled} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display italic"
          style={{
            fontSize: size * 0.32,
            color: tone === 'paper' ? 'var(--paper)' : 'var(--ink)',
            lineHeight: 1,
          }}
        >
          {romanize(safe)}
        </span>
      </div>
    </div>
  )
}
