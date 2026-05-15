export type Confidence = 'broad-consensus' | 'majority-view' | 'contested' | 'minority-view'

export interface PassageRef {
  ref: string
  note?: string
}

export interface SourceNote {
  id: string
  title: string
  body: string
  passages: PassageRef[]
  confidence: Confidence
}

export type LetterId =
  | 'romans'
  | 'galatians'
  | '1corinthians'
  | '2corinthians'
  | 'philippians'
  | '1thessalonians'
  | 'philemon'
  | 'ephesians'
  | 'colossians'
  | '2thessalonians'
  | '1timothy'
  | '2timothy'
  | 'titus'
  | 'hebrews'
  | 'acts'

export type AuthenticityStatus =
  | 'undisputed'
  | 'disputed'
  | 'pseudonymous-majority'
  | 'adjacent'

export interface CorpusEntry {
  id: LetterId
  title: string
  shortTitle: string
  status: AuthenticityStatus
  approxDate: string
  audience: string
  oneLine: string
  authenticityNote: string
  confidence: Confidence
}

export interface LetterSection {
  heading: string
  passageRange: string
  summary: string
}

export interface LetterPage {
  id: LetterId
  title: string
  occasion: string
  centralQuestion: string
  literaryShape: string
  keyPassages: PassageRef[]
  sections: LetterSection[]
  themeIds: string[]
  claimIds: string[]
  sourceIds: string[]
}

export interface ThemeAtlasEntry {
  id: string
  title: string
  subtitle: string
  paulInBrief: string
  keyClaims: string[]
  primaryPassages: PassageRef[]
  contestedTerritory: string
  commonDistortion: string
  responsibleFrame: string
  letterIds: LetterId[]
  sourceIds: string[]
}

export interface EvidenceCard {
  id: string
  title: string
  claim: string
  primaryEvidence: PassageRef[]
  supportingEvidence: PassageRef[]
  tension: string
  commonDistortion: string
  responsibleFrame: string
  confidence: Confidence
  themeIds: string[]
  letterIds: LetterId[]
}

export interface AuthenticityMarker {
  category: 'vocabulary' | 'style' | 'theology' | 'church-structure' | 'eschatology' | 'historical-setting'
  label: string
  undisputedPattern: string
  comparisonPattern: string
  weight: 'strong' | 'moderate' | 'suggestive'
}

export interface AuthenticityCase {
  id: string
  comparisonLetter: LetterId
  baseline: LetterId[]
  consensus: string
  consensusConfidence: Confidence
  markers: AuthenticityMarker[]
  counterpoint: string
  responsibleFrame: string
  sourceIds: string[]
}

export interface CaricatureModule {
  id: string
  caricature: string
  whyItPersists: string
  whatPaulActuallySays: string
  primaryEvidence: PassageRef[]
  tensionRetained: string
  responsibleFrame: string
  themeIds: string[]
}
