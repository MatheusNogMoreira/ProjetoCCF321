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

// Rota para listar por id
app.get('/api/midias/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM imagens WHERE id = ?';

  db.get(sql, [id], (err, row) => {
    if (err) {
      console.error('Erro ao buscar mídia por ID:', err.message);
      res.status(500).json({ error: 'Erro interno no servidor' });
    } else if (!row) {
      res.status(404).json({ error: 'Mídia não encontrada' });
    } else {
      res.json(row);
    }
  });
});

// Servir imagens da pasta public
app.use('/midias', express.static('public'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando em http://localhost:${PORT}`);
});
