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
      className="mt-24 pt-14 border-t border-rule"
    >
      <div className="max-w-cover mx-auto px-5 sm:px-10">
        {stepNum && totalSteps && (
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="tag text-ink-4">
              Station {String(stepNum).padStart(2, '0')} of {String(totalSteps).padStart(2, '0')}
            </span>
            <ProgressTicks current={stepNum} total={totalSteps} />
          </div>
        )}
        {closing && (
          <p className="font-display text-2xl sm:text-3xl text-ink text-center max-w-measure mx-auto mb-12 leading-snug">
            {closing}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule">
          {prev ? (
            <Link
              to={prev.to}
              className="group block p-6 sm:p-7 bg-vellum hover:bg-paper-2 transition duration-150"
            >
              <div className="tag mb-2 text-ink-4">{prev.eyebrow ?? '← Previous'}</div>
              <div className="font-display text-2xl text-ink group-hover:text-oxblood transition duration-150 leading-snug">
                {prev.label}
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block bg-vellum" />
          )}
          {next ? (
            <Link
              to={next.to}
              className="group block p-6 sm:p-8 bg-ink text-paper hover:bg-ink-2 transition duration-150 sm:text-right"
            >
              <div className="tag mb-2 text-paper-3">{next.eyebrow ?? 'Continue →'}</div>
              <div className="font-display text-2xl sm:text-3xl text-paper leading-snug">
                {next.label}
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block bg-vellum" />
          )}
        </div>
      </div>
    </nav>
  )
}

function ProgressTicks({ current, total }: { current: number; total: number }) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => {
        const at = i + 1
        if (at === current) {
          return (
            <span
              key={i}
              className="w-2 h-2 bg-oxblood"
              style={{ borderRadius: 0 }}
            />
          )
        }
        return <span key={i} className="w-2 h-px bg-ink-4" />
      })}
    </span>
  )
}
