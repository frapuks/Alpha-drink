# ALPHA DRINK

Application privée pour la gestion d'une carte de boissons.

[=> Sommaire du projet](Docs/0-Sommaire.md)

# Technologies utilisées

- Node
- Express
- Express-session
- PostgreSQL
- Ejs
- Bcrypt
- CSS
- Javascript Vanilla

# Auteurs

- [François G.](https://github.com/frapuks) : Product owner
- [Hélène N.](https://github.com/helene-nguyen) : Wireframe / Brainstorming / Structure du projet

# Version

- v0 : conception du projet
- v1 (actuelle) : opérationnelle sur localhost

Prochaine version :
- séparation du Front et du Back
- création d'un api
- revue complète de la maquette
- création d'un logo
- possibilité de se créer un compte utilisateur
- fonctionnalités de recherche de boissons par critères

Github Project : [Kanban AlphaDrink](https://github.com/users/frapuks/projects/1/views/1)

# Ressources

- [mocodo.net](https://www.mocodo.net/)
- [figma.com](https://www.figma.com/)

# Lancement

1. Clonage du repo
2. Installer postgreSQL
3. Créer un role et un database
4. Utiliser le nom du role et de la database pour mettre à jour les scripts `dbCreate`, `dbSeed` dans le fichier `package.json`
5. Création du fichier `.env` à partir du fichier `.env.example`
6. Installation des packages avec la commande `npm i`
7. Créations des données dans la BDD avec la commande `npm run dbReset`
8. Lancement du serveur avec la commande `npm start`
9. Pour utiliser les fonctionnalités de l'admin, il faut insérer manuellement les données, le mot de passe doit être hashé avec bcrypt, et le role_id doit être égal à 1