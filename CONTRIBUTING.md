# Contribuer à claude-deck-skills

Merci de vouloir contribuer. Voici comment.

## Types de contributions bienvenues

### 1. Nouveau framework narratif

Ajouter un framework dans `skills/deck-story/SKILL.md` (section "Frameworks disponibles") + exemple d'usage dans `examples/`.

Critères d'acceptation :
- Le framework a une littérature reconnue (livre, article académique, usage en conseil)
- Il est distinct des 10 existants (pas un synonyme)
- Un exemple concret est fourni

### 2. Nouveau layout visuel

Ajouter un layout dans `skills/deck-build/scripts/layouts.js` + le router dans `generate-deck.js`.

Critères :
- Le layout respecte la charte (lit `charte-graphique.json`, ne hardcode pas de couleurs)
- Il produit un résultat éditable dans PowerPoint
- Il gère le cas "pas de logo" ou "pas d'overline"

### 3. Nouveau persona pour le stress test

Ajouter un persona dans `skills/deck-review/SKILL.md` (section "Multi-persona stress test").

Critères :
- Le persona est clairement distinct des 3 existants (CEO pressé, CFO sceptique, COO pragmatique)
- Il a un angle de critique unique
- Il est documenté (biais, priorités, ton)

### 4. Bugs et améliorations

Ouvre une [issue](https://github.com/othmane-droid/claude-deck-skills/issues) avec :
- Contexte (version Node, OS, version Claude Code)
- Étapes pour reproduire
- Comportement attendu vs observé

## Process

1. Fork le repo
2. Crée une branche : `git checkout -b feat/nouveau-framework-scqa`
3. Commit avec message descriptif : `feat(deck-story): add SCQA framework`
4. Push : `git push origin feat/nouveau-framework-scqa`
5. Ouvre une Pull Request avec description claire

## Style de commit

On suit [Conventional Commits](https://www.conventionalcommits.org/) :

- `feat:` nouvelle fonctionnalité
- `fix:` correction de bug
- `docs:` documentation
- `refactor:` refacto sans changement de comportement
- `test:` tests
- `chore:` maintenance

## Code style

- JavaScript : Node 18+, pas de TypeScript pour rester simple
- Markdown : retours à la ligne à 100 caractères max
- Commentaires : en français (on assume une audience francophone AI Makers)

## Merci

Les meilleures contributions seront créditées dans le README et les releases notes.

Pour toute question : [@othmanehalim](https://www.linkedin.com/in/othmanehalim/)
