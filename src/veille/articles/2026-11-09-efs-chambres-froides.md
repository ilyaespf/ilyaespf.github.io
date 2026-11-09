---
title: "Établissement français du sang : des pirates modifient la température des congélateurs à plasma"
resume: Dans la nuit du 1er au 2 novembre 2026, des attaquants ont pris le contrôle du système qui pilote les chambres froides de trois sites de l'EFS, via son prestataire Coolworld.
date: 2026-11-09T10:00:00+01:00
evenement: 2 novembre 2026
axe: 1
sources:
  - titre: Cyberattack hits French blood bank site but no blood products are compromised
    media: Associated Press
    url: https://www.clickondetroit.com/news/world/2026/11/04/cyberattack-hits-french-blood-bank-site-but-no-blood-products-are-compromised/
  - titre: "Cyberattaque contre un prestataire de l'EFS : des congélateurs de plasma réglés à 110 °C"
    media: IT-Connect
    url: https://www.it-connect.fr/cyberattaque-efs-coolworld-congelateurs-plasma/
  - titre: Cyberattack disrupts blood storage refrigeration systems in France
    media: BleepingComputer
    url: https://bleepingcomputer.com/news/security/cyberattack-disrupts-blood-storage-refrigeration-systems-in-france
---
## Les faits

Dans la nuit du 1er au 2 novembre 2026, des attaquants ont modifié les réglages des chambres froides de trois sites de l'Établissement français du sang (EFS) qui conservent du plasma. Les seuils de température et de dégivrage ont été portés à des valeurs très élevées : selon Le Canard enchaîné, la consigne de congélateurs maintenus à −30 °C aurait été réglée à 110 °C. Il s'agit de la valeur demandée au régulateur, pas d'une température réellement atteinte.

L'EFS n'était pas directement visé. Les attaquants sont passés par Coolworld, le prestataire qui gère ces équipements frigorifiques à distance. Coolworld explique que la faille se trouvait dans un composant fourni par un tiers.

Un technicien de permanence a repéré la hausse de température pendant la nuit. Les poches de plasma ont été déplacées ou mises à l'abri, et aucun produit sanguin n'a été perdu. L'ANSSI et le ministère de la Santé enquêtent.

Cette attaque ressemble à celle de la mi-octobre, qui avait visé les frigos et congélateurs de centaines de supermarchés en France, en Belgique et aux Pays-Bas. Le 21 octobre, devant le Sénat, le directeur général de l'ANSSI avait attribué ces attaques à des défauts de sécurité élémentaires : des équipements frigorifiques directement exposés sur Internet et des mots de passe faibles. Rien ne permet pour l'instant d'affirmer que les auteurs sont les mêmes.

## Ce que j'en retiens

- Les objets connectés industriels (frigos, chaudières, caméras, automates) font partie du système d'information. Ils doivent être inventoriés et protégés comme les serveurs.
- Ces équipements ne doivent jamais être directement accessibles depuis Internet. Il faut les isoler dans un réseau séparé (VLAN dédié, filtrage par pare-feu) et passer par un VPN pour les administrer à distance.
- Le risque vient souvent d'un prestataire. Quand une entreprise confie la maintenance à distance à un tiers, elle doit vérifier comment ce tiers sécurise ses accès.
- La supervision a joué son rôle : c'est l'alerte de température qui a permis de réagir à temps.
