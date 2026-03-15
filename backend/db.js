// Importer mysql2 en mode promise (pour utiliser async/await)
const mysql = require("mysql2/promise");

// Charger les variables d'environnement depuis .env
require("dotenv").config();

// Créer un pool de connexions (meilleur que createConnection pour une API)
const pool = mysql.createPool({
 host: process.env.DB_HOST, // ex: localhost
 user: process.env.DB_USER, // ex: root
 password: process.env.DB_PASSWORD, // ex: 123456
 database: process.env.DB_NAME, // ex: tp_auth
 waitForConnections: true, // attendre si toutes les connexions sont occupées
 connectionLimit: 10, // max 10 connexions en même temps
 queueLimit: 0 // 0 = pas de limite d'attente
});

// Exporter le pool pour l'utiliser dans les routes
module.exports = pool;