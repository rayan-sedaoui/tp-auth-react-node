const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");
require("dotenv").config();

/*
  POST /api/auth/signup
  Inscription d'un nouvel utilisateur
*/
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, age, cin } = req.body;
    
    // Vérifier si l'utilisateur existe déjà
    const [existingUsers] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insérer l'utilisateur dans la base de données
    await pool.query(
      "INSERT INTO users (name, email, password, age, cin) VALUES (?, ?, ?, ?, ?)",
      [name, email, hashedPassword, age, cin]
    );

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/*
  POST /api/auth/login
  Connexion d'un utilisateur existant
*/
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Chercher l'utilisateur par son email
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = users[0];

    // Comparer le mot de passe tapé avec celui de la base de données
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Générer le token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Envoyer le token et les infos au frontend
    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;