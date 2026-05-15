import type { AuthenticityCase } from './types'

export const authenticityCases: AuthenticityCase[] = [
  {
    id: 'ephesians-vs-undisputed',
    comparisonLetter: 'ephesians',
    baseline: ['romans', 'galatians', '1corinthians', '2corinthians', 'philippians', '1thessalonians', 'philemon'],
    consensus:
      'A clear majority of critical New Testament scholars judge Ephesians pseudonymous, written by a follower of Paul. The case rests on cumulative stylistic, vocabulary, theological, and literary-dependence markers. A respected minority continues to defend authenticity.',
    consensusConfidence: 'majority-view',
    markers: [
      {
        category: 'style',
        label: 'Sentence length',
        undisputedPattern:
          'The undisputed letters use short-to-moderate sentences in argumentative passages, with breaks for diatribe and direct address.',
        comparisonPattern:
          'Ephesians 1:3–14 is a single sentence in Greek (around 200 words). Sentence length and elevated, liturgical register exceed the undisputed norm.',
        weight: 'strong',
      },
      {
        category: 'vocabulary',
        label: 'Hapax legomena and rare diction',
        undisputedPattern:
          'Each undisputed letter has hapaxes; the rate sits within a recognizable Pauline band.',
        comparisonPattern:
          'Ephesians contains a high proportion of words found nowhere else in the Pauline corpus, several characteristic of later Christian usage.',
        weight: 'moderate',
      },
      {
        category: 'theology',
        label: 'Ecclesiology',
        undisputedPattern:
          'Undisputed Paul uses ekklēsia primarily for a specific local assembly (e.g., 1 Cor 1:2; Gal 1:2).',
        comparisonPattern:
          'Ephesians regularly uses "the Church" in a singular, universal, cosmic sense (Eph 1:22–23; 3:10; 5:25–27).',
        weight: 'strong',
      },
      {
        category: 'theology',
        label: 'Eschatological tense',
        undisputedPattern:
          'Believers are saved-in-hope; resurrection life is decisively future, even where the Spirit gives present participation (Rom 6:5; 8:23).',
        comparisonPattern:
          'Ephesians can speak of believers as already "raised up with him and seated with him in the heavenly places" (Eph 2:6) in a way the undisputed letters tend to avoid.',
        weight: 'moderate',
      },
      {
        category: 'church-structure',
        label: 'Settled offices and stewardship',
        undisputedPattern:
          'Charismatic gifts in service of a local body; Paul’s leadership is personal and contested.',
        comparisonPattern:
          'Ephesians 4:11 lists "apostles, prophets, evangelists, shepherds and teachers" as constituents of a stable, gifted ministry to "the Church."',
        weight: 'suggestive',
      },
      {
        category: 'historical-setting',
        label: 'Lack of situational specificity',
        undisputedPattern:
          'The undisputed letters are saturated with names, conflicts, travel plans, and concrete pastoral situations.',
        comparisonPattern:
          'Ephesians has almost no situational detail; the earliest manuscripts omit "in Ephesus" in 1:1, suggesting a circular letter or general address.',
        weight: 'moderate',
      },
      {
        category: 'style',
        label: 'Literary dependence on Colossians',
        undisputedPattern:
          'Pauline letters share themes; verbatim long-form dependence between two letters is unusual.',
        comparisonPattern:
          'Roughly one-third of Ephesians has close verbal parallels with Colossians (e.g., the household codes). This is suggestive of literary use by an admiring follower.',
        weight: 'strong',
      },
    ],
    counterpoint:
      'Defenders of authenticity argue: (1) Paul writes flexibly to different audiences and moods, (2) a circular letter could plausibly differ in style, (3) shared themes with Colossians cut both ways if Colossians is also authentic, (4) cumulative arguments have a built-in confirmation bias. These points deserve a fair hearing.',
    responsibleFrame:
      'The honest position is: majority critical view treats Ephesians as pseudonymous; the markers are cumulative and not individually decisive. Read Ephesians as a serious early Christian text in conversation with Paul, whether by Paul’s hand or one shaped by him.',
    sourceIds: ['src-ephesians-style', 'src-ephesians-cosmic'],
  },
]

export const authenticityById = Object.fromEntries(
  authenticityCases.map((a) => [a.id, a]),
) as Record<string, AuthenticityCase>
