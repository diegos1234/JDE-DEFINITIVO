import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import JDEMain from "./components/JDEMain"; // Página principal
import './App.css'; // Asegúrate de tener este archivo para los estilos globales

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para Login */}
        <Route path="/" element={<Login />} />

        {/* Ruta para la página principal */}
        <Route path="/main" element={<JDEMain />} />
      </Routes>
    </Router>
  );
}

export default App;
