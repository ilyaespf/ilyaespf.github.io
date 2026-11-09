---
title: "Pare-feu Stormshield : neuf failles corrigées, dont trois permettent de prendre le contrôle à distance"
resume: Le CERT-FR a publié l'avis CERTFR-2026-AVI-1021 sur neuf vulnérabilités du pare-feu Stormshield Network Security, très utilisé dans les administrations françaises.
date: 2026-08-14
axe: 2
sources:
  - titre: "Stormshield SNS : quatrième avis CERT-FR de l'année, neuf failles dont une exécution de code à distance"
    media: Leto
    url: https://www.leto.legal/news/stormshield-sns-vulnerabilites-certfr-avi-1021-2026
  - titre: Avis de sécurité du CERT-FR
    media: cert.ssi.gouv.fr
    url: https://www.cert.ssi.gouv.fr/avis/
---
## Les faits

Le 14 août 2026, le CERT-FR (la cellule opérationnelle de l'ANSSI) a publié l'avis CERTFR-2026-AVI-1021. Il porte sur neuf vulnérabilités de Stormshield Network Security (SNS), la gamme de pare-feu de l'éditeur français Stormshield, très présente dans les administrations et les collectivités.

Trois de ces failles permettent d'exécuter du code à distance. Les autres peuvent provoquer un déni de service ou porter atteinte à la confidentialité des données. Les versions corrigées sont les 3.7.45, 4.3.44, 4.8.18, 5.0.8 et 5.1.2, selon la branche utilisée.

C'est le quatrième avis du CERT-FR sur l'écosystème Stormshield depuis le début de l'année, après des alertes sur sa console d'administration (Stormshield Management Center) en avril et en juin, et une faille critique de SNS en mai.

## Ce que j'en retiens

- Le pare-feu est censé protéger le réseau, mais c'est aussi un équipement exposé sur Internet. S'il est compromis, l'attaquant contrôle le filtrage, les tunnels VPN et peut intercepter le trafic.
- La bonne pratique pour un administrateur : tenir un inventaire des versions installées sur chaque équipement, s'abonner aux avis du CERT-FR et des éditeurs, et appliquer en priorité les correctifs sur les équipements exposés.
- Après la mise à jour, il faut aussi vérifier les journaux : une faille a pu être exploitée avant la publication du correctif.
