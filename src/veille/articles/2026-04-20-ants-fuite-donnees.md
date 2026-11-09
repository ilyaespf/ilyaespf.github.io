---
title: "ANTS : 11,7 millions de comptes exposés à cause d'une faille de contrôle d'accès"
resume: Le portail de l'Agence nationale des titres sécurisés, utilisé pour les cartes d'identité, passeports, permis et cartes grises, a subi une fuite massive de données personnelles.
date: 2026-04-20
axe: 3
sources:
  - titre: Cyberattaque à l'ANTS, près de 12 millions de comptes touchés, le site fermé
    media: Siècle Digital
    url: https://siecledigital.fr/2026/04/27/cyberattaque-a-lants-pres-de-12-millions-de-comptes-touches-le-site-ferme/
  - titre: L'ANTS piratée à cause d'une faille basique
    media: Korben
    url: https://korben.info/ants-piratee-faille-basique-19-millions-francais.html
  - titre: Fuite de l'ANTS, un ado de 15 ans en garde à vue
    media: Next
    url: https://next.ink/brief_article/fuite-de-lants-un-ado-de-15-ans-en-garde-a-vue-ce-nest-pas-un-prodige-cest-un-signal/
---
## Les faits

Le 15 avril 2026, l'ANTS (devenue France Titres) a détecté un incident de sécurité sur son portail, qui sert aux démarches pour les cartes d'identité, les passeports, les permis de conduire et les cartes grises. Le 20 avril, le ministère de l'Intérieur a confirmé que 11,7 millions de comptes de particuliers et de professionnels étaient concernés.

Les données exposées comprennent le nom, les prénoms, la date et le lieu de naissance, l'adresse email et l'identifiant de connexion, ainsi que l'adresse postale et le téléphone pour une partie des comptes. Les mots de passe et les données bancaires ne font pas partie de la fuite. Le site a été mis en maintenance le 24 avril au soir. Le parquet de Paris a été saisi et l'enquête confiée à l'Office anti-cybercriminalité. Un adolescent de 15 ans a été placé en garde à vue.

Selon plusieurs analyses, la faille exploitée est une IDOR (référence directe à un objet non sécurisée) : il suffisait de modifier un identifiant dans une requête pour accéder aux données d'un autre usager, car le serveur ne vérifiait pas que la personne avait le droit de les consulter.

## Ce que j'en retiens

- La faille IDOR est une erreur de contrôle d'accès, la première catégorie du Top 10 de l'OWASP. Toute application web doit vérifier côté serveur que l'utilisateur a le droit d'accéder à chaque donnée demandée, pas seulement qu'il est connecté.
- C'est une faille simple à exploiter mais aussi à éviter, d'où l'intérêt de tests de sécurité avant la mise en production.
- Ces données servent ensuite à des arnaques très crédibles, comme le faux conseiller bancaire qui connaît votre date de naissance.
