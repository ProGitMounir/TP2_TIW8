# Mounir TIW8 - TP2 Application de Présentation multi-surface en React

- Une application React qui permet d'ajouter, supprimer des questions personnalisées à des événements ( intitulé, couleur, autheur...).
- Augmenter les votes des questions
- Detections de gestes

## 🚀 Fonctionnalités

- Option chez le participant pour ajouter les questions
- Personnalisation des questions (auteur, couleur, contenue)
- Option chez l'admin pour supprimer les questions
- Lorsqu’on utilise un appareil mobile et qu’on tente d’accéder à /admin, on est automatiquement redirigé vers /participant
- Navigation entre les événements
- Gestion via Redux
- Détection de geste

---

## 🛠️ Installation

### 1. Cloner le projet

          git clone https://github.com/ProGitMounir/TP2_TIW8.git

## ⚠️ Se mettre dans la branche mounir-dev ⚠️⚠
![brancheMounirDev](https://github.com/user-attachments/assets/1a5ce34b-ef74-4079-ae2c-1be263ac2c08)

### 2. Installer les dépendances
      cd Server
      cd src
      yarn install
      cd ..
      cd Client
      npm install
      yarn build
      

## ▶️ Lancer le projet en développement
    # Lancer le serveur backend
        cd Server
        cd src
        yarn start  

    # Dans un autre terminal, lancer le frontend
        cd Client
        npm run dev

Le projet sera disponible sur http://localhost:5173 (ou selon Vite).


## 🗂️ Structure du projet
       my-project/
      ├── client/                # Frontend React
      │   ├── src/
      │   │   ├── assets/         # Images ... etc.
      │   │   ├── components/     # Composants réutilisables
      │   │   ├── pages/          # Pages principales (routes)
      │   │   ├── slices/         # Redux slices
      │   │   ├── data/         # donnée statique
      │   │   ├── middelWares/    # Middlewares Redux (ou autres)
      │   │   ├── utils/       # Type de geste
      │   │   ├── models.d.ts        # Types et modèles TypeScript
      │   │   ├── store/          # Configuration du store Redux
      │   │   ├── App.tsx         # Routing principal
      │   │   └── main.tsx        # Point d'entrée React
      │   ├── index.html
      │   └── vite.config.ts      # Configuration Vite
      │
      ├── server/                # Backend Node.js / Express
          ├── src/             # Définition des routes API
               ├── dist/
               ├── routes/
               └── index.ts            
   

## ⚠️ Notes

    Le projet stocke les données dans Redux localement (pas de base de données backend).

    Si vous clonez et ne voyez pas de questions ou d'événements, vous pouvez en créer directement via l'interface.

## 📦 Build (optionnel)

Pour générer le fichier de production cote client:
      
      cd Client
      yarn build


## Quelques images 
![accueil](https://github.com/user-attachments/assets/dc92b34b-dfc8-4160-a2fc-5f107634a828)
![participant](https://github.com/user-attachments/assets/03ba54c3-5efc-4934-9bee-d14da40a39f4)
![admin](https://github.com/user-attachments/assets/d1323a70-38b2-47d9-a409-a24c2512ec31)
![geste](https://github.com/user-attachments/assets/cd39630e-7b10-44b8-8b56-047a15ccf387)



### Projet réalisé par Mounir IYA AMINE sous la suppervision de Aurelien T. : https://github.com/aurelient

