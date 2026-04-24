// layouts.js — Les 6 layouts signature pour les decks COMEX-ready
// Chaque layout prend (slide, charte, content) et applique un template visuel cohérent.

/**
 * Cover slide — fond sombre, overline + titre blanc + date
 */
function applyCoverLayout(slide, charte, { overline, title, subtitle, date }) {
  slide.background = { color: charte.couleurs.noir_tech };

  if (overline) {
    slide.addText(overline.toUpperCase(), {
      x: 0.8, y: 2.2, w: 11,
      fontSize: 14, bold: true,
      color: charte.couleurs.principale,
      fontFace: charte.polices.principale,
      charSpacing: charte.polices.overline_letter_spacing || 3
    });
  }

  slide.addText(title, {
    x: 0.8, y: 2.8, w: 11.5, h: 2.5,
    fontSize: 44, bold: true,
    color: charte.couleurs.blanc,
    fontFace: charte.polices.principale,
    valign: "top"
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8, y: 5.3, w: 11,
      fontSize: 20,
      color: charte.couleurs.slate_300,
      fontFace: charte.polices.principale
    });
  }

  if (date) {
    slide.addText(date, {
      x: 0.8, y: 6.5, w: 11,
      fontSize: 14,
      color: charte.couleurs.slate_500,
      fontFace: charte.polices.principale
    });
  }
}

/**
 * Hero number — 1 chiffre massif + explication en dessous
 */
function applyHeroNumberLayout(slide, charte, { overline, heroNumber, explanation, source }) {
  slide.background = { color: charte.couleurs.blanc };

  if (overline) {
    slide.addText(overline.toUpperCase(), {
      x: 0.8, y: 0.4, w: 11,
      fontSize: 12, bold: true,
      color: charte.couleurs.principale,
      fontFace: charte.polices.principale,
      charSpacing: 3
    });
  }

  slide.addText(heroNumber, {
    x: 0.5, y: 1.8, w: 12.3, h: 3.5,
    fontSize: 140, bold: true,
    color: charte.couleurs.principale,
    fontFace: charte.polices.principale,
    align: "center", valign: "middle"
  });

  slide.addText(explanation, {
    x: 1, y: 5.5, w: 11.3, h: 1,
    fontSize: 22, bold: true,
    color: charte.couleurs.noir_tech,
    fontFace: charte.polices.principale,
    align: "center"
  });

  if (source) {
    slide.addText(`Source : ${source}`, {
      x: 1, y: 6.8, w: 11.3,
      fontSize: 12, italic: true,
      color: charte.couleurs.slate_500,
      fontFace: charte.polices.principale,
      align: "center"
    });
  }
}

/**
 * Three bullets — action title + 3 bullets + data callout latéral
 */
function applyThreeBulletsLayout(slide, charte, { overline, title, bullets, dataCallout, dataLabel }) {
  slide.background = { color: charte.couleurs.blanc };

  if (overline) {
    slide.addText(overline.toUpperCase(), {
      x: 0.8, y: 0.4, w: 11,
      fontSize: 12, bold: true,
      color: charte.couleurs.principale,
      fontFace: charte.polices.principale,
      charSpacing: 3
    });
  }

  slide.addText(title, {
    x: 0.8, y: 0.9, w: 12, h: 1.3,
    fontSize: 28, bold: true,
    color: charte.couleurs.noir_tech,
    fontFace: charte.polices.principale
  });

  const bulletsArr = bullets.map(b => ({
    text: `•  ${b}`,
    options: { fontSize: 17, color: charte.couleurs.noir_tech, breakLine: true }
  }));

  slide.addText(bulletsArr, {
    x: 0.8, y: 2.8, w: 8, h: 3.5,
    fontFace: charte.polices.principale,
    paraSpaceAfter: 12
  });

  if (dataCallout) {
    slide.addShape("rect", {
      x: 9.2, y: 2.8, w: 3.6, h: 2.5,
      fill: { color: charte.couleurs.ice },
      line: { color: charte.couleurs.principale, width: 0 }
    });

    if (dataLabel) {
      slide.addText(dataLabel.toUpperCase(), {
        x: 9.4, y: 3, w: 3.2,
        fontSize: 10, bold: true,
        color: charte.couleurs.principale,
        fontFace: charte.polices.principale,
        charSpacing: 2
      });
    }

    slide.addText(dataCallout, {
      x: 9.4, y: 3.4, w: 3.2, h: 1.8,
      fontSize: 30, bold: true,
      color: charte.couleurs.noir_tech,
      fontFace: charte.polices.principale,
      valign: "middle"
    });
  }
}

