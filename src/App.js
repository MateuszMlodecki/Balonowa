import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Oferta from "./pages/Oferta.jsx";
import Kontakt from "./pages/Kontakt";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Balonowa" element={<Home />} />
          <Route path="/Oferta" element={<Oferta />} />
          <Route path="/Kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
