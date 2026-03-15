import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", age: "", cin: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Inscription réussie !");
      navigate("/login");
    } catch (err) {
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" onChange={(e)=>setFormData({...formData, name:e.target.value})} required /><br/><br/>
        <input type="email" placeholder="Email" onChange={(e)=>setFormData({...formData, email:e.target.value})} required /><br/><br/>
        <input type="password" placeholder="Mot de passe" onChange={(e)=>setFormData({...formData, password:e.target.value})} required /><br/><br/>
        <input type="number" placeholder="Âge" onChange={(e)=>setFormData({...formData, age:e.target.value})} required /><br/><br/>
        <input type="text" placeholder="CIN" onChange={(e)=>setFormData({...formData, cin:e.target.value})} required /><br/><br/>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">Retour à la connexion</Link>
    </div>
  );
}

export default Signup;