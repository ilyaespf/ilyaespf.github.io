---
title: "Des pirates prennent le contrôle des frigos de centaines de supermarchés français"
resume: Dans la nuit du 11 au 12 octobre 2026, des attaquants ont forcé le dégivrage des chambres froides d'environ 700 supermarchés via des régulateurs Danfoss exposés sur Internet.
date: 2026-10-12
axe: 1
sources:
  - titre: Cyberattaque des supermarchés et des systèmes de froid Danfoss
    media: IT-Connect
    url: https://www.it-connect.fr/cyberattaque-supermarches-froid-danfoss/
  - titre: Cyberattack shuts down refrigerators at French supermarkets
    media: BleepingComputer
    url: https://bleepingcomputer.com/news/security/cyberattack-shuts-down-refrigerators-at-french-supermarkets
  - titre: "700 supermarchés touchés : le froid connecté devient un risque métier"
    media: Quasa
    url: https://quasa.io/fr/media/700-supermarches-touches-le-froid-connecte-devient-un-risque-metier
---
## Les faits

Dans la nuit du dimanche 11 au lundi 12 octobre 2026, des attaquants ont pris la main à distance sur les régulateurs de froid Danfoss installés dans des supermarchés français, notamment chez Intermarché, Coopérative U et E.Leclerc. Les frigos et congélateurs ont été basculés en dégivrage forcé et leur température est montée jusqu'à 50 °C par endroits. Les magasins ont dû jeter une grande quantité de produits. Le gouvernement a évalué à environ 700 le nombre de magasins touchés.

Le CERT-FR a publié une alerte le 12 octobre, puis l'a élargie aux contrôleurs Copeland xWeb et Dixell xWeb après une seconde vague dans la nuit du 12 au 13. Selon Danfoss, la plupart des appareils visés sont anciens et ne reçoivent plus de mises à jour. Des milliers de ces interfaces étaient directement accessibles sur Internet.

Le 21 octobre, devant le Sénat, le directeur général de l'ANSSI a attribué ces attaques à des défauts de sécurité élémentaires : équipements exposés sur Internet et mots de passe faibles.

## Ce que j'en retiens

- Les équipements industriels connectés (froid, chauffage, automates) font partie du système d'information et doivent être inventoriés et protégés.
- Les recommandations du CERT-FR sont des bases du métier : ne jamais exposer une interface d'administration sur Internet, passer par un VPN, changer les mots de passe par défaut et contrôler les accès des prestataires.
- Un équipement qui ne reçoit plus de mises à jour doit être isolé ou remplacé.
- Dans un magasin, c'est une alerte de supervision qui a permis d'intervenir avant de perdre les produits : la supervision limite les dégâts.
