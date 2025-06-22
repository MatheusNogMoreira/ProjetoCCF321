import path from 'path';
import { promises as fs } from 'fs';
import { open } from 'sqlite';
import * as sqlite3 from 'sqlite3';
let dbInstance: any = null;

export async function getDatabase() {
    if (dbInstance) return dbInstance;

    const dbPath = path.join(process.cwd(), 'data', 'midias.db');
    await fs.mkdir(path.dirname(dbPath), { recursive: true });

    dbInstance = await open({
        filename: dbPath,
        driver: sqlite3.Database
    });

    await dbInstance.exec(`
        CREATE TABLE IF NOT EXISTS imagens (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_midia TEXT NOT NULL,
            tipo_midia TEXT NOT NULL,
            endereco_imagem TEXT NOT NULL
    )
    `);

    return dbInstance;
}