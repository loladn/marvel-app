# Marvel App

Application React pour explorer l'univers Marvel avec navigation entre les personnages.

## Installation

```bash
git clone https://github.com/loladn/marvel-app.git
cd marvel-app
npm install
```

## Lancement

```bash
npm run dev
```

L'application est accessible à l'adresse affichée dans la console (généralement `http://localhost:5173`).

## Rechargement à chaud

L'application supporte le rechargement à chaud, ce qui signifie que les modifications du code source sont prises en compte sans avoir à recharger la page.

## Point d'entrée

Le point d'entrée de l'application est le fichier `index.html` situé à la racine du projet. C'est ce fichier qui est chargé dans le navigateur et qui charge ensuite le fichier `main.jsx` qui est le point d'entrée de l'application React.

## Fonctionnalités

- ✨ Liste des personnages Marvel
- 🔍 Page de détail pour chaque personnage
- 🖼️ Affichage des images et descriptions
- 🧭 Navigation fluide avec React Router
- 📱 Interface responsive

## Architecture

- **React 19** avec Vite
- **React Router** pour la navigation
- **GitHub Actions** pour la CI/CD
- **Netlify** pour le déploiement
