---
title: "Cybersécurité des collectivités : la CNIL sanctionne dix organismes publics pour des failles d'hygiène informatique"
resume: "Le 9 novembre 2026, la CNIL a annoncé dix amendes contre des collectivités territoriales et un établissement public. En cause : pas de double authentification pour les administrateurs, des accès permanents laissés aux prestataires, des journaux inexploités, un réseau mal cloisonné et des serveurs sans mises à jour."
date: 2026-11-15T19:20:00+01:00
evenement: 9 novembre 2026
axe: 3
sources:
  - titre: "Cybersécurité des collectivités territoriales : la CNIL prononce dix sanctions"
    media: CNIL
    url: https://www.cnil.fr/fr/sanctions-cybersecurite-collectivites-territoriales
  - titre: "Sécurité des données : la Cnil prononce des sanctions contre des collectivités"
    media: Maire-info
    url: https://www.maire-info.com/cybermalveillance/securite-des-donnees-la-cnil-prononce-des-sanctions-contre-des-collectivites-art26-31271
  - titre: "Cybersécurité : alors que le projet de loi NIS2 est enfin débattu, la Cnil inflige des amendes à 10 collectivités"
    media: Banque des Territoires (Localtis)
    url: https://www.banquedesterritoires.fr/cybersecurite-alors-que-le-projet-de-loi-nis2-est-enfin-debattu-la-cnil-inflige-des-amendes-10
---
## Les faits

Le 9 novembre 2026, la CNIL a rendu publiques dix sanctions financières visant des collectivités territoriales et un établissement public. Elles font suite aux contrôles menés en 2025, année où la sécurité informatique des collectivités était l'un de ses thèmes prioritaires : communes, départements, régions et leurs sous-traitants ont été inspectés. Les amendes, prononcées selon la procédure simplifiée, vont de 3 000 à 20 000 euros, ce dernier montant étant le plafond de cette procédure. Les noms des organismes ne sont pas publiés.

Les reproches portent sur l'obligation de sécuriser les données (article 32 du RGPD) et relèvent surtout de l'hygiène informatique de base. Les accès à distance des agents, notamment en télétravail, n'étaient pas assez protégés, et les comptes administrateurs n'avaient pas de double authentification (MFA). Les éditeurs de logiciels disposaient d'un accès permanent au réseau, sans validation au cas par cas, parfois avec un compte partagé entre plusieurs de leurs salariés.

La CNIL a aussi constaté une journalisation incomplète ou des journaux qui n'étaient pas exploités rapidement, un réseau insuffisamment cloisonné qui aurait permis à un intrus de passer d'une zone à l'autre, des serveurs sous des systèmes d'exploitation qui ne reçoivent plus de correctifs, et des mots de passe faibles, parfois envoyés en clair aux usagers. Plusieurs téléservices avaient été mis en service sans homologation de sécurité, pourtant exigée par le référentiel général de sécurité (RGS). Certaines collectivités avaient déjà subi des violations de données que ces mesures auraient pu éviter.

Ces sanctions tombent alors que le projet de loi qui transpose la directive européenne NIS2 est en discussion à l'Assemblée nationale. Ce texte va imposer de nouvelles obligations de cybersécurité à de nombreuses collectivités.

## Ce que j'en retiens

- La double authentification doit être obligatoire sur tous les accès à distance (VPN, messagerie, télétravail) et en priorité sur les comptes administrateurs, qui donnent les clés de tout le système d'information.
- Les accès des prestataires doivent être nominatifs, ouverts seulement le temps de l'intervention puis refermés, et tracés : un compte partagé et toujours actif est une porte d'entrée idéale pour un attaquant.
- Collecter des journaux ne suffit pas : il faut les centraliser (serveur syslog, SIEM) et les consulter régulièrement, sinon une intrusion passe inaperçue. Le cloisonnement en VLAN avec filtrage entre les zones limite la propagation d'une attaque.
- Un serveur dont le système n'est plus maintenu doit être recensé dans l'inventaire et sa migration planifiée : pour la CNIL, laisser tourner un système obsolète est une faute, pas un simple retard.
