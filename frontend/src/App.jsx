import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <Routes>
          {/* Si on arrive sur le site, on est redirigé vers la connexion par défaut */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Les différentes pages de ton site */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;