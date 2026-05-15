import type { SourceNote } from './types'

export const sources: SourceNote[] = [
  {
    id: 'src-justification-faith-language',
    title: 'Pistis Christou and the "faith of/in Christ"',
    body:
      'Greek pistis Iēsou Christou (e.g., Gal 2:16; Rom 3:22) is grammatically ambiguous: subjective genitive ("the faithfulness of Christ") or objective genitive ("faith in Christ"). Critical scholarship is genuinely divided; many letter pages can read coherently under either, with different theological accents.',
    passages: [
      { ref: 'Galatians 2:16' },
      { ref: 'Galatians 3:22' },
      { ref: 'Romans 3:22' },
      { ref: 'Philippians 3:9' },
    ],
    confidence: 'contested',
  },
  {
    id: 'src-works-of-law',
    title: '"Works of the law" in Paul',
    body:
      'A central debate: does Paul’s erga nomou denote (a) the entire moral demand of Torah, (b) specifically the boundary markers (circumcision, food laws, calendar) separating Jew and Gentile, or (c) both? The "New Perspective on Paul" emphasized (b); a more nuanced consensus now allows (c).',
    passages: [
      { ref: 'Galatians 2:16' },
      { ref: 'Galatians 3:10–14' },
      { ref: 'Romans 3:20, 28' },
      { ref: '1QS / 4QMMT (Dead Sea Scrolls)', note: 'Comparative Second Temple usage; not Pauline.' },
    ],
    confidence: 'contested',
  },
  {
    id: 'src-romans-9-11',
    title: 'Israel in Romans 9–11',
    body:
      'Paul’s extended argument that God has not rejected Israel is decisive evidence against any reading in which Paul "invents" a religion that replaces Judaism. The end of Romans 11 holds in tension Israel’s present unbelief and ultimate inclusion.',
    passages: [
      { ref: 'Romans 9:1–5' },
      { ref: 'Romans 11:1–2' },
      { ref: 'Romans 11:25–32' },
    ],
    confidence: 'broad-consensus',
  },
  {
    id: 'src-1cor-15-tradition',
    title: 'The pre-Pauline resurrection tradition (1 Cor 15:3–7)',
    body:
      'Paul explicitly cites a tradition he "received" and "delivered." Critical scholarship widely dates the underlying formula to within a few years of the crucifixion. It is the earliest credal statement we possess and predates the Gospels.',
    passages: [
      { ref: '1 Corinthians 15:3–7' },
      { ref: 'Galatians 1:18–19', note: 'Paul’s visit to Cephas/James, plausible setting for receiving the tradition.' },
    ],
    confidence: 'broad-consensus',
  },
  {
    id: 'src-ephesians-style',
    title: 'Stylistic markers in Ephesians',
    body:
      'Ephesians contains the longest sentences in the Pauline corpus (e.g., Eph 1:3–14 is a single Greek sentence). Vocabulary unique within the corpus and dependence on Colossians (around one-third of Ephesians has close parallels in Colossians) drive the majority pseudonymity verdict.',
    passages: [
      { ref: 'Ephesians 1:3–14', note: 'Single Greek sentence in the original.' },
      { ref: 'Ephesians 5:21–33', note: 'Compare Colossians 3:18–19.' },
    ],
    confidence: 'majority-view',
  },
  {
    id: 'src-pastoral-vocabulary',
    title: 'Vocabulary divergence in the Pastoral Epistles',
    body:
      'Roughly one-third of the vocabulary of 1–2 Timothy and Titus does not appear elsewhere in the Pauline corpus. Concerns about church office (episkopos, presbyteros) and "sound teaching" reflect a later, settled situation.',
    passages: [
      { ref: '1 Timothy 3:1–13' },
      { ref: 'Titus 1:5–9' },
      { ref: '2 Timothy 1:13–14' },
    ],
    confidence: 'broad-consensus',
  },
  {
    id: 'src-galatians-1-2-vs-acts',
    title: 'Galatians 1–2 vs. Acts',
    body:
      'Paul’s own account of his post-conversion movements (Gal 1:15–2:14) sits in some tension with Acts 9, 11, and 15. Most critical scholars treat the letters as primary first-hand evidence, with Acts as a secondary, later, theologically shaped narrative.',
    passages: [
      { ref: 'Galatians 1:15–2:14' },
      { ref: 'Acts 9:19–30; 11:25–30; 15:1–35' },
    ],
    confidence: 'broad-consensus',
  },
  {
    id: 'src-resurrection-body',
    title: 'Soma pneumatikon — the "spiritual body"',
    body:
      'In 1 Cor 15:42–49 Paul distinguishes the present "soulish" body from a future "spiritual body." This is neither pure immaterialism nor crude resuscitation: continuity with the embodied person, transformed by the Spirit. Disembodied-soul readings flatten Paul’s argument.',
    passages: [
      { ref: '1 Corinthians 15:35–49' },
      { ref: 'Philippians 3:20–21' },
      { ref: 'Romans 8:11, 23' },
    ],
    confidence: 'broad-consensus',
  },
  {
    id: 'src-law-romans-7',
    title: 'The "I" of Romans 7',
    body:
      'Romans 7:7–25 has been read as Paul’s autobiography, as Adam, as Israel under Torah, or as a rhetorical "I" voicing the human-under-law condition. The autobiographical reading dominated older interpretation; today most critical scholars favor a representative or rhetorical reading.',
    passages: [
      { ref: 'Romans 7:7–25' },
      { ref: 'Romans 8:1–4', note: 'Read as the resolution of the dilemma posed in chapter 7.' },
    ],
    confidence: 'contested',
  },
  {
    id: 'src-philemon-slavery',
    title: 'Philemon and the slavery question',
    body:
      'Paul does not demand manumission outright. He reframes Onesimus as "no longer as a slave but more than a slave, a beloved brother" and asks Philemon to receive him "as you would receive me." The rhetorical pressure is real; the failure to make the abolitionist case explicit is also real.',
    passages: [
      { ref: 'Philemon 8–21' },
      { ref: 'Galatians 3:28' },
      { ref: '1 Corinthians 7:21–24', note: 'Notoriously ambiguous in the Greek.' },
    ],
    confidence: 'contested',
  },
  {
    id: 'src-cephas-incident',
    title: 'The Antioch incident (Gal 2:11–14)',
    body:
      'Paul’s public confrontation with Cephas (Peter) over table fellowship with Gentiles is a primary datum for Paul’s independence from the Jerusalem leadership and the high stakes of the Gentile question.',
    passages: [{ ref: 'Galatians 2:11–14' }],
    confidence: 'broad-consensus',
  },
  {
    id: 'src-1cor-women',
    title: '1 Corinthians on women in worship',
    body:
      '1 Cor 11:2–16 assumes women prophesy and pray in the assembly. 1 Cor 14:34–35 forbids women to speak; many critical scholars argue these verses are a later interpolation, others a contextual instruction. The two passages sit in clear tension as they stand.',
    passages: [
      { ref: '1 Corinthians 11:2–16' },
      { ref: '1 Corinthians 14:34–35' },
    ],
    confidence: 'contested',
  },
  {
    id: 'src-ephesians-cosmic',
    title: 'Cosmic ecclesiology in Ephesians',
    body:
      'Ephesians presents "the Church" (singular, universal) as Christ’s body filling all in all (Eph 1:22–23). The undisputed letters typically use ekklēsia for a specific local assembly. The shift is a key theological marker in authorship debates.',
    passages: [
      { ref: 'Ephesians 1:22–23' },
      { ref: 'Ephesians 3:10' },
      { ref: '1 Corinthians 1:2', note: 'Local "ekklēsia of God in Corinth" for comparison.' },
    ],
    confidence: 'majority-view',
  },
  {
    id: 'src-romans-1-18-32',
    title: 'Romans 1:18–32 as setup, not Paul’s settled view',
    body:
      'Paul’s scathing description of pagan idolatry and vice in Romans 1 is widely read as a rhetorical setup that the "Therefore you have no excuse" of Romans 2:1 immediately turns back on the moralistic reader. Treating 1:18–32 as Paul’s freestanding ethical program ignores its rhetorical function.',
    passages: [
      { ref: 'Romans 1:18–32' },
      { ref: 'Romans 2:1–11' },
    ],
    confidence: 'majority-view',
  },
  {
    id: 'src-grace-not-license',
    title: 'Grace and ethical seriousness',
    body:
      'Paul repeatedly anticipates the "cheap grace" misreading and rejects it: "Shall we sin so that grace may abound? By no means." His ethical exhortations are sustained and concrete, especially in Galatians 5–6 and Romans 12–15.',
    passages: [
      { ref: 'Romans 6:1–4, 15' },
      { ref: 'Galatians 5:13–6:10' },
      { ref: '1 Corinthians 6:9–11' },
    ],
    confidence: 'broad-consensus',
  },
]

export const sourcesById = Object.fromEntries(sources.map((s) => [s.id, s])) as Record<string, SourceNote>
