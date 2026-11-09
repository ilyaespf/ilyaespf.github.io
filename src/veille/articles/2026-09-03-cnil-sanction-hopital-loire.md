---
title: "La CNIL inflige 500 000 euros d'amende à un hôpital qui avait négligé des mesures de sécurité de base"
resume: Un seul compte compromis a permis à un attaquant de consulter les données de tous les patients de l'Hôpital privé de la Loire. Pas de VPN, pas de double authentification, pas de détection.
date: 2026-09-03
axe: 3
sources:
  - titre: "Violation de données en matière de santé : sanction de 500 000 euros à l'encontre de l'Hôpital privé de la Loire"
    media: CNIL
    url: https://cnil.fr/fr/sanction-hopital-prive-loire
  - titre: "L'Hôpital privé de Loire sanctionné pour absence de « mesures élémentaires de sécurité »"
    media: Next
    url: https://next.ink/254472/lhopital-prive-de-loire-sanctionne-pour-absence-de-mesures-elementaires-de-securite/
  - titre: "Données de santé : la CNIL sanctionne un hôpital où un seul compte permettait d'accéder à tous les patients"
    media: Solutions Numériques
    url: https://www.solutions-numeriques.com/donnees-de-sante-la-cnil-sanctionne-un-hopital-ou-un-seul-compte-permettait-dacceder-a-tous-les-patients/
---
## Les faits

Le 3 septembre 2026, la CNIL a rendu publique une amende de 500 000 euros contre l'Hôpital privé de la Loire, du groupe Ramsay Santé. À l'été 2025, un attaquant s'était connecté à son dossier patient informatisé (DPI) avec les identifiants d'un seul compte utilisateur et avait extrait les données de plus de 524 000 patients et de 202 000 personnes de confiance désignées par eux.

La CNIL a relevé plusieurs manquements de sécurité élémentaires. Les utilisateurs externes, comme les médecins libéraux, se connectaient à distance sans VPN ni double authentification. Un seul compte donnait accès aux données de tous les patients. Aucun dispositif ne détectait une activité anormale, si bien que l'attaquant a pu extraire des données pendant plusieurs jours. Enfin, l'éditeur du logiciel disposait d'un accès permanent et non contrôlé aux données.

L'hôpital est aussi sanctionné pour ne pas avoir informé les 202 000 personnes de confiance concernées. Il doit terminer ses corrections dans un délai de trois à quinze mois.

## Ce que j'en retiens

- La CNIL ne sanctionne pas le fait d'avoir été attaqué, mais l'absence de mesures de sécurité adaptées : c'est l'obligation de moyens de l'article 32 du RGPD.
- Les mesures attendues sont des bases du métier SISR : VPN pour l'accès à distance, double authentification, droits limités à ce dont chaque utilisateur a besoin, journalisation et alertes.
- L'accès d'un prestataire doit être ouvert seulement quand c'est nécessaire, avec une autorisation préalable, et pas en permanence.
