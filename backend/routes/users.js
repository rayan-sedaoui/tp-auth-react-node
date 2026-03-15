const router = require("express").Router();
const pool = require("../db");
const auth = require("../middleware/auth"); // On importe ton vigile !

/*
  GET /api/users/profile
  Route protégée : Récupère les infos de l'utilisateur connecté
*/
router.get("/profile", auth, async (req, res) => {
  try {
    // req.user.id vient du middleware auth (qui a décodé le token)
    const [users] = await pool.query(
      "SELECT id, name, email, age, cin FROM users WHERE id = ?", 
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(users[0]);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;