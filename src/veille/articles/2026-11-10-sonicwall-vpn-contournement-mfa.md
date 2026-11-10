---
title: "VPN SonicWall : une faille exploitée permet de se connecter sans passer par la double authentification"
resume: "Le 6 novembre 2026, SonicWall a corrigé la faille CVE-2026-19868 de son VPN SSL. Quand l'authentification passe par SAML, un attaquant qui possède un mot de passe valide peut ouvrir une session sans le second facteur. Des attaques sont déjà en cours."
date: 2026-11-10T08:50:00+01:00
evenement: 6 novembre 2026
axe: 2
sources:
  - titre: "SonicWall : une faille dans le VPN SSL permet de contourner le MFA et elle est exploitée"
    media: IT-Connect
    url: https://www.it-connect.fr/sonicwall-vpn-ssl-faille-saml-mfa-cve-2026-19868/
  - titre: Exploited SonicWall SSL-VPN flaw lets attackers bypass SAML-enforced MFA (CVE-2026-19868)
    media: Help Net Security
    url: https://www.helpnetsecurity.com/2026/11/09/exploited-sonicwall-ssl-vpn-flaw-lets-attackers-bypass-saml-enforced-mfa-cve-2026-19868/
  - titre: Bulletin de sécurité SonicWall (AV26-1133)
    media: Centre canadien pour la cybersécurité
    url: https://cyber.gc.ca/fr/alertes-avis/bulletin-securite-sonicwall-av26-1133
---
## Les faits

Le 6 novembre 2026, SonicWall a publié des mises à jour de SonicOS, le système de ses pare-feu, qui corrigent sept vulnérabilités. La plus grave en pratique est la CVE-2026-19868 (score CVSS de 7,1). Elle touche le VPN SSL lorsque la connexion des utilisateurs passe par SAML, c'est-à-dire par un fournisseur d'identité externe comme Microsoft Entra ID ou Okta. Dans ce cas, une personne qui dispose d'identifiants valides pour une autre méthode d'authentification peut contourner le contrôle SAML, et donc aussi la double authentification (MFA) imposée par ce biais.

La faille n'est pas qu'une hypothèse : SonicWall dit avoir enquêté sur un signalement d'exploitation, et l'agence américaine CISA l'a ajoutée le jour même à son catalogue des vulnérabilités activement exploitées. Aucun détail sur les attaques ni aucun indicateur de compromission n'a été publié pour l'instant.

Les pare-feu Gen7 (TZ, NSa, NSsp, NSv) en version 7.3.3-7015 ou antérieure et les Gen8 en version 8.2.2-8015 ou antérieure sont concernés, qu'il s'agisse de boîtiers physiques ou virtuels. Les versions corrigées sont la 7.3.4-7013 et la 8.2.3-8015. Il n'existe aucune mesure de contournement : il faut mettre à jour. Les pare-feu Gen6, qui ne sont plus maintenus, ne figurent pas dans la liste.

Ce n'est pas la première fois que le VPN SSL de SonicWall est visé : des groupes de rançongiciel, dont Akira, ont déjà exploité d'anciennes failles de ces pare-feu pour pénétrer dans des réseaux d'entreprise.

## Ce que j'en retiens

- La double authentification protège seulement si elle ne peut pas être évitée. Sur un VPN, il faut désactiver les méthodes d'authentification qui ne servent plus (comptes locaux, LDAP ou RADIUS sans second facteur) pour qu'il n'existe qu'un seul chemin de connexion.
- Les pare-feu et les VPN sont exposés sur Internet par nature : il faut suivre les avis des éditeurs et du CERT-FR, et appliquer rapidement les correctifs, surtout quand une faille est déjà exploitée.
- Après une telle faille, il faut vérifier les journaux : comparer les connexions VPN réussies avec celles enregistrées par le fournisseur d'identité, puis réinitialiser les mots de passe des comptes suspects.
- Un équipement en fin de support, comme les Gen6, ne recevra plus de correctifs : il doit être planifié pour remplacement.
