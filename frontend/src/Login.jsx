import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // On envoie les données de connexion au backend
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      
      // Si ça marche, on affiche un message et on va vers le Dashboard
      alert("Connexion réussie !");
      navigate("/dashboard");
    } catch (err) {
      // Si le mot de passe ou l'email est faux
      alert("Erreur de connexion : Vérifiez vos identifiants");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          required 
        /><br/><br/>
        
        <input 
          type="password" 
          placeholder="Mot de passe" 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
          required 
        /><br/><br/>
        
        <button type="submit">Se connecter</button>
      </form>
      
      <br/>
      <p>Pas de compte ? <Link to="/signup">Inscrivez-vous</Link></p>
    </div>
  );
}

export default Login; // <-- Très important pour éviter l'écran blanc !