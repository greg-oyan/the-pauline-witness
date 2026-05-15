import type { Confidence } from '../data/types'

const labels: Record<Confidence, string> = {
  'broad-consensus': 'Broad consensus',
  'majority-view': 'Majority view',
  contested: 'Contested',
  'minority-view': 'Minority view',
}

const styles: Record<Confidence, string> = {
  'broad-consensus': 'bg-emerald-50 text-emerald-800 border-emerald-200',
  'majority-view': 'bg-amber-50 text-amber-800 border-amber-200',
  contested: 'bg-rose-50 text-rose-800 border-rose-200',
  'minority-view': 'bg-sky-50 text-sky-800 border-sky-200',
}

export default function ConfidenceBadge({ level }: { level: Confidence }) {
  return (
    <span
      className={`inline-flex items-center text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${styles[level]}`}
      title="Editorial confidence label"
    >
      {labels[level]}
    </span>
  )
}
