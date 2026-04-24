// demo-comex.js — Génère un deck COMEX de démo aux couleurs AI Makers
// Usage : npm run demo
//
// Produit un fichier examples/deck-demo-aimakers.pptx que tu peux ouvrir
// dans PowerPoint / Keynote / Google Slides pour voir le résultat.

const path = require("path");
const fs = require("fs");
const { generateDeck } = require("../skills/deck-build/scripts/generate-deck");

// Charte AI Makers hardcodée pour la démo (en prod : lire charte-graphique.json)
const charte = {
  marque: "AI Makers",
  site: "aimakers.fr",
  slogan: "On rend les entreprises AI First.",
  couleurs: {
    principale: "2563EB",
    deep: "1E40AF",
    electric: "3B82F6",
    ice: "DBEAFE",
    sky: "EFF6FF",
    noir_tech: "0F172A",
    slate_800: "1E293B",
    slate_600: "475569",
    slate_500: "64748B",
    slate_300: "CBD5E1",
    slate_100: "F1F5F9",
    slate_50: "F8FAFC",
    blanc: "FFFFFF",
    vert_succes: "10B981"
  },
  polices: {
    principale: "Inter",
    titre_poids: "bold",
    corps_poids: "regular",
    overline_letter_spacing: 3
  },
  mots_a_bannir: ["disruptif", "révolutionnaire", "innovant", "synergies", "game-changer", "next-gen"]
};

