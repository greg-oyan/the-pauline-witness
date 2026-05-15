import type { Confidence, AuthenticityMarker } from '../data/types'

export const confidenceLevel: Record<Confidence, 1 | 2 | 3 | 4> = {
  'broad-consensus': 4,
  'majority-view': 3,
  contested: 2,
  'minority-view': 1,
}

export const confidenceLabel: Record<Confidence, string> = {
  'broad-consensus': 'Broad consensus',
  'majority-view': 'Majority view',
  contested: 'Contested',
  'minority-view': 'Minority view',
}

export const confidenceShort: Record<Confidence, string> = {
  'broad-consensus': 'Strong',
  'majority-view': 'Probable',
  contested: 'Contested',
  'minority-view': 'Minority',
}

export const weightLevel: Record<AuthenticityMarker['weight'], 1 | 2 | 3> = {
  suggestive: 1,
  moderate: 2,
  strong: 3,
}

export const weightLabel: Record<AuthenticityMarker['weight'], string> = {
  suggestive: 'Suggestive',
  moderate: 'Moderate',
  strong: 'Strong',
}

const ROMAN: Record<number, string> = {
  1: 'i',
  2: 'ii',
  3: 'iii',
  4: 'iv',
  5: 'v',
  6: 'vi',
  7: 'vii',
  8: 'viii',
  9: 'ix',
  10: 'x',
}

export function romanize(n: number): string {
  return ROMAN[n] ?? String(n)
}

/**
 * Parse the editorial approxDate strings in src/data/corpus.ts to a midpoint
 * year for plotting on the chronology axis. Conservative — falls back to a
 * neutral mid-1st-century value when the date is too vague to position.
 *
 * No invention of dates beyond what the data already states.
 */
export function midYearOf(approxDate: string): number {
  const decadeMid: Record<string, number> = {
    '30s': 35,
    '40s': 45,
    '50s': 55,
    '60s': 65,
    '70s': 75,
    '80s': 85,
    '90s': 95,
    '100s': 105,
    '110s': 115,
    '120s': 125,
    '130s': 135,
  }

  // "c. 56–57 CE" or "c. 56-57 CE"
  const explicit = approxDate.match(/(\d{2,3})\s*[–-]\s*(\d{2,3})\s*CE/)
  if (explicit) {
    return (parseInt(explicit[1], 10) + parseInt(explicit[2], 10)) / 2
  }

  // "c. 60s–80s CE"
  const decadeRange = approxDate.match(/(\d{2,3}s)\s*[–-]\s*(\d{2,3}s)/)
  if (decadeRange) {
    const a = decadeMid[decadeRange[1]] ?? 60
    const b = decadeMid[decadeRange[2]] ?? 90
    return (a + b) / 2
  }

  if (/late\s*1st.*early\s*2nd\s*century/i.test(approxDate)) return 105
  if (/early\s*2nd\s*century/i.test(approxDate)) return 110
  if (/late\s*1st\s*century/i.test(approxDate)) return 95

  const decadeOnly = approxDate.match(/(\d{2,3}s)/)
  if (decadeOnly) return decadeMid[decadeOnly[1]] ?? 70

  return 70
}
