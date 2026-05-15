import type { CaricatureModule } from './types'

export const caricatures: CaricatureModule[] = [
  {
    id: 'paul-invented-christianity',
    caricature:
      '"Paul invented Christianity. Jesus taught a simple ethic; Paul replaced it with a religion of cross, atonement, and grace divorced from Judaism."',
    whyItPersists:
      'There is a real historical question about how much of the later doctrinal structure of Christianity traces to Paul. Popular versions of this thesis (often citing Nietzsche or older Jesus–Paul contrast scholarship) trade on the genuine fact that Paul’s letters predate the Gospels and that his theology is distinct from anything in the Sermon on the Mount.',
    whatPaulActuallySays:
      'Paul presents himself as a transmitter of received tradition, not its inventor. He explicitly cites pre-Pauline material (1 Cor 11:23ff on the Lord’s Supper; 1 Cor 15:3–7 on the resurrection appearances) and locates himself in a chain stretching back to Cephas and the Jerusalem leadership. He never renounces his Jewish identity ("I am an Israelite, a descendant of Abraham," Rom 11:1) and insists in Romans 9–11 that God has not rejected Israel.',
    primaryEvidence: [
      { ref: '1 Corinthians 11:23–26', note: '"I received from the Lord what I also delivered to you."' },
      { ref: '1 Corinthians 15:3–7', note: 'Pre-Pauline credal formula.' },
      { ref: 'Romans 9:1–5; 11:1–2; 11:25–32', note: 'Sustained defense of Israel’s standing.' },
      { ref: 'Galatians 1:18–2:10', note: 'Paul’s relationship with the Jerusalem leadership.' },
      { ref: 'Philippians 3:4–6', note: 'Paul still describes his own Jewish identity in present-tense terms.' },
    ],
    tensionRetained:
      'It is fair to say Paul’s theology is recognizably its own. He develops a distinct account of the cross, the law, and Gentile inclusion that goes beyond anything attributed to the historical Jesus in the Synoptic tradition. The difference is real; the "invention" framing is overdrawn.',
    responsibleFrame:
      'Paul is one major shaper, alongside others, of what became Christianity. He is not its sole inventor, and he does not understand himself as founding a new religion against Judaism.',
    themeIds: ['justification', 'law-torah'],
  },
  {
    id: 'paul-taught-cheap-grace',
    caricature:
      '"Paul taught cheap grace. He told people they were saved by faith alone, so behavior does not matter."',
    whyItPersists:
      'Selective quotation of Paul’s justification language (e.g., Eph 2:8–9, or Romans 3:28 without 3:31) can produce this picture. The misreading is ancient: Paul himself anticipates it in Romans 6.',
    whatPaulActuallySays:
      'Paul’s own counter-question — "shall we sin so that grace may abound? By no means" (Rom 6:1–2) — is the most direct refutation. Galatians 5–6 spells out concrete ethical content under the banner of freedom. 1 Corinthians is structurally an extended ethical argument. The notion that Paul detaches grace from transformed life cannot survive a reading of the full letters.',
    primaryEvidence: [
      { ref: 'Romans 6:1–4, 15–23' },
      { ref: 'Galatians 5:13–6:10', note: 'Walk by the Spirit; fruit; bearing burdens; sowing and reaping.' },
      { ref: '1 Corinthians 6:9–11', note: '"And such were some of you" presupposes real moral change.' },
      { ref: 'Romans 12:1–21' },
      { ref: '1 Thessalonians 4:1–12' },
    ],
    tensionRetained:
      'Paul does insist that ethical change is the fruit of God’s grace and the Spirit, not its precondition. The relationship is real and resistant to legalistic short-circuiting. That is harder to communicate than either "earn it" or "anything goes," which is why both caricatures persist.',
    responsibleFrame:
      'For Paul, grace produces a transformed life. The transformation is genuine, communal, and embodied. Cheap-grace readings have to ignore most of every undisputed letter to stand.',
    themeIds: ['justification'],
  },
]

export const caricaturesById = Object.fromEntries(caricatures.map((c) => [c.id, c])) as Record<
  string,
  CaricatureModule
>