// Deck de démo : 8 slides, framework Minto, sujet "Valider 500K€ IA 2027"
const slides = [
  {
    layout: "cover",
    overline: "COMEX — 24 AVRIL 2026",
    title: "Valider 500K€ en IA ramène 1,8M€ en 18 mois",
    subtitle: "Recommandation stratégique budget IA 2027",
    date: "Othmane Halim · CEO AI Makers",
    speakerNote: "Je vais vous présenter la recommandation d'investissement IA pour 2027. L'objectif de cette session : obtenir votre vote aujourd'hui sur l'enveloppe 500K€."
  },
  {
    layout: "hero-number",
    overline: "01 — LA RECOMMANDATION",
    heroNumber: "+1,8M€",
    explanation: "De productivité récupérée en 18 mois pour 500K€ investis",
    source: "Audit interne Q1 2026 + benchmark McKinsey Global AI Survey",
    speakerNote: "En une phrase : on investit 500K€ en 2027, on récupère 1,8M€ de productivité sur 18 mois. Soit un ROI de 3,6×. Je vais maintenant vous présenter les 3 arguments qui sous-tendent cette recommandation."
  },
  {
    layout: "three-bullets",
    overline: "02 — LES 3 ARGUMENTS",
    title: "3 raisons pour lesquelles ce budget est la bonne décision",
    bullets: [
      "Les quick wins livrés en Q1 prouvent le ROI : 4h/sem gagnées par équipe testée",
      "Le concurrent A a pris 18 mois d'avance avec un investissement similaire",
      "Le coût d'inaction est chiffré à 2,3M€ sur 24 mois"
    ],
    dataCallout: "3/3",
    dataLabel: "ARGUMENTS VALIDÉS",
    speakerNote: "Trois arguments convergents : (1) preuve par les quick wins déjà livrés, (2) avance concurrentielle à rattraper, (3) coût d'inaction explicite. Je détaille chacun dans les slides suivantes."
  },
  {
    layout: "three-bullets",
    overline: "03 — ARGUMENT #1 : LES QUICK WINS",
    title: "3 prototypes livrés en Q1 valident le potentiel productivité",
    bullets: [
      "Automatisation reporting commercial : -8h/sem par manager",
      "Agent support niveau 1 : 34% de tickets résolus sans humain",
      "Génération descriptions produits : 420h/an récupérées"
    ],
    dataCallout: "NPS 8,4",
    dataLabel: "ADOPTION INTERNE",
    speakerNote: "Trois prototypes ont tourné en pilote au Q1. Les trois ont dépassé les objectifs. L'adoption interne est à 8,4/10 de NPS, ce qui est très au-dessus de la médiane de nos déploiements logiciels."
  },
  {
    layout: "contrast-pair",
    overline: "04 — COÛT DE L'INACTION",
    title: "Sans investissement IA, nous perdons 2,3M€ sur 24 mois",
    leftLabel: "SANS BUDGET IA 2027",
    leftTitle: "-2,3M€",
    leftBody: "Erreurs manuelles (620K€) + turnover service client (980K€) + revenus manqués (700K€)",
    rightLabel: "AVEC BUDGET 500K€",
    rightTitle: "+1,8M€",
    rightBody: "Automatisation 40% tâches répétitives + 3 agents IA en prod + formation 20 AI Champions",
    speakerNote: "Le choix n'est pas entre investir 500K€ ou ne pas investir. Le choix est entre investir 500K€ pour gagner 1,8M€, ou ne pas investir et perdre 2,3M€. Delta : 4,1M€ en 24 mois."
  },
  {
    layout: "three-bullets",
    overline: "05 — PLAN D'EXÉCUTION",
    title: "3 chantiers parallèles sur 90 jours, avec gates de décision",
    bullets: [
      "T0-T30 : recrutement lead IA + cadrage 3 cas d'usage prioritaires",
      "T30-T60 : mise en prod chantier #1 (agent support) + mesure adoption",
      "T60-T90 : gate COMEX pour validation chantiers #2 et #3"
    ],
    dataCallout: "3 gates",
    dataLabel: "DÉCISIONS COMEX",
    speakerNote: "Le plan est décomposé en 3 phases avec 3 gates de décision COMEX. Vous gardez la main à chaque étape. Pas de chèque en blanc : à chaque gate, on présente les résultats mesurés et vous arbitrez la suite."
  },
  {
    layout: "three-bullets",
    overline: "06 — RISQUES & MITIGATION",
    title: "3 risques identifiés, 3 mitigations engagées",
    bullets: [
      "Adoption terrain faible → programme AI Champions dans chaque département",
      "Sécurité des données → stack souveraine (Mistral + on-premise option)",
      "Dépendance fournisseur → architecture multi-cloud et modèles interchangeables"
    ],
    dataCallout: "100%",
    dataLabel: "RISQUES COUVERTS",
    speakerNote: "Les 3 risques majeurs identifiés ont chacun une mitigation concrète et budgétée dans l'enveloppe. Je peux détailler chaque mitigation en Q&A si vous le souhaitez."
  },
  {
    layout: "closing",
    heroNumber: "500K€",
    heroLabel: "pour 1,8M€ de productivité en 18 mois",
    steps: [
      "Validation enveloppe 500K€ aujourd'hui",
      "Kickoff 1er juin 2026 avec lead IA en place",
      "Gate de revue #1 : 30 septembre 2026"
    ],
    contactName: "Othmane Halim · CEO AI Makers",
    contactEmail: "othmane@aimakers.fr",
    speakerNote: "Ce que je vous demande aujourd'hui : validation de l'enveloppe 500K€ pour 2027. Kickoff premier juin. Gate de revue le 30 septembre où je reviens devant vous avec les premiers résultats mesurés."
  }
];

// Générer le deck
const outputPath = path.join(__dirname, "deck-demo-aimakers.pptx");

generateDeck({ slides, charte, outputPath })
  .then(() => {
    console.log("");
    console.log("🎉 Deck démo généré avec succès !");
    console.log(`   Ouvre : ${outputPath}`);
    console.log("");
    console.log("Pour générer TON propre deck :");
    console.log("  1. Édite charte-graphique.json avec tes couleurs/police/logo");
    console.log("  2. Utilise /deck-story dans Claude Code pour préparer ta story");
    console.log("  3. Utilise /deck-build pour générer le .pptx");
    console.log("");
  })
  .catch(err => {
    console.error("❌ Erreur :", err);
    process.exit(1);
  });
