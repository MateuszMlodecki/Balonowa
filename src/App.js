import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Oferta from "./pages/Oferta.jsx";
import Kontakt from "./pages/Kontakt";
import Galeria from "./pages/Galeria.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/Balonowa" element={<Home />} />
          <Route path="/Oferta" element={<Oferta />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Galeria" element={<Galeria />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
