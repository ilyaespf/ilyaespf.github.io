---
title: "VPN Check Point : une faille critique exploitée pendant un mois avant d'être corrigée"
resume: La vulnérabilité CVE-2026-50751 permettait d'ouvrir une session VPN sans mot de passe sur les passerelles Check Point qui acceptent encore le protocole IKEv1.
date: 2026-06-09
axe: 2
sources:
  - titre: "Check Point VPN : faille CVSS 9,3 active 32 jours"
    media: Tech Insider
    url: https://tech-insider.org/fr/faille-checkpoint-vpn-cve-2026-50751/
  - titre: Bulletin mensuel de juin 2026
    media: CERT Santé
    url: https://cyberveille.esante.gouv.fr/sites/default/files/media/document/2026-07/CERT%20Sante_Bulletin_mensuel_juin-2026.pdf
  - titre: Avis de sécurité du CERT-FR
    media: cert.ssi.gouv.fr
    url: https://www.cert.ssi.gouv.fr/avis/
---
## Les faits

Le 8 juin 2026, Check Point a publié un correctif pour la vulnérabilité CVE-2026-50751, notée 9,3 sur 10. Le lendemain, le CERT-FR a diffusé l'avis CERTFR-2026-AVI-0650 et le CERT Santé a relayé l'alerte auprès des établissements de santé.

La faille touche les passerelles VPN Check Point (accès à distance et Mobile Access) configurées pour accepter IKEv1, un ancien protocole d'échange de clés. Un attaquant pouvait ouvrir une session VPN sans connaître le mot de passe d'un utilisateur, à condition que la passerelle n'exige pas de certificat machine.

D'après les analyses publiées, la faille était exploitée depuis le 7 mai, soit environ un mois avant le correctif. Plusieurs versions anciennes ne sont plus maintenues et ne recevront pas de correction : il faut migrer.

## Ce que j'en retiens

- Le VPN est la porte d'entrée du réseau pour les télétravailleurs, et donc une cible prioritaire. Il doit être mis à jour en premier.
- Garder un ancien protocole actif « au cas où » augmente la surface d'attaque. IKEv1 devrait être désactivé au profit d'IKEv2.
- Exiger un certificat machine en plus du mot de passe ajoute une barrière : ici, cela suffisait à bloquer l'attaque.
- Après le correctif, il faut relire les journaux du VPN pour repérer des connexions anormales pendant la période où la faille était exploitée.
