# Evaluation pratique

## Objectifs

- En équipe de deux, vous allez devoir implémenter un jeu du Serpent (version jeu de plateau). Vous pouvez choisir un autre jeu si vous le souhaitez, mais attention à ne pas prendre quelque chose d'existant, car je vais regarder votre utilisation de git et vos commits (+ gestion des branches)

- Pour info l’interface n’a pas à être jolie (même si ce serait appréciable), elle doit juste vous permettre de réaliser les opérations qui sont décrites ci-dessous.

- L'objectif côté est d'avoir un repository propre avec des bonnes pull request, branches, etc...
- L'objectif côté CI sera d'avoir un build, un linter et le lancement de tests automatisés
- L'objectif côté CD sera de déployer en continue à chaque push (Soit sur un serveur perso, soit sur un outil comme heroku / render / autre)

## Fonctionnalités premières

Voici les fonctionnalités attendues par votre jeu du serpent :
-Lancé de dé (1-6) aléatoire
-Jeu au tour par tour, chaque joueur lance un dé lors de son tour
-Déplacement des joueurs en fonction du nombre sorti par le dé (1-6)
-Si le joueur dépasse 50, il revient automatiquement à la case 25
-Ajoutez des cases pièges, par exemple la 37 fait redescendre à la 12, la 14 fait revenir à la 7 et la 46 fait revenir à la case 33 (Mettez les valeurs que vous voulez)
-Ajoutez des cases bonus, par exemple la 20 fait monter à la case 35, la 2 fait monter à la case 17 et la 31 fait monter à la 43 (Mettez les valeurs que vous voulez)
-La partie se termine lorsqu’un joueur arrive à la case 50, il gagne donc la partie ! Le vainqueur est affiché et on peut revenir à l'écran pour relancer une autre partie.

## Fonctionnalités supplémentaires à implémenter (Bonus !)

Le but ici est de rajouter des fonctionnalités pour rajouter des tests au fur et à mesure de l'évolution du produit :

- Ajoutez un dé (1-3) supplémentaire lors des 5, 10, 15, 20, 25… ème tours, pour chaque joueur.
- Générez aléatoirement les cases pièges et les cases bonus (en étant cohérent, pas de case redondante dans les cases choisies, en étant positif sur un bonus, etc…)
- Proposez de jouer une partie complète avec X dés,
- Ajoutez le paramétrage de la taille du plateau en début de partie (Laissez choisir l'utilisateur parmis des limites bornées (ex : 20-200), adaptez les règles automatiquement à la taille du plateau (ex : S'il dépasse 200, il revient à la case 100))
- Implémenter votre jeu pour plus que 2 joueurs, allez jusqu’à 5 joueurs par exemple. Si vous avez bien pensé votre modèle, le plus long sera de modifier l’interface pour y afficher les 5 joueurs et leur score.
- Bien entendu, les tests unitaires de ces fonctionnalités doivent également être implémentées.

## Notation

- La notation se fera sur la partie git / CI / CD de votre projet.
- Bon courage et bons dévs à toutes et à tous !

## Délai

- Vous devrez donner accès à votre repo github pour le 08/07/2024
- Donnez également accès à votre jeu en ligne (lien vers le jeu)
