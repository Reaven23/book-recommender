const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.post('/api/recommend', (req, res) => {
  const { favoriteBook, impactfulBook, genres, pageCount, ageRange } = req.body;


  const recommendations = [
    { title: '1984', author: 'George Orwell', description: 'Dystopie politique.' },
    { title: 'Le Meilleur des mondes', author: 'Aldous Huxley', description: 'Une vision du futur troublante.' },
    { title: 'Dune', author: 'Frank Herbert', description: 'Épopée de science-fiction.' },
  ];


  res.json({ recommendations });
});


app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
