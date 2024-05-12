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

La première étape consiste à cloner le repository sur votre machine locale en utilisant la commande suivante :

```bash
git clone https://github.com/MadoNgom/Prayer_Reminder

Pour accéder au répertoire "prayerApi" dans le projet "Prayer_ReminderApp", vous pouvez utiliser la commande suivante :

`cd Prayer_ReminderApp/prayerApi`

Après le lancement du serveur, l'API sera accessible à l'adresse suivante :
* Vous pouvez  importer dbprayer sur Lamp , xamp ou Wamp et allumer le serveur
* Lancez le serveur de développement de l API en utilisant la commande suivante :
`npm run dev`
* Après le lancement du serveur, l'API sera accessible à l'adresse suivante :
`http://localhost:5000/api/prayer`
* vous pouvez tester cette api sur postman
* Pour Ajouter un record  on utilise
`http://localhost:5000/api/prayer/add`
* Pour supprimer un record on utilise
`http://localhost:5000/api/prayer/delete/id`
Pour Editer un Record on utilise
`http://localhost:5000/api/prayer/edit/id`
```

# Utilisation du Projet

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
