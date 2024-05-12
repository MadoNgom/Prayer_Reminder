# Prayer Reminder

Prayer Reminder est une application de suivi des 5 prières quotidiennes, pratique pour les musulmans qui souhaitent maintenir une connexion spirituelle. Plus accessible et motivante, elle favorise ainsi une pratique religieuse consciente et régulière. Avec une interface simple et intuitive, elle permet de suivre leurs prières de manière organisée.

## Les fonctionnalitée

- **Ajouter une Prière** : Appuyez sur le bouton "Add Prayer" pour ajouter une nouvelle prière. Remplissez le formulaire en spécifiant l'heure et le type de prière, puis appuyez sur le bouton "Ajouter" pour enregistrer la prière.

- **Supprimer une Prière** : Sélectionnez la prière à supprimer en cochant le bouton radio correspondant. Après une attente de deux secondes, la prière sera supprimée automatiquement.

- **Modifier une Prière** : Appuyez sur le bouton "Edit Prayer" pour modifier les détails d'une prière, comme l'heure ou le type. Effectuez les modifications nécessaires dans le formulaire et appuyez sur "Enregistrer" pour valider les changements.

- **Consulter l'Histoire des Prières** : Lorsque vous accédez à la page, vous trouverez une liste des prières à effectuer pour la journée.

## Backend (API) server.js

- Node.js
- Express
- MySQL
- Body-parser
- Cors
- Nodemon

## Frontend Home component

- AngularJ
- Css

## Utilisation

### Clonage du Repository

1. La première étape consiste à cloner le repository sur votre machine locale en utilisant la commande suivante :

`git clone https://github.com/MadoNgom/Prayer_Reminder`

2.  Changez votre répertoire courant pour le répertoire "prayerApi" dans le projet "Prayer_ReminderApp" en utilisant la commande suivante

`cd Prayer_ReminderApp/prayerApi` 3. Importer et démarrer votre serveur de base de données: Vous pouvez importer le fichier de base de données "dbprayer" dans votre environnement de serveur local préféré tel que Lamp, XAMPP ou WAMP. Assurez-vous de démarrer le serveur.

4. Lancez le serveur de développement de l API en utilisant la commande suivante :

   ```bash
   ` npm run dev `
   ```

5. Après le lancement du serveur, l'API sera accessible à l'adresse suivante :
   `http://localhost:5000/api/prayer`

- vous pouvez tester cette api sur postman

6.  Pour Ajouter un record on utilise
    `http://localhost:5000/api/prayer/add`
7.  Pour supprimer un record on utilise
    `http://localhost:5000/api/prayer/delete/id`
8.  Pour Editer un Record on utilise
    `http://localhost:5000/api/prayer/edit/id`

# Utilisation Partie Front end du Projet

Après avoir lancé le serveur de développement de l'API, vous pouvez accéder au projet et lancer le serveur frontend pour voir le site en ligne. Voici les étapes à suivre :

1. Ouvrez un nouveau terminal.
2. Accédez au répertoire du projet "Prayer_ReminderApp" en utilisant la commande suivante :
   ```bash
   ` ng serve `
   ```
3. Toutes fois si tous ces étapes ne sont pas claires, dans le dossier "assets" se trouve un dossier nommé "APERCU". Vous y trouverez deux vidéos qui montrent les étapes à suivre et un aperçu du projet côté Backend et Frontend.
   `cd assets/APERCU`
4. À noter que le projet est toujours en développement de nouvelles fonctionnalités et bonnes pratiques sont attendues
5. Demo
   ![Prayer Reminder](../Prayer_ReminderApp/src/assets/DEMO.png)

## Merci Beaucoup de votre attention 😍
