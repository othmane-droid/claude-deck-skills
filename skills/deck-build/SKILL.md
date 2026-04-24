---
name: deck-build
description: Production d'un deck .pptx branded à partir d'un ghost-deck.md validé. Génère le body (bullets, data callouts, speaker notes) et produit un fichier .pptx aux couleurs de la charte. Déclencheurs — "construis le deck", "génère le pptx", "produis le fichier".
---

# Deck Build — Production .pptx

## Rôle

Tu es le générateur de deck. À partir d'un ghost deck validé + la charte graphique, tu produis un fichier `.pptx` natif, 100% éditable, aux couleurs exactes du client.

## Quand l'utiliser

- APRÈS validation du ghost deck via `/deck-story`
- Pour produire un fichier .pptx éditable dans PowerPoint / Keynote / Google Slides

## Prérequis

- `ghost-deck.md` présent à la racine du projet (produit par `/deck-story`)
- `charte-graphique.json` présent à la racine du projet (copié depuis `.example.json` et édité)
- Node.js 18+ installé
- Dépendances installées (`npm install`)

Si un prérequis manque, demande à l'utilisateur avant de continuer.

## Méthode en 4 étapes

### Étape 1 — Lire le ghost deck + la charte

- Ouvrir `ghost-deck.md` → extraire la liste des titres (action titles)
- Ouvrir `charte-graphique.json` → extraire couleurs, polices, logo, slogan

### Étape 2 — Générer le body pour chaque slide

Pour chaque slide du ghost deck, produire :

1. **Bullets** — 3 maximum, 12 mots max chacun, pas de paragraphe
2. **Data callout** — 1 chiffre clé + source visible (ex : "40% de tickets résolus — Rapport annuel Concurrent A 2026")
3. **Speaker note** — 30 à 60 secondes de texte parlé (pas écrit)

Layout à choisir selon le contenu :
- `hero-number` — 1 chiffre massif au centre + explication
- `three-bullets` — titre + 3 bullets + data callout latéral
- `contrast-pair` — 2 colonnes avant/après ou nous/eux
- `options-matrix` — tableau 3 options × critères
- `timeline` — timeline horizontale avec jalons
- `closing` — fond sombre, CTA centré

### Étape 3 — Lancer PptxGenJS

Appeler `scripts/generate-deck.js` avec :
- `ghost-deck.md` → pour les titres
- `charte-graphique.json` → pour les couleurs et styles
- Le body généré à l'étape 2 → pour les bullets et data callouts

### Étape 4 — Livrer

Produire le fichier `output/deck-[nom].pptx` et informer l'utilisateur du chemin.

Proposer à l'utilisateur d'enchaîner avec `/deck-review` pour auditer le deck avant envoi.

## Règles qualité non-négociables

- 1 slide = 1 message (jamais 2 messages concurrents)
- Bullets max 12 mots, slide max 40 mots total
- Chaque stat a une source visible
- 2 couleurs max par slide (principale + neutre)
- Logo systématique en bas-droite (sauf cover)
- Cover = fond sombre (noir_tech), label overline, titre blanc bold
- Closing = même traitement que cover
- Pages intérieures = fond blanc, titre couleur principale, corps noir_tech

## Mots interdits (filtres automatiques)

- disruptif
- révolutionnaire
- innovant
- synergies
- game-changer
- next-gen
- fiers de présenter

Si un de ces mots apparaît dans le body généré, reformuler avant d'envoyer à PptxGenJS.

## Output

- Fichier `output/deck-[nom].pptx` — éditable dans PowerPoint / Keynote / Google Slides
- Confirmation à l'utilisateur du chemin + taille du fichier + suggestion d'enchaîner sur `/deck-review`
