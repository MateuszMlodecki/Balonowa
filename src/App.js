import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Oferta from "./pages/Oferta.jsx";
import Kontakt from "./pages/Kontakt";
import Galeria from "./pages/Galeria.jsx";
import { Navbar } from "./components/Navbar2.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Balonowa" element={<Home />} />
          <Route path="/Oferta" element={<Oferta />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Galeria" element={<Galeria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;