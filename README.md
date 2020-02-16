# BibliothequeHenripotier

Application web d'une bibliothèque d'Henri Potier développée avec le Framework [Angular](https://v8.angular.io/docs) en version 8.2.14.

## Lancement de l'application

Il faut avoir au moins la version 12 du nodeJS pour faire marcher l'application.

Après avoir cloner le répo, il faut lancer la commande `npm install` pour installer tous les packages et les dépendances utiles.

Pour lancer l'application, il faut lancer le script start avec la commande `npm run start`.

L'application marche sur Chrome et Firefox mais pas sur Internet Explorer. Il suffit juste d'ajouter les polyfills nécessaires dans le fichier `pollyfill.ts` pour que ça marche sur Internet Explorer.

## Lancement des tests unitaires

Les test unitaires on été développé avec le language [Jasmine](https://jasmine.github.io/).

[Karma](https://jasmine.github.io/) a été utilisé pour exécuter les tests.

Pour lancer les tests unitaires et voir le taux de couverture, lancer le script test avec la commande `npm run test`.

Les taux de couverture de l'application sont exprimés par ces chiffres: 
`Statements   : 100% ( 177/177 )`
`Branches     : 95.83% ( 23/24 )`
`Functions    : 100% ( 39/39 )`
`Lines        : 100% ( 146/146 )`

## Build de l'application

Exécutez le script build `npm run build` pour builder l'application. Les artefacts de construction seront stockés dans le répertoire `dist /`.

## Déscription de l'application

L'application comprend deux interfaces et header :

- La première permet d’afficher les livres que l’on souhaite acheter et d’effectuer une recherche libre.
- La seconde récapitule le panier où sera appliquée la meilleure offre commerciale possible.
- Header qui contient le titre de l'application `Bibliothèque d'Henri Potier` qui permet de naviguer vers la première interface et une icone de panier avec le nombre d'article dedans qui permet de naviguer vers la seconde interface.
