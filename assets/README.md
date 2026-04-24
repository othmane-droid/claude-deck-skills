# Assets

Ce dossier contient tes assets visuels (logo, screenshots démo).

## Ajouter ton logo

1. Dépose ton logo PNG ici :
   - `logo.png` — version couleur (pour fonds clairs)
   - `logo-blanc.png` — version blanche (pour fonds sombres)

2. Dans ton `charte-graphique.json` à la racine, renseigne le chemin :
   ```json
   "logo": {
     "chemin": "./assets/logo.png",
     "chemin_blanc": "./assets/logo-blanc.png",
     "largeur_cm": 2.5
   }
   ```

**Recommandations logo :**
- Fond transparent (PNG)
- Minimum 512×512 px pour bon rendu en pptx
- Version couleur ET version blanche pour les slides sombres

## Screenshots de démonstration

Le dossier `screenshots/` contient les exports PNG du deck démo — utilisés dans le README principal pour montrer le rendu final.

Pour régénérer :
1. Lance `npm run demo` pour générer `examples/deck-demo-aimakers.pptx`
2. Ouvre le .pptx et exporte les slides clés en PNG (File → Export → PNG dans PowerPoint / Keynote)
3. Dépose-les ici sous `screenshots/slide-cover.png`, `screenshots/slide-hero.png`, etc.
