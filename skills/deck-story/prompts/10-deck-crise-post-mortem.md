# Prompt 10 — Crise / post-mortem (4-Whats)

**Use case** : incident majeur, crise produit, ratage visible. Présenter transparence + plan de redressement.

**Framework** : What happened — What we did — What we learned — What changes.

**Audience type** : board, équipe, clients.

---

## Le prompt

```
Rôle : tu es un leader qui présente un post-mortem à son board après un incident majeur.

Mission : générer un deck de 8 slides sur l'incident [NATURE DE L'INCIDENT] survenu le [DATE].

Audience : [BOARD / ÉQUIPE / CLIENTS]. Objectif : restaurer la confiance par la transparence + montrer un plan de prévention solide.

Contexte : [coller la chronologie, l'impact chiffré, les causes identifiées, les actions déjà prises, les actions à venir].

Structure What happened — What we did — What we learned — What changes :
1. Cover — transparence assumée ("Ce qui s'est passé le [DATE] et ce qu'on en fait")
2. What happened — chronologie factuelle minute par minute
3. What happened — impact chiffré (clients touchés, revenus perdus, réputation)
4. What we did — actions immédiates prises dans les 24h
5. What we learned — root cause analysis (5 Whys ou fishbone)
6. What changes — les 3 changements structurels engagés
7. Plan de prévention — comment on s'assure que ça ne se reproduit pas
8. Engagement — commitments chiffrés avec délai + owner

Pour chaque slide :
1. Action title qui assume sans victimisation
2. Faits, pas opinions
3. Chiffres sourcés
4. Speaker note 60 secondes

Contraintes :
- Ton : assumé mais pas complaisant
- Zéro excuse ("le fournisseur X", "la météo", "un cas exceptionnel") sauf si c'est LA cause principale
- Slide 5 = vraie cause racine, pas symptôme
- Slide 8 = engagements mesurables avec date et responsable
- Interdit : "incident malheureux", "malgré nos efforts", "nous nous excusons pour la gêne"
```

## Exemple d'input à remplacer

- **Incident** : panne plateforme SaaS 14 avril 2026
- **Durée** : 7h indisponibilité
- **Impact** : 8 400 clients touchés, 180K€ crédits, 3 Tier 1 en demande rupture
- **Root cause** : migration DB mal testée + rollback auto cassé

## Exemple d'output attendu (slide 1)

**Action title** : "Panne du 14 avril : ce qui s'est passé, pourquoi, et ce qu'on change dès aujourd'hui"
