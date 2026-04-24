// generate-deck.js — Générateur principal de deck .pptx
// Usage :
//   node generate-deck.js <slides.json> [charte.json] [output.pptx]
//
// <slides.json> doit contenir un array de slides :
// [
//   { "layout": "cover", "overline": "COMEX", "title": "...", "subtitle": "...", "date": "..." },
//   { "layout": "hero-number", "overline": "01 — CONSTAT", "heroNumber": "500K€", "explanation": "...", "source": "..." },
//   { "layout": "three-bullets", "overline": "02", "title": "...", "bullets": ["..."], "dataCallout": "1,8M€", "dataLabel": "ROI 18 MOIS" },
//   { "layout": "contrast-pair", "overline": "03", "title": "...", "leftLabel": "AVANT", "leftTitle": "...", "leftBody": "...", "rightLabel": "APRÈS", "rightTitle": "...", "rightBody": "..." },
//   { "layout": "closing", "heroNumber": "4", "heroLabel": "semaines pour savoir", "steps": ["...", "..."], "contactName": "...", "contactEmail": "..." }
// ]

const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");
const {
  applyCoverLayout,
  applyHeroNumberLayout,
  applyThreeBulletsLayout,
  applyContrastPairLayout,
  applyClosingLayout
} = require("./layouts");

function loadJson(p) {
  if (!fs.existsSync(p)) {
    throw new Error(`Fichier introuvable : ${p}`);
  }
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function filterForbiddenWords(text, forbidden) {
  if (!text || !forbidden || !forbidden.length) return text;
  const lower = text.toLowerCase();
  const hits = forbidden.filter(w => lower.includes(w.toLowerCase()));
  if (hits.length) {
    console.warn(`⚠️  Mots interdits détectés : ${hits.join(", ")} dans "${text.substring(0, 80)}..."`);
  }
  return text;
}

function generateDeck({ slides, charte, outputPath }) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.333 × 7.5 inches (16:9 widescreen)
  pres.title = slides[0]?.title || "Deck COMEX";
  pres.author = charte.marque || "AI Makers";
  pres.company = charte.marque || "AI Makers";

  // Define master slide with header bar + logo + footer
  pres.defineSlideMaster({
    title: "AIMAKERS_MASTER",
    background: { color: charte.couleurs.blanc },
    objects: [
      {
        rect: {
          x: 0, y: 0, w: "100%", h: 0.1,
          fill: { color: charte.couleurs.principale },
          line: { width: 0 }
        }
      },
      {
        text: {
          text: (charte.marque || "AI Makers").toUpperCase() + "  —  CONFIDENTIEL",
          options: {
            x: 0.5, y: 7.1, w: 12, fontSize: 9,
            color: charte.couleurs.slate_500,
            fontFace: charte.polices.principale,
            charSpacing: 2
          }
        }
      }
    ]
  });

  const forbidden = charte.mots_a_bannir || [];

  slides.forEach((slideData, idx) => {
    const slide = pres.addSlide({ masterName: "AIMAKERS_MASTER" });

    // Filter forbidden words across all text fields
    const textFields = ["title", "subtitle", "explanation", "leftTitle", "leftBody", "rightTitle", "rightBody", "heroLabel"];
    textFields.forEach(field => {
      if (slideData[field]) {
        filterForbiddenWords(slideData[field], forbidden);
      }
    });
    if (slideData.bullets) {
      slideData.bullets.forEach(b => filterForbiddenWords(b, forbidden));
    }

    // Route to correct layout
    switch (slideData.layout) {
      case "cover":
        applyCoverLayout(slide, charte, slideData);
        break;
      case "hero-number":
        applyHeroNumberLayout(slide, charte, slideData);
        break;
      case "three-bullets":
        applyThreeBulletsLayout(slide, charte, slideData);
        break;
      case "contrast-pair":
        applyContrastPairLayout(slide, charte, slideData);
        break;
      case "closing":
        applyClosingLayout(slide, charte, slideData);
        break;
      default:
        console.warn(`Layout inconnu : ${slideData.layout} (slide ${idx + 1})`);
        applyThreeBulletsLayout(slide, charte, slideData);
    }

    // Speaker notes
    if (slideData.speakerNote) {
      slide.addNotes(slideData.speakerNote);
    }

    // Slide number (sauf cover et closing)
    if (slideData.layout !== "cover" && slideData.layout !== "closing") {
      slide.addText(`${idx + 1}`, {
        x: 12.7, y: 7.05, w: 0.5, h: 0.3,
        fontSize: 10, bold: true,
        color: charte.couleurs.slate_500,
        fontFace: charte.polices.principale,
        align: "right"
      });
    }
  });

  // Write file
  return pres.writeFile({ fileName: outputPath }).then(file => {
    console.log(`✅ Deck généré : ${file}`);
    return file;
  });
}

// CLI entry point
if (require.main === module) {
  const slidesPath = process.argv[2] || "./slides.json";
  const chartePath = process.argv[3] || "./charte-graphique.json";
  const outputPath = process.argv[4] || "./output/deck.pptx";

  // Ensure output directory exists
  const outDir = path.dirname(outputPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  try {
    const slides = loadJson(slidesPath);
    const charte = loadJson(chartePath);
    generateDeck({ slides, charte, outputPath });
  } catch (err) {
    console.error("❌ Erreur :", err.message);
    process.exit(1);
  }
}

module.exports = { generateDeck };
