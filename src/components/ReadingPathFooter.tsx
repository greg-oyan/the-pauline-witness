import { Link } from 'react-router-dom'

export interface PathStep {
  to: string
  label: string
  eyebrow?: string
}

interface Props {
  prev?: PathStep
  next?: PathStep
  stepNum?: number
  totalSteps?: number
  closing?: string
}

export default function ReadingPathFooter({ prev, next, stepNum, totalSteps, closing }: Props) {
  return (
    <nav
      aria-label="Reading path navigation"
      className="mt-24 pt-12 border-t border-rule"
    >
      <div className="max-w-cover mx-auto px-4 sm:px-6">
        {stepNum && totalSteps && (
          <div className="eyebrow text-center mb-8 text-ink-400">
            Step {stepNum} of {totalSteps}
          </div>
        )}
        {closing && (
          <p className="font-display text-xl sm:text-2xl text-ink-800 text-center max-w-measure mx-auto mb-10 leading-snug">
            {closing}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prev ? (
            <Link
              to={prev.to}
              className="group block p-5 border border-rule rounded-sm hover:border-ink-700 transition bg-cream/60"
            >
              <div className="eyebrow mb-1.5">{prev.eyebrow ?? '← Previous'}</div>
              <div className="font-display text-xl text-ink-800 group-hover:text-accent transition leading-snug">
                {prev.label}
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
          {next ? (
            <Link
              to={next.to}
              className="group block p-5 sm:p-6 border border-ink-800 bg-ink-800 text-paper rounded-sm hover:bg-ink-900 transition sm:text-right"
            >
              <div className="eyebrow text-ink-300 mb-1.5">{next.eyebrow ?? 'Continue →'}</div>
              <div className="font-display text-xl sm:text-2xl leading-snug">
                {next.label}
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </div>
    </nav>
  )
}
