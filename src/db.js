const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(process.cwd(), 'data', 'midias.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('erro ao conectar no banco:', err.message);
  } else {
    console.log('conectado ao banco SQLite');
  }
});

module.exports = db;
