var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var db = new sqlite3.Database(path.resolve(__dirname, 'database.sqlite'));

db.serialize(() => {

  db.run(`
      CREATE TABLE IF NOT EXISTS pedidos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data TEXT,
        bloco TEXT,
        apt TEST,
        prioridade TEXT,
        categoria TEXT,
        responsavel TEXT,
        status TEXT,
        descricao TEXT
      );
    `)
});

module.exports = db;