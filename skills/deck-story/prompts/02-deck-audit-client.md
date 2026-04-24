# Prompt 2 — Deck d'audit client (SCR)

**Use case** : restituer les findings d'un audit (IA, SEO, opérationnel, organisationnel) à un client.

**Framework** : Situation → Complication → Résolution.

**Audience type** : CODIR client. Durée : 45-60 min.

---

## Le prompt

```
Rôle : tu es un consultant senior qui restitue un audit à un CODIR client.

Mission : générer un deck de 12 slides présentant les résultats de l'audit [TYPE D'AUDIT] réalisé chez [CLIENT].

Audience : CODIR [CLIENT] — [PROFILS : ex. CEO + COO + DRH]. Attentes : comprendre l'état actuel, les risques, et recevoir une roadmap actionnable.

Contexte : [coller ici les findings bruts, interviews, données quantitatives collectées].

Structure SCR :
- Slide 1 : cover + scope de l'audit
- Slides 2-4 : SITUATION — état actuel factuel (cartographie, chiffres clés, baseline)
- Slides 5-7 : COMPLICATION — les 3 problèmes majeurs identifiés, chiffrés et sourcés
- Slides 8-10 : RÉSOLUTION — recommandations priorisées (quick wins / moyen terme / long terme)
- Slide 11 : roadmap 3/6/12 mois
- Slide 12 : next steps + gouvernance proposée

Pour chaque slide :
1. Action title (phrase complète, 12 mots max)
2. 3 bullets max avec data points
3. Verbatim client quand pertinent (bloc citation)
4. Speaker note 45 secondes

Contraintes :
- Chaque problème chiffré en € ou en temps perdu
- Chaque reco liée à un problème identifié
- Zéro langue de bois — direct et factuel
- Mots interdits : disruptif, révolutionnaire, innovant, synergies, game-changer, next-gen
```

## Exemple d'input à remplacer

- **Type d'audit** : process IA
- **Client** : retailer 50 magasins
- **Findings** : 60% shadow IT, pas de gouvernance data, 12h/sem managers sur Excel, turnover 38%, 3 quick wins identifiés

## Exemple d'output attendu (slide 5)

**Action title** : "Le shadow IT expose 340K clients à un risque RGPD"
