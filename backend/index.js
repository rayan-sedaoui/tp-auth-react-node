// 1) Importer les bibliothèques
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // permet de lire le fichier .env

// 2) Importer les routes
const authRoutes = require("./routes/auth"); 
const userRoutes = require("./routes/users"); 

// 3) Créer l'application Express
const app = express();

// 4) Middlewares globaux
app.use(cors()); 
app.use(express.json()); 

// 5) Route de test
app.get("/", (req, res) => {
  res.send("API running");
});

// 6) Brancher les routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// 7) Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});