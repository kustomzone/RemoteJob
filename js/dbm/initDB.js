const path = require('path');
const dbPath = path.join(__dirname, '../../db/todo.db');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(dbPath);

//module.exports.db = db;
module.exports = {
  db: db
};