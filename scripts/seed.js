const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs').promises;

async function seed() {
  const dbPath = path.join(process.cwd(), 'data', 'midias.db');
  
  try {
    await fs.mkdir(path.dirname(dbPath), { recursive: true });
    
    const db = new sqlite3.Database(dbPath);
    
    db.serialize(async () => {
      // Criar tabela
      db.run(`CREATE TABLE IF NOT EXISTS imagens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_midia TEXT NOT NULL,
        tipo_midia TEXT NOT NULL,
        endereco_imagem TEXT NOT NULL,
        Descricao	TEXT NOT NULL DEFAULT ''
      )`);
      
      // Inserir dados
      db.run(
        `INSERT INTO imagens (nome_midia, tipo_midia, endereco_imagem, Descricao) 
        VALUES (?, ?, ?, ?)`,
        ['Half-Life 3', 'Jogo', '/midias/hl3.jpg', 'Bom jogo'],
        (err) => {
          if (err) console.error(err);
          else console.log('✅ Dados inseridos!');
          db.close();
        }
      );
    });
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

seed();