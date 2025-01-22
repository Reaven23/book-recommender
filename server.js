const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialisation du serveur
const app = express();
const PORT = 8080;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Endpoint pour recevoir les données du formulaire et envoyer des recommandations
app.post('/api/recommend', (req, res) => {
  const { favoriteBook, impactfulBook, genres, pageCount, ageRange } = req.body;

  // Exemple de recommandations (à remplacer par un appel API ou une base de données)
  const recommendations = [
    { title: '1984', author: 'George Orwell', description: 'Dystopie politique.' },
    { title: 'Le Meilleur des mondes', author: 'Aldous Huxley', description: 'Une vision du futur troublante.' },
    { title: 'Dune', author: 'Frank Herbert', description: 'Épopée de science-fiction.' },
  ];

  // Retourne des recommandations fictives
  res.json({ recommendations });
});


app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
