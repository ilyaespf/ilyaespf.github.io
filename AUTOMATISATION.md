# Règles de la mise à jour automatique

Ce fichier décrit ce que fait la tâche planifiée qui alimente le portfolio. Elle le relit à chaque exécution.

## 1. Veille (toutes les deux semaines)

1. Lire les articles déjà publiés dans `src/veille/articles/` pour éviter les doublons et repérer l'axe le moins couvert récemment.
2. Chercher l'actualité cybersécurité des 15 derniers jours, en priorité en France, auprès de sources fiables : ANSSI et CERT-FR, CNIL, Cybermalveillance.gouv.fr, Le Monde Informatique, IT-Connect, LeMagIT, Next, BleepingComputer.
3. Choisir **un** sujet marquant, de préférence dans l'axe le moins couvert, et intéressant pour un technicien systèmes et réseaux.
4. Recouper les faits sur au moins deux sources. Ne rien inventer : pas de chiffre, de date ou de nom qui ne figure pas dans les sources.
5. Rédiger l'article en français, avec ses propres mots (aucune phrase recopiée), au format du README :
   - « Les faits » : 2 à 4 paragraphes courts.
   - « Ce que j'en retiens » : 2 à 4 puces orientées métier SISR (configuration, bonnes pratiques, réflexes).
   - Sources : 2 ou 3 liens.
6. Ajouter le fichier, construire le site (`npm run build`) pour vérifier qu'il n'y a pas d'erreur, puis publier.

## 2. Vérification (à chaque exécution)

- Construire le site et vérifier qu'aucun lien interne n'est cassé.
- Signaler à Ilyaes ce qui manque pour l'épreuve E5 : compétence couverte par aucune réalisation, fiche sans compétences, fiche sans preuve.

## 3. Nouvelles réalisations (quand Ilyaes envoie un compte rendu)

- Créer la fiche à partir du compte rendu uniquement, sans rien inventer.
- Proposer les compétences E5 couvertes et les faire valider par Ilyaes.

## Ce qui ne se fait jamais automatiquement

- Modifier le CV, les coordonnées ou les compétences E5 d'une réalisation sans accord d'Ilyaes.
- Supprimer du contenu.
