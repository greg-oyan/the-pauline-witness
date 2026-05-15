import type { EvidenceCard } from './types'

export const evidence: EvidenceCard[] = [
  {
    id: 'ev-justification-by-faith',
    title: 'Gentiles are justified apart from works of the law',
    claim:
      'In the undisputed letters Paul argues that Gentiles are reckoned righteous through Christ’s faithfulness and their own faith, without first becoming Torah-observant Judeans.',
    primaryEvidence: [
      { ref: 'Galatians 2:15–21' },
      { ref: 'Romans 3:21–31' },
      { ref: 'Romans 4:1–25', note: 'Abraham reckoned righteous before circumcision.' },
    ],
    supportingEvidence: [
      { ref: 'Philippians 3:7–11' },
      { ref: 'Galatians 3:6–14' },
    ],
    tension:
      'Paul also assumes ethical seriousness (Gal 5–6; Rom 6) and never says the law is bad in itself (Rom 7:12). The relationship between justification and ongoing transformation is real but not collapsible.',
    commonDistortion:
      '"Faith vs. works" read as Christianity (grace) vs. Judaism (legalism). Paul’s opponents were not generic moralists; they were proposing a specific Gentile-incorporation program centered on circumcision and Torah identity markers.',
    responsibleFrame:
      'Justification language is forensic and covenantal. It addresses both individual standing before God and the integration of Gentiles into Israel’s story, without flattening into a slogan.',
    confidence: 'broad-consensus',
    themeIds: ['justification', 'law-torah'],
    letterIds: ['romans', 'galatians', 'philippians'],
  },
  {
    id: 'ev-israel-not-rejected',
    title: 'Paul does not teach that God has rejected Israel',
    claim:
      'Romans 9–11 — the longest sustained argument in the corpus on Israel — explicitly denies that God has rejected his people and ends in doxological mystery.',
    primaryEvidence: [
      { ref: 'Romans 9:1–5' },
      { ref: 'Romans 11:1–2' },
      { ref: 'Romans 11:25–32' },
    ],
    supportingEvidence: [
      { ref: 'Romans 3:1–4' },
      { ref: 'Galatians 6:16', note: 'The "Israel of God" — interpretively contested, but not anti-Israel.' },
    ],
    tension:
      'Paul’s rhetoric elsewhere can sound supersessionist if quoted without context; his polemic against rival teachers is sharp. The tradition of "replacement theology" has read him this way for centuries.',
    commonDistortion:
      'Paul as the founder of an anti-Jewish religion. The text of Romans 9–11 makes that reading untenable but only if it is actually read.',
    responsibleFrame:
      'Paul argues that the inclusion of Gentiles does not displace Israel. The mystery of Israel’s ultimate place in God’s plan is held open, not solved.',
    confidence: 'broad-consensus',
    themeIds: ['justification', 'law-torah'],
    letterIds: ['romans'],
  },
  {
    id: 'ev-creation-groans',
    title: 'Redemption in Paul is cosmic and embodied',
    claim:
      'For Paul, salvation is not the escape of souls from matter but the redemption of the body and the liberation of creation itself.',
    primaryEvidence: [
      { ref: 'Romans 8:18–25' },
      { ref: '1 Corinthians 15:35–58' },
    ],
    supportingEvidence: [
      { ref: 'Philippians 3:20–21' },
      { ref: '1 Thessalonians 4:13–18' },
    ],
    tension:
      'Some Pauline passages (e.g., 2 Cor 5:1–10) discuss intermediate states ambiguously. Paul does not give a systematic eschatology.',
    commonDistortion:
      'Reducing Pauline hope to "going to heaven when you die." The plain emphasis falls on bodily resurrection and creation’s renewal.',
    responsibleFrame:
      'Hold the bodily and cosmic dimensions of redemption together. Where Paul’s timetable is ambiguous, say so rather than smoothing it.',
    confidence: 'broad-consensus',
    themeIds: ['resurrection'],
    letterIds: ['romans', '1corinthians', 'philippians', '1thessalonians'],
  },
  {
    id: 'ev-gentile-inclusion',
    title: 'Paul’s opposition to circumcision is situational, not anti-Jewish',
    claim:
      'Paul resists requiring Gentile believers to be circumcised. He does not denounce circumcision for Jews — he had Timothy circumcised (per Acts) and continues to call himself an Israelite.',
    primaryEvidence: [
      { ref: 'Galatians 5:2–6' },
      { ref: 'Galatians 6:15' },
      { ref: '1 Corinthians 7:18–19' },
    ],
    supportingEvidence: [
      { ref: 'Romans 2:25–29' },
      { ref: 'Philippians 3:4–6', note: 'Paul still names his Jewish identity in present-tense terms in places.' },
    ],
    tension:
      'Paul’s rhetoric in Galatians is hot ("I wish those who unsettle you would castrate themselves," Gal 5:12). Reading this rhetoric out of context as a settled doctrine of contempt distorts him.',
    commonDistortion:
      'Treating Paul’s Galatian polemic against forced Gentile circumcision as a global denunciation of Jewish practice.',
    responsibleFrame:
      'Paul fights for one Gospel that creates a community in which Jews and Gentiles eat together without either group being required to become the other.',
    confidence: 'broad-consensus',
    themeIds: ['justification', 'law-torah'],
    letterIds: ['galatians', 'romans', '1corinthians'],
  },
  {
    id: 'ev-grace-and-ethics',
    title: 'Pauline grace is not moral indifference',
    claim:
      'Paul anticipates the "let us sin so grace may abound" misreading and rejects it. The undisputed letters contain dense, concrete ethical instruction.',
    primaryEvidence: [
      { ref: 'Romans 6:1–4, 15' },
      { ref: 'Galatians 5:13–6:10' },
      { ref: '1 Corinthians 6:9–11' },
    ],
    supportingEvidence: [
      { ref: 'Romans 12:1–21' },
      { ref: '1 Thessalonians 4:1–12' },
    ],
    tension:
      'Some of Paul’s ethical instructions — on sex, on women’s speech in 1 Cor 14, on slavery — have been used to authorize harm. Honest engagement with Paul requires honest engagement with these texts, not their erasure.',
    commonDistortion:
      'Bumper-sticker antinomianism: "Paul taught grace, so morality is optional." Paul’s own anticipations of and rebuttals to this view are unmissable.',
    responsibleFrame:
      'Grace in Paul is liberation into a different shape of life, not exemption from any shape of life. The Spirit produces concrete, communal, embodied virtues.',
    confidence: 'broad-consensus',
    themeIds: ['justification'],
    letterIds: ['romans', 'galatians', '1corinthians'],
  },
  {
    id: 'ev-resurrection-tradition',
    title: 'Paul cites a pre-Pauline resurrection tradition',
    claim:
      '1 Corinthians 15:3–7 explicitly quotes a tradition "received" and "delivered," widely judged to date to within a few years of the crucifixion. It is the earliest written credal statement on Jesus’ death, burial, and appearances.',
    primaryEvidence: [
      { ref: '1 Corinthians 15:3–7' },
    ],
    supportingEvidence: [
      { ref: 'Galatians 1:18–19', note: 'Paul’s visit to Cephas and James, plausible occasion for transmission.' },
    ],
    tension:
      'The list of appearances does not match the Gospel narratives in detail. Critical engagement attends to those differences without collapsing them.',
    commonDistortion:
      'Treating the Gospels as the earliest evidence and Paul as later interpretation. The chronology is the reverse: Paul’s letters are earlier than the Gospels.',
    responsibleFrame:
      'This is among the strongest pieces of historical data we have about earliest Christian belief. What people did with that belief is a separate question.',
    confidence: 'broad-consensus',
    themeIds: ['resurrection'],
    letterIds: ['1corinthians'],
  },
  {
    id: 'ev-spiritual-body',
    title: 'The "spiritual body" is body animated by Spirit, not body abolished',
    claim:
      'In 1 Cor 15 Paul argues for a resurrected body that is in continuity with the present body and animated (not constituted) by the Spirit.',
    primaryEvidence: [
      { ref: '1 Corinthians 15:35–49' },
      { ref: 'Romans 8:11' },
    ],
    supportingEvidence: [
      { ref: 'Philippians 3:20–21' },
    ],
    tension:
      'What "continuity" means across the transformation is genuinely unclear. Paul gives an analogy (seed and plant), not a metaphysics.',
    commonDistortion:
      'Reading soma pneumatikon as "spirit without body" — a translation error in popular use.',
    responsibleFrame:
      'Sown in weakness, raised in power. The body is redeemed, not discarded. The mechanism is left unresolved.',
    confidence: 'broad-consensus',
    themeIds: ['resurrection'],
    letterIds: ['1corinthians', 'romans', 'philippians'],
  },
  {
    id: 'ev-body-of-christ',
    title: 'Body of Christ as a model of difference without hierarchy',
    claim:
      'In 1 Cor 12, Paul deploys the body metaphor to dignify members the Corinthian assembly judged inferior. The argument is anti-hierarchical in intent, even if its later use was not.',
    primaryEvidence: [
      { ref: '1 Corinthians 12:12–27' },
    ],
    supportingEvidence: [
      { ref: 'Romans 12:3–8' },
      { ref: 'Galatians 3:28' },
    ],
    tension:
      'Pauline egalitarian statements coexist with restrictive instructions in 1 Cor 11; 14; and (especially) in the disputed letters. Honest reading holds the tension rather than picking sides by erasure.',
    commonDistortion:
      'Reading "body of Christ" as primarily an institutional metaphor for ecclesiastical authority. Paul’s use is closer to a corrective against status competition.',
    responsibleFrame:
      'The metaphor in its native habitat is centripetal and dignifying. It is not a charter for hierarchical control.',
    confidence: 'majority-view',
    themeIds: ['justification'],
    letterIds: ['1corinthians', 'romans'],
  },
  {
    id: 'ev-ephesians-cosmic-church',
    title: 'Ephesians presents the Church as a single, cosmic body',
    claim:
      'Where the undisputed Paul speaks of "the assembly of God in Corinth" or "the assemblies of Galatia," Ephesians regularly speaks of "the Church" as a singular, universal entity filling all in all.',
    primaryEvidence: [
      { ref: 'Ephesians 1:22–23' },
      { ref: 'Ephesians 3:10' },
      { ref: 'Ephesians 5:25–27' },
    ],
    supportingEvidence: [
      { ref: '1 Corinthians 1:2', note: 'Local "ekklēsia of God in Corinth" for contrast.' },
      { ref: 'Galatians 1:2', note: '"To the ekklēsiai of Galatia" — plural.' },
    ],
    tension:
      'A minority of scholars argue the shift is contextual, not authorial. The argument is cumulative with other markers, not isolated.',
    commonDistortion:
      'Reading later, more institutional ecclesiology back into the undisputed Paul without flagging the seam.',
    responsibleFrame:
      'Whatever one decides about authorship, Ephesians and the undisputed letters have different ecclesial center-of-gravity. Note the difference rather than dissolving it.',
    confidence: 'majority-view',
    themeIds: [],
    letterIds: ['ephesians'],
  },
  {
    id: 'ev-ephesians-grace-language',
    title: 'Ephesians 2:8–9 reframes Paul’s justification language',
    claim:
      '"By grace you have been saved through faith…not from works" recasts Pauline material in a more abstract, less Torah-specific register. The "works" in question are no longer obviously "works of the law."',
    primaryEvidence: [
      { ref: 'Ephesians 2:8–10' },
    ],
    supportingEvidence: [
      { ref: 'Galatians 2:16', note: 'For comparison: Paul’s situated formulation.' },
      { ref: 'Romans 3:28', note: 'For comparison.' },
    ],
    tension:
      'Read sympathetically, Ephesians 2:8–10 is a faithful epitome of Paul. Read critically, it shows the Pauline argument flattening as it leaves its original setting.',
    commonDistortion:
      'Quoting Eph 2:8–9 as if it were Romans, then importing later Reformation categories back into the undisputed letters.',
    responsibleFrame:
      'Use Eph 2:8–10 as evidence of how Pauline material was received and abstracted in the next generation. Do not collapse it back into the undisputed argument.',
    confidence: 'majority-view',
    themeIds: ['justification'],
    letterIds: ['ephesians'],
  },
]

export const evidenceById = Object.fromEntries(evidence.map((e) => [e.id, e])) as Record<string, EvidenceCard>