/**
 * Contrast pair — 2 colonnes avant/après
 */
function applyContrastPairLayout(slide, charte, { overline, title, leftLabel, leftTitle, leftBody, rightLabel, rightTitle, rightBody }) {
  slide.background = { color: charte.couleurs.blanc };

  if (overline) {
    slide.addText(overline.toUpperCase(), {
      x: 0.8, y: 0.4, w: 11,
      fontSize: 12, bold: true,
      color: charte.couleurs.principale,
      fontFace: charte.polices.principale,
      charSpacing: 3
    });
  }

  slide.addText(title, {
    x: 0.8, y: 0.9, w: 12, h: 1.2,
    fontSize: 26, bold: true,
    color: charte.couleurs.noir_tech,
    fontFace: charte.polices.principale
  });

  // Colonne gauche
  slide.addShape("rect", {
    x: 0.8, y: 2.8, w: 5.7, h: 3.5,
    fill: { color: charte.couleurs.slate_50 },
    line: { width: 0 }
  });

  slide.addText(leftLabel.toUpperCase(), {
    x: 1, y: 3, w: 5.3,
    fontSize: 11, bold: true,
    color: charte.couleurs.slate_500,
    fontFace: charte.polices.principale,
    charSpacing: 2
  });

  slide.addText(leftTitle, {
    x: 1, y: 3.4, w: 5.3, h: 1,
    fontSize: 22, bold: true,
    color: charte.couleurs.noir_tech,
    fontFace: charte.polices.principale
  });

  slide.addText(leftBody, {
    x: 1, y: 4.6, w: 5.3, h: 1.5,
    fontSize: 14,
    color: charte.couleurs.slate_600,
    fontFace: charte.polices.principale
  });

  // Colonne droite
  slide.addShape("rect", {
    x: 6.8, y: 2.8, w: 5.7, h: 3.5,
    fill: { color: charte.couleurs.ice },
    line: { width: 0 }
  });

  slide.addText(rightLabel.toUpperCase(), {
    x: 7, y: 3, w: 5.3,
    fontSize: 11, bold: true,
    color: charte.couleurs.principale,
    fontFace: charte.polices.principale,
    charSpacing: 2
  });

  slide.addText(rightTitle, {
    x: 7, y: 3.4, w: 5.3, h: 1,
    fontSize: 22, bold: true,
    color: charte.couleurs.noir_tech,
    fontFace: charte.polices.principale
  });

  slide.addText(rightBody, {
    x: 7, y: 4.6, w: 5.3, h: 1.5,
    fontSize: 14,
    color: charte.couleurs.slate_600,
    fontFace: charte.polices.principale
  });
}

/**
 * Closing — fond sombre, CTA, next steps
 */
function applyClosingLayout(slide, charte, { heroNumber, heroLabel, steps, contactName, contactEmail }) {
  slide.background = { color: charte.couleurs.noir_tech };

  if (heroNumber) {
    slide.addText(heroNumber, {
      x: 0.8, y: 1, w: 12, h: 2.5,
      fontSize: 96, bold: true,
      color: charte.couleurs.principale,
      fontFace: charte.polices.principale,
      align: "center"
    });
  }

  if (heroLabel) {
    slide.addText(heroLabel, {
      x: 0.8, y: 3.5, w: 12,
      fontSize: 28, bold: true,
      color: charte.couleurs.blanc,
      fontFace: charte.polices.principale,
      align: "center"
    });
  }

  if (steps && steps.length) {
    steps.forEach((step, i) => {
      slide.addText(`${i + 1}. ${step}`, {
        x: 2, y: 4.5 + i * 0.5, w: 10,
        fontSize: 16,
        color: charte.couleurs.slate_300,
        fontFace: charte.polices.principale
      });
    });
  }

  if (contactName) {
    slide.addText(`${contactName}${contactEmail ? " — " + contactEmail : ""}`, {
      x: 0.8, y: 6.8, w: 12,
      fontSize: 12,
      color: charte.couleurs.slate_500,
      fontFace: charte.polices.principale,
      align: "center"
    });
  }
}

module.exports = {
  applyCoverLayout,
  applyHeroNumberLayout,
  applyThreeBulletsLayout,
  applyContrastPairLayout,
  applyClosingLayout
};
