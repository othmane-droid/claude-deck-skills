# Installation complète

## Prérequis

- **Node.js 18+** — vérifier avec `node --version`
- **Claude Code** — installé et configuré ([doc officielle](https://docs.anthropic.com/en/docs/claude-code))
- **Git** — pour cloner le repo

## Étape 1 — Cloner le repo

```bash
git clone https://github.com/othmane-droid/claude-deck-skills.git ~/.claude/skills/deck
cd ~/.claude/skills/deck
```

## Étape 2 — Installer les dépendances

```bash
npm install
```

Cela installe PptxGenJS (la seule dépendance externe).

## Étape 3 — Configurer ta charte

```bash
cp charte-graphique.example.json charte-graphique.json
```

Édite `charte-graphique.json` avec tes valeurs :
- **Couleurs** : hex sans le `#`
- **Polices** : nom exact tel qu'installé sur le système (sinon fallback Arial)
- **Logo** : chemin local (PNG recommandé, fond transparent)

## Étape 4 — Tester la démo

```bash
npm run demo
```

Un fichier `examples/deck-demo-aimakers.pptx` est généré. Ouvre-le dans PowerPoint / Keynote / Google Slides.

Si tout fonctionne → passe à l'étape 5.

## Étape 5 — Activer les skills dans Claude Code

Les 3 skills sont lus automatiquement par Claude Code depuis `~/.claude/skills/deck/skills/`.

Recharger Claude Code (ou redémarrer une nouvelle session).

Tester avec :

```
/deck-story "Je dois défendre un budget IA 500K€ au COMEX"
```

## Troubleshooting

### "Cannot find module pptxgenjs"
→ Lancer `npm install` dans le dossier du repo.

### "Font X not available"
→ PptxGenJS utilise les polices du système. Installer Inter via [Google Fonts](https://fonts.google.com/specimen/Inter) ou changer la police dans `charte-graphique.json`.

### "Logo not displayed"
→ Vérifier que le chemin du logo dans `charte-graphique.json` est relatif au script d'exécution, ou utiliser un chemin absolu.

### Les skills ne sont pas détectés par Claude Code
→ Vérifier que le dossier est bien `~/.claude/skills/deck/` et que chaque `SKILL.md` contient un frontmatter YAML valide avec `name:` et `description:`.

### Le deck généré a des couleurs différentes
→ Claude Code peut avoir du cache. Redémarrer une nouvelle session. Si le problème persiste, vérifier que `charte-graphique.json` est bien lu par le script (ajout de `console.log(charte)` dans `generate-deck.js`).

## Aller plus loin

- Lire le [Playbook Deck AI-First](https://acute-licorice-d94.notion.site/Le-Playbook-Deck-AI-First-34cc2daa75c781fd8568cd21b285f03d) pour les 14 tactiques niveau pro
- Fork le repo et ajoute tes propres layouts / frameworks / personas
- Rejoindre l'équipe AI Makers : [cal.com/othmane-halim-5lo7uc/30min](https://cal.com/othmane-halim-5lo7uc/30min)
