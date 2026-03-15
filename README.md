# 🚀 TP - Authentification Full-Stack (React & Node.js)

Ce projet est une application web complète (Full-Stack) développée dans le cadre d'un Travail Pratique. Il met en place un système complet et sécurisé d'inscription et de connexion utilisateur.

## 📸 Aperçu du Projet

Voici les différentes étapes du parcours utilisateur :

### 1. Page d'Inscription
L'utilisateur remplit le formulaire pour créer un compte (Nom, Email, Mot de passe, Âge, CIN).
![Page d'inscription](./images/capture_inscription.png) 
*(Remplace le lien ci-dessus par le nom exact de ta capture d'écran d'inscription)*

### 2. Validation
Une fois les données envoyées avec succès au serveur, une alerte confirme la création du compte.
![Alerte de succès](./images/capture_alerte.png)
*(Remplace le lien ci-dessus par ta capture de la petite alerte OK)*

### 3. Page de Connexion
L'utilisateur se connecte avec ses nouveaux identifiants.
![Page de connexion](./images/capture_connexion.png)
*(Remplace le lien ci-dessus par ta capture de la page de connexion)*

### 4. Espace Sécurisé (Dashboard)
Si les identifiants sont corrects, l'accès est déverrouillé et l'utilisateur accède à son tableau de bord.
![Dashboard sécurisé](./images/capture_dashboard.png)
*(Remplace le lien ci-dessus par ta capture du Dashboard avec la fusée)*

---

## ✨ Fonctionnalités
- **Inscription (Sign Up)** : Création d'un nouvel utilisateur avec sauvegarde dans la base de données.
- **Connexion (Log In)** : Vérification des identifiants (Email et Mot de passe).
- **Routage sécurisé** : Redirection automatique après inscription et accès protégé au Dashboard.
- **Gestion des erreurs** : Alertes en cas de mauvais identifiants ou de problème serveur.

## 🛠️ Technologies Utilisées
- **Frontend** : React.js (Vite), React Router DOM, Axios.
- **Backend** : Node.js, Express.js.
- **Base de données** : MySQL.

## ⚙️ Installation et Lancement

Si vous souhaitez tester ce projet localement sur votre machine, suivez ces étapes :

### 1. Cloner le projet
```bash
git clone [https://github.com/rayan-sedaoui/tp-auth-react-node.git](https://github.com/rayan-sedaoui/tp-auth-react-node.git)
cd tp-auth-react-node
