import type { LetterPage } from './types'

export const letters: LetterPage[] = [
  {
    id: 'romans',
    title: 'Romans',
    occasion:
      'Written to a community Paul did not found, on the eve of a delicate journey to Jerusalem with the collection for the poor. Paul is preparing the Roman assemblies for his planned mission to Spain and pre-empting hostile readings of his Gospel.',
    centralQuestion:
      'How can God be just in declaring Gentiles righteous through Christ without abandoning Israel?',
    literaryShape:
      'A long, argued exposition (1:16–11:36) followed by sustained ethical exhortation (12:1–15:13) and personal matters (15:14–16:27). The argumentative density of Romans is unmatched in the corpus.',
    keyPassages: [
      { ref: 'Romans 1:16–17', note: 'Thesis statement: the righteousness of God revealed by faith.' },
      { ref: 'Romans 3:21–26', note: 'The hinge: righteousness apart from law, witnessed by law and prophets.' },
      { ref: 'Romans 5:1–11', note: 'Peace with God; suffering, endurance, hope.' },
      { ref: 'Romans 6:1–11', note: 'Baptismal participation in Christ’s death and life.' },
      { ref: 'Romans 8:1–39', note: 'Life in the Spirit; cosmic redemption; nothing separates.' },
      { ref: 'Romans 9:1–11:36', note: 'Israel’s standing — the section often ignored in popular readings.' },
      { ref: 'Romans 12:1–2', note: 'Worship as embodied, renewed-mind ethics.' },
    ],
    sections: [
      {
        heading: 'The problem set up (1:18–3:20)',
        passageRange: '1:18–3:20',
        summary:
          'Universal accountability: Gentile idolatry and Jewish presumption both fall under God’s judgment. The point is not to denounce pagans but to make the floor level before raising the roof.',
      },
      {
        heading: 'The righteousness of God revealed (3:21–4:25)',
        passageRange: '3:21–4:25',
        summary:
          'A righteousness from God, "apart from law" yet "witnessed by the law and the prophets," accessed by faith and exemplified in Abraham — counted righteous before circumcision, which makes him a forefather of believing Gentiles, not only Jews.',
      },
      {
        heading: 'Peace, participation, freedom (5–8)',
        passageRange: '5:1–8:39',
        summary:
          'Adam and Christ; baptism into Christ’s death; bondage to sin and the law’s diagnostic role; life in the Spirit; the groaning of creation; the unbreakability of God’s love.',
      },
      {
        heading: 'Israel, mercy, the wider plan (9–11)',
        passageRange: '9:1–11:36',
        summary:
          'Paul’s most agonized writing. God’s word has not failed; Israel’s present unbelief is not the last word; "all Israel will be saved." Any reading that drops chapters 9–11 misreads Romans.',
      },
      {
        heading: 'Embodied ethics, weak and strong (12–15)',
        passageRange: '12:1–15:13',
        summary:
          'Renewed minds, gifts in the body, love as the fulfillment of law, civil authorities, eating practices, the welcome of the weak. Concrete, communal, and grounded in the Christ-pattern.',
      },
      {
        heading: 'Travel plans and greetings (15:14–16:27)',
        passageRange: '15:14–16:27',
        summary:
          'The collection for Jerusalem, the Spanish mission, and an unusually long greeting list including Phoebe (deacon and benefactor) and Junia (apostle).',
      },
    ],
    themeIds: ['justification', 'law-torah', 'resurrection'],
    claimIds: ['ev-justification-by-faith', 'ev-israel-not-rejected', 'ev-creation-groans'],
    sourceIds: ['src-romans-9-11', 'src-law-romans-7', 'src-romans-1-18-32', 'src-grace-not-license'],
  },
  {
    id: 'galatians',
    title: 'Galatians',
    occasion:
      'Written in alarm. Rival teachers have arrived in the Galatian assemblies pressing Gentile believers to be circumcised and adopt Torah observance as the entry condition into God’s people. Paul reads this as a different Gospel and writes without his usual thanksgiving.',
    centralQuestion:
      'Must Gentiles become Torah-observant Judeans to belong to Christ?',
    literaryShape:
      'Polemical autobiography (1–2), scriptural argument from Abraham (3–4), ethical implication of freedom (5–6). The structure is unusually tight and combative.',
    keyPassages: [
      { ref: 'Galatians 1:6–9', note: 'The other gospel is no gospel; anathema against any who preach it.' },
      { ref: 'Galatians 2:11–14', note: 'The Antioch incident with Cephas.' },
      { ref: 'Galatians 2:15–21', note: 'Justified not by works of law but by faith of/in Christ.' },
      { ref: 'Galatians 3:6–14', note: 'Abraham and the inclusion of the Gentiles.' },
      { ref: 'Galatians 3:28', note: 'No Jew nor Greek, slave nor free, male and female.' },
      { ref: 'Galatians 5:1, 13–25', note: 'Freedom for, not freedom from; fruit of the Spirit.' },
    ],
    sections: [
      {
        heading: 'The Gospel Paul received (1:1–2:14)',
        passageRange: '1:1–2:14',
        summary:
          'Paul’s independence from Jerusalem credentials, the conference at Jerusalem, and the public clash with Cephas over table fellowship. Paul is establishing both his authority and the single, non-negotiable Gospel.',
      },
      {
        heading: 'Justified by faith, not works of law (2:15–3:29)',
        passageRange: '2:15–3:29',
        summary:
          'Paul’s programmatic argument from Abraham: those of faith are Abraham’s children; the law cannot give life; Christ has redeemed the curse so the Spirit may come on the Gentiles.',
      },
      {
        heading: 'No longer slaves but children (4:1–5:1)',
        passageRange: '4:1–5:1',
        summary:
          'Sons by adoption; an allegory of Sarah and Hagar that has been used badly in the history of interpretation; the call to stand firm in freedom.',
      },
      {
        heading: 'Walk by the Spirit (5:2–6:18)',
        passageRange: '5:2–6:18',
        summary:
          'Sustained ethical instruction that explicitly answers the "cheap grace" worry: freedom is for love and Spirit-shaped life, not the gratification of the flesh.',
      },
    ],
    themeIds: ['justification', 'law-torah'],
    claimIds: ['ev-justification-by-faith', 'ev-gentile-inclusion', 'ev-grace-and-ethics'],
    sourceIds: [
      'src-works-of-law',
      'src-justification-faith-language',
      'src-cephas-incident',
      'src-grace-not-license',
    ],
  },
  {
    id: '1corinthians',
    title: '1 Corinthians',
    occasion:
      'Paul writes to an assembly he founded, now fractured into status-conscious factions, with reports of sexual practice he considers grievous, disputes over food sacrificed to idols, disorderly worship, and confusion about resurrection. He has reports from "Chloe’s people" and a letter from the Corinthians themselves.',
    centralQuestion:
      'What does the cross of Christ do to a community organized around status, wisdom, and rights?',
    literaryShape:
      'Issue-by-issue pastoral theology. Paul moves through factionalism (1–4), specific moral cases (5–7), worship and assembly (8–14), and concludes with the longest sustained Pauline argument about resurrection (15).',
    keyPassages: [
      { ref: '1 Corinthians 1:18–31', note: 'The word of the cross, shameful to status, is God’s power.' },
      { ref: '1 Corinthians 11:23–26', note: 'The earliest written form of the Lord’s Supper tradition.' },
      { ref: '1 Corinthians 12:12–27', note: 'Body of Christ as the model for difference-without-hierarchy.' },
      { ref: '1 Corinthians 13:1–13', note: 'Love.' },
      { ref: '1 Corinthians 15:3–8', note: 'Earliest credal tradition on Christ’s death and appearances.' },
      { ref: '1 Corinthians 15:42–49', note: 'Sown in weakness, raised in power; the spiritual body.' },
    ],
    sections: [
      {
        heading: 'Cross-shaped community (1:1–4:21)',
        passageRange: '1:1–4:21',
        summary:
          'Paul confronts the Corinthian status game: rival apostolic followings, boasting in eloquence and wisdom. The cross subverts ancient rhetorics of strength.',
      },
      {
        heading: 'Bodies, marriage, freedom (5:1–7:40)',
        passageRange: '5:1–7:40',
        summary:
          'A particular case of sexual sin, lawsuits among believers, and an unusually nuanced section on marriage, singleness, and present circumstances. Tensions on slavery in 7:21–24.',
      },
      {
        heading: 'Idol food and the conscience of the other (8:1–11:1)',
        passageRange: '8:1–11:1',
        summary:
          'Knowledge versus love; Paul’s renunciation of his rights as model. A practical theology of mutual obligation across difference.',
      },
      {
        heading: 'Worship and the body (11:2–14:40)',
        passageRange: '11:2–14:40',
        summary:
          'Head coverings, the Lord’s Supper, spiritual gifts, the unifying argument for the body of Christ, love, and ordered prophecy. The two passages on women’s speech sit in unresolved tension.',
      },
      {
        heading: 'Resurrection (15:1–58)',
        passageRange: '15:1–58',
        summary:
          'Paul’s most extended argument that the future of believers is bodily resurrection, not disembodied immortality, grounded in Christ’s resurrection as firstfruits.',
      },
    ],
    themeIds: ['resurrection'],
    claimIds: ['ev-resurrection-tradition', 'ev-spiritual-body', 'ev-body-of-christ'],
    sourceIds: ['src-1cor-15-tradition', 'src-resurrection-body', 'src-1cor-women'],
  },
  {
    id: 'ephesians',
    title: 'Ephesians',
    occasion:
      'Ephesians lacks the concrete situational detail that marks the undisputed letters. The earliest manuscripts omit "in Ephesus" in 1:1, suggesting a circular letter to assemblies in Asia Minor. The majority of critical scholars judge Ephesians pseudonymous, written in Paul’s name after his death by a follower deeply formed by Colossians.',
    centralQuestion:
      'What is the cosmic scope of what God has done in Christ — and what kind of community follows from it?',
    literaryShape:
      'A long doctrinal half (1–3) of doxology and grand themes, followed by a long ethical half (4–6) including a household code. Sentence length and elevated style differ markedly from the undisputed letters.',
    keyPassages: [
      { ref: 'Ephesians 1:3–14', note: 'A single Greek sentence: election, redemption, sealing of the Spirit.' },
      { ref: 'Ephesians 2:1–10', note: 'By grace through faith, not from works.' },
      { ref: 'Ephesians 2:11–22', note: 'Jew and Gentile reconciled in one new humanity.' },
      { ref: 'Ephesians 4:1–16', note: 'One body, one Spirit, one Lord; gifts for the body’s growth.' },
      { ref: 'Ephesians 5:21–6:9', note: 'The household code — the most contested ethical material here.' },
    ],
    sections: [
      {
        heading: 'Cosmic election and redemption (1:1–2:22)',
        passageRange: '1:1–2:22',
        summary:
          'A high-altitude account of God’s plan in Christ, the gracious salvation of the readers, and the bringing near of Gentiles who were "far off" — a key theological echo of Romans without its tortured argumentation.',
      },
      {
        heading: 'The mystery and the Church (3:1–21)',
        passageRange: '3:1–21',
        summary:
          'Paul as steward of the mystery: that Gentiles are co-heirs and members of the same body. The "Church" here is cosmic, singular, and universal — a marked shift from Pauline usage elsewhere.',
      },
      {
        heading: 'Unity, gifts, new self (4:1–5:20)',
        passageRange: '4:1–5:20',
        summary:
          'Practical exhortation: walk worthy of the calling; speak truth; put away the old self; imitate God as beloved children.',
      },
      {
        heading: 'Household code and spiritual warfare (5:21–6:24)',
        passageRange: '5:21–6:24',
        summary:
          'The household code (wives/husbands, children/parents, slaves/masters) draws heavily on Colossians and reflects a more settled ecclesial situation. The armor of God closes the letter.',
      },
    ],
    themeIds: ['justification'],
    claimIds: ['ev-ephesians-cosmic-church', 'ev-ephesians-grace-language'],
    sourceIds: ['src-ephesians-style', 'src-ephesians-cosmic'],
  },
]

export const lettersById = Object.fromEntries(letters.map((l) => [l.id, l])) as Record<string, LetterPage>
