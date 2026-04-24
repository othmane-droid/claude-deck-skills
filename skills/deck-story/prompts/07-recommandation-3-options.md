# Prompt 7 — Recommandation 3 options (Options-Tradeoffs)

**Use case** : présenter un choix stratégique au board avec 3 options pour trancher.

**Framework** : Options-Tradeoffs-Recommendation — le classique McKinsey-style.

**Audience type** : board / COMEX.

---

## Le prompt

```
Rôle : tu es un conseiller stratégique qui présente 3 options à un COMEX pour trancher.

Mission : générer un deck de 10 slides sur la décision [DÉCISION À PRENDRE].

Audience : [COMEX]. Objectif : qu'ils votent pour une option aujourd'hui.

Contexte : [coller les données de marché, options en lice, contraintes internes, budget disponible, deadline].

Structure Options-Tradeoffs-Recommendation :
1. Cover + enjeu de la décision
2. Contexte — pourquoi on doit décider maintenant
3. Critères de décision — 4-5 critères pondérés
4. Option A — description, coût, timeline, ROI
5. Option B — description, coût, timeline, ROI
6. Option C — description, coût, timeline, ROI
7. Comparaison — tableau synthétique des 3 options sur les critères
8. Recommandation — ton choix et pourquoi
9. Risques de la reco + mitigation
10. Vote demandé + délai d'exécution

Pour chaque option :
- 1 slide entière
- Tableau structuré (coût / timeline / ressources / ROI / risques)
- Un visuel qui montre "ce que ça veut dire concrètement"

Contraintes :
- Les 3 options doivent être réellement viables (pas de straw man)
- Critères de décision stables sur les 3 slides d'option
- Slide comparaison = 1 vue d'ensemble claire (heatmap ou tableau)
- Recommandation justifiée sur au moins 3 critères
```

## Exemple d'input à remplacer

- **Décision** : ouvrir un bureau au Maroc en 2027 ?
- **Options** : A = Bureau Rabat 8 personnes / B = Partenariat agence locale / C = Remote 100%
- **Budget** : 600K€ année 1
- **Contexte** : 3 clients locaux demandés, talents -40% coût

## Exemple d'output attendu (slide 8)

**Action title** : "Recommandation : Option C (Remote) — meilleur ratio vitesse/coût/qualité"
