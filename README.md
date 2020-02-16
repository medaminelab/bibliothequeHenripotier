# BibliothequeHenripotier

Application web d'une bibliothèque d'Henri Potier développée avec le Framework [Angular](https://v8.angular.io/docs) en version 8.2.14.

## Lancement de l'application

Afin de lancer l'application, il faut avoir au moins la version 12 du nodeJS.

Après avoir cloner le répo, il faut lancer la commande `npm install` pour installer tous les packages et les dépendances utiles.

Pour lancer l'application, il faut exécuter le script start avec la commande `npm run start`.

L'application est compatible avec les deux navigateurs Chrome et Firefox.

## Lancement des tests unitaires

Les tests unitaires on été développés avec le language [Jasmine](https://jasmine.github.io/).

[Karma](https://jasmine.github.io/) a été utilisé pour exécuter les tests.

Pour lancer les tests unitaires et voir le taux de couverture, exécuter le script test avec la commande `npm run test`.

Les taux de couverture de l'application sont exprimés par ces chiffres: 
`Statements   : 100% ( 177/177 )`
`Branches     : 95.83% ( 23/24 )`
`Functions    : 100% ( 39/39 )`
`Lines        : 100% ( 146/146 )`

## Build de l'application

Exécutez le script build `npm run build` pour builder l'application. Les artefacts de construction seront stockés dans le répertoire `dist /`.

## Description de l'application

L'application comprend deux interfaces avec un header :

- La première IHM permet d’afficher les livres qu'on souhaite acheter et d’effectuer une recherche libre.
- La seconde IHM récapitule le panier où sera appliquée la meilleure offre commerciale possible.
- Le Header qui contient le titre de l'application `Bibliothèque d'Henri Potier` qui permet de naviguer vers la première interface et une icone de panier avec le nombre d'articles dedans qui permet de naviguer vers la seconde interface.
