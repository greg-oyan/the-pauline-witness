import type { ThemeAtlasEntry } from './types'

export const themes: ThemeAtlasEntry[] = [
  {
    id: 'justification',
    title: 'Justification',
    subtitle: 'How a person is set right with God',
    paulInBrief:
      'Paul uses dikaioō ("to justify, to set right") as a forensic and covenantal verb: God declares right those who are aligned with Christ’s faithfulness, apart from the boundary-marking works of Torah. This is not a private transaction of feelings; it is God’s public verdict that Gentiles are now full members of God’s family without becoming Judeans.',
    keyClaims: [
      'Justification language in Paul is primarily about who belongs to God’s renewed people, not only about individual psychological assurance.',
      'It is "by faith" (or "by the faithfulness of Christ") and "apart from works of the law," but this does not mean apart from ethical seriousness.',
      'Justification does not abolish Israel; in Romans 9–11 Paul refuses that move explicitly.',
    ],
    primaryPassages: [
      { ref: 'Romans 3:21–31', note: 'Programmatic statement of righteousness apart from law.' },
      { ref: 'Romans 4:1–25', note: 'Abraham reckoned righteous before circumcision.' },
      { ref: 'Galatians 2:15–21', note: 'The pivotal Pauline summary.' },
      { ref: 'Galatians 3:6–14' },
      { ref: 'Philippians 3:7–11' },
    ],
    contestedTerritory:
      'The "New Perspective on Paul" (Sanders, Dunn, Wright) sharpened the question of whether "works of the law" is primarily about ethnic boundary markers or moral effort. A more recent consensus tends to hold both, and the grammatical ambiguity of pistis Christou (faith in / faithfulness of Christ) remains genuinely open.',
    commonDistortion:
      '"Justification by faith alone" stripped of its first-century context becomes a contrast between Christianity (grace) and Judaism (legalism). Paul does not argue against Judaism as legalism; he argues that Gentiles need not become Judeans to be in.',
    responsibleFrame:
      'Hold three things together: (1) a real forensic claim that God declares people right; (2) a covenantal claim that this verdict integrates Gentiles into Israel’s story; (3) an ethical claim that the justified are simultaneously the people in whom the Spirit produces the fruit Paul lists in Gal 5.',
    letterIds: ['romans', 'galatians', 'philippians'],
    sourceIds: [
      'src-justification-faith-language',
      'src-works-of-law',
      'src-romans-9-11',
      'src-grace-not-license',
    ],
  },
  {
    id: 'law-torah',
    title: 'Law and Torah',
    subtitle: 'Paul’s contested relationship to the law of Moses',
    paulInBrief:
      'Paul affirms the law is "holy, righteous, and good" (Rom 7:12) and refuses to let his Gentile mission be interpreted as anti-Israel. At the same time, he denies that Gentile believers must keep Torah’s identity markers — circumcision, food laws, sabbath calendar — to belong to God’s people in Christ. The law diagnoses sin; it does not deliver from it.',
    keyClaims: [
      'Paul does not abolish the law in principle; he reframes its function in the age inaugurated by Christ and the Spirit.',
      'The boundary-marker reading and the moral-effort reading of "works of the law" are not mutually exclusive — both register in Paul.',
      'The law is, in Paul’s argument, simultaneously God’s gift to Israel and powerless to give the life it points toward.',
    ],
    primaryPassages: [
      { ref: 'Romans 7:7–25' },
      { ref: 'Romans 8:1–4' },
      { ref: 'Romans 10:4', note: 'Christ as the telos (goal / end) of the law — ambiguous in Greek.' },
      { ref: 'Galatians 3:15–29' },
      { ref: 'Galatians 5:13–14' },
    ],
    contestedTerritory:
      'Whether telos in Romans 10:4 means "termination" or "goal" decisively shapes how supersessionist a reading becomes. The identity of the "I" in Romans 7 — Paul, Adam, Israel, or a rhetorical figure — is also genuinely unresolved.',
    commonDistortion:
      'Reading Paul as having "rejected the law" in favor of an inward, lawless religion of the heart. This caricature ignores Romans 9–11 and the sustained ethical exhortation of Romans 12–15 and Galatians 5–6.',
    responsibleFrame:
      'Paul’s argument is intra-Jewish, not anti-Jewish: he is fighting for how Gentiles are incorporated into Israel’s story without absorbing them into Torah-keeping Judaism. The law remains God’s, even where it cannot give life.',
    letterIds: ['romans', 'galatians'],
    sourceIds: [
      'src-works-of-law',
      'src-law-romans-7',
      'src-romans-9-11',
      'src-galatians-1-2-vs-acts',
    ],
  },
  {
    id: 'resurrection',
    title: 'Resurrection',
    subtitle: 'Bodily life on the far side of death',
    paulInBrief:
      'For Paul the resurrection of Jesus is not a metaphor for renewed meaning; it is a real, embodied, witnessed event that inaugurates a future general resurrection. The future for believers is not a disembodied immortal soul but a transformed body, in continuity with the present self yet animated by the Spirit.',
    keyClaims: [
      'The earliest tradition Paul cites (1 Cor 15:3–7) dates to within years of the crucifixion and predates the Gospels.',
      'Paul’s "spiritual body" (soma pneumatikon) is body animated by Spirit, not body without matter.',
      'Resurrection in Paul is corporate and cosmic: it is the firstfruits of a wider renewal involving all creation (Rom 8).',
    ],
    primaryPassages: [
      { ref: '1 Corinthians 15:3–8', note: 'The pre-Pauline credal tradition.' },
      { ref: '1 Corinthians 15:35–49', note: 'The "spiritual body" argument.' },
      { ref: 'Romans 8:11, 18–25' },
      { ref: 'Philippians 3:20–21' },
      { ref: '1 Thessalonians 4:13–18', note: 'The earliest written Christian eschatology.' },
    ],
    contestedTerritory:
      'Whether Paul’s eschatological timetable shifts between 1 Thessalonians (vivid imminence) and later letters is debated. Whether the soma pneumatikon implies physical continuity in any modern sense is also a serious philosophical question.',
    commonDistortion:
      'Reading Pauline resurrection as either (a) the soul going to heaven at death, or (b) a "spiritual" event in the disciples’ inner life. Both flatten Paul’s plain language about a transformed body.',
    responsibleFrame:
      'Hold continuity and discontinuity together: the body that is sown is the body that is raised, and yet "flesh and blood cannot inherit the kingdom" (1 Cor 15:50). Resurrection is the redemption of embodiment, not its replacement.',
    letterIds: ['1corinthians', 'romans', 'philippians', '1thessalonians'],
    sourceIds: ['src-1cor-15-tradition', 'src-resurrection-body'],
  },
]

export const themesById = Object.fromEntries(themes.map((t) => [t.id, t])) as Record<string, ThemeAtlasEntry>
