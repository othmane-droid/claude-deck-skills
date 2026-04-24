# Prompt 6 — One-pager exécutif (BLUF)

**Use case** : un directeur pressé demande "résume-moi ça en 1 page".

**Framework** : BLUF (Bottom Line Up Front) — conclusion d'abord, détails après.

**Audience type** : exécutif. Temps de lecture : 90 secondes.

---

## Le prompt

```
Rôle : tu es un analyste senior qui synthétise un sujet complexe en une seule slide pour un directeur pressé.

Mission : générer UN one-pager A4 portrait (format 1 slide) sur [SUJET].

Audience : [DIRECTEUR]. Temps de lecture : 90 secondes.

Contexte : [coller toutes les données, ne filtre pas, je veux que tu synthétises toi-même].

Structure BLUF :
- Header (en haut) : titre-phrase qui porte la conclusion
- Ligne 1 (sous le titre) : 1 chiffre hero + contexte en 10 mots
- Bloc gauche (50% largeur) : "Constat" — 3 points chiffrés
- Bloc droite (50% largeur) : "Recommandation" — 3 actions priorisées avec délai et responsable
- Footer : next step (décision demandée + délai)

Contraintes :
- Max 150 mots sur toute la slide
- Chaque chiffre avec source
- Hiérarchie visuelle forte (le titre se lit à 2 mètres)
- Zéro jargon
- Une seule typographie (Inter), poids variables
- 2 couleurs max (ta couleur principale + noir)
```

## Exemple d'input à remplacer

- **Sujet** : migrer CRM Salesforce → HubSpot en 2027 ?
- **Destinataire** : CEO
- **Données** : Salesforce 380K€/an, HubSpot 220K€/an, satisfaction 5,2 vs 8,1/10, migration 95K€, ROI 14 mois

## Exemple d'output attendu (header)

**Titre** : "Migrer vers HubSpot en 2027 économise 160K€/an et rembourse la transition en 14 mois"

**Chiffre hero** : "+42% ROI · Payback 14 mois"
