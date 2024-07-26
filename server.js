const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let entries = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/entries', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'entries.html'));
});

app.post('/add-entry', (req, res) => {
  const { title, content, date } = req.body;
  entries.push({ title, content, date });
  res.redirect('/entries');
});

app.get('/api/entries', (req, res) => {
  res.json(entries);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
