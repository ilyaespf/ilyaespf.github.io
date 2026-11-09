# Portfolio d'Ilyaes Satirer, BTS SIO SISR

Site statique généré avec [Eleventy](https://www.11ty.dev/) et publié automatiquement sur GitHub Pages à chaque push sur `main`.

## Lancer le site en local

```bash
npm install
npm run serve   # http://localhost:8080
```

## Où se trouve le contenu

| Contenu | Emplacement |
|---|---|
| Infos générales (nom, contact, session, liens des documents) | `src/_data/site.json` |
| Réalisations (une fiche = un fichier) | `src/realisations/*.md` |
| Articles de veille | `src/veille/articles/AAAA-MM-JJ-titre-court.md` |
| Axes de veille | `src/_data/axes.json` |
| Compétences E5 | `src/_data/competencesE5.json` |
| Documents (tableau Excel, attestations PDF) | `src/assets/docs/` |
| Captures d'écran (preuves) | `src/assets/preuves/<nom-de-la-realisation>/` |
| CV | `src/cv/index.njk` |

Le tableau de synthèse de la page E5 est généré automatiquement à partir du champ `competences` de chaque réalisation.

## Ajouter une réalisation

Créer `src/realisations/nom-court.md` :

```markdown
---
title: Titre de la réalisation
resume: Une ou deux phrases qui résument ce qui a été fait.
categorie: reseau        # reseau | bdd | web | pro | devpro
ordre: 11                # position dans la liste
contexte: TP en formation, BTS SIO
periode: Octobre 2026     # facultatif
outils: [Windows Server 2022, Active Directory]
competences: [patrimoine, service]   # patrimoine | incidents | presence | projet | service | devpro
---
## Objectif
...

## Ce que j'ai réalisé
...

![Description de la capture](/assets/preuves/nom-court/capture-1.png)
```

Mettre `publie: false` dans l'en-tête pour garder une fiche en brouillon.

## Ajouter un article de veille

Créer `src/veille/articles/AAAA-MM-JJ-titre-court.md` :

```markdown
---
title: Titre de l'article
resume: Résumé en une ou deux phrases.
date: 2026-11-23
evenement: 20 novembre 2026   # date des faits, facultatif
axe: 1                         # 1 attaques | 2 réseaux | 3 données
sources:
  - titre: Titre de la source
    media: Nom du média
    url: https://...
---
## Les faits
...

## Ce que j'en retiens
...
```

Voir `AUTOMATISATION.md` pour les règles suivies par la mise à jour automatique.
