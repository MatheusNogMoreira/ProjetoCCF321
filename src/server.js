const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('API de Lost Mídias funcionando!');
});

// Rota para listar mídias
app.get('/api/midias', (req, res) => {
  const sql = 'SELECT * FROM imagens';

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Erro ao consultar mídias:', err.message);
      res.status(500).json({ error: 'Erro interno no servidor' });
    } else {
      res.json(rows);
    }
  });
});

// Servir imagens da pasta public
app.use('/midias', express.static('public'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando em http://localhost:${PORT}`);
});
