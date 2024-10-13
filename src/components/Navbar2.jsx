import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import menuPng from "../images/menu.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="grid grid-cols-5 xl:grid-cols-6 grid-rows-1 xl-grid-rows-2 items-center">
      <img
        src={logo}
        alt="logo"
        className="col-start-1 col-span-2 md:col-span-1"
      />
      <nav className="hidden md:flex">
        <div>
          <Link to="/Balonowa" className="button1">
            <b>HOME</b>
          </Link>
        </div>
        <div>
          <Link to="/Oferta" className="button2">
            <b>OFERTA</b>
          </Link>
        </div>
        <div>
          <Link to="/Kontakt" className="button1">
            <b>KONTAKT</b>
          </Link>
        </div>
        <div>
          <Link to="/Galeria" className="button2">
            <b>GALERIA</b>
          </Link>
        </div>
      </nav>
      <img
        src={menuPng}
        alt="Menu"
        className="hamburger col-start-5 justify-self-end coursor-pointer md:hidden"
        onClick={toggleMenu}
      />
      {menuOpen && (
        <nav className="col-start-3 row-start-1">
          <div>
            <Link to="/Balonowa" className="button1" onClick={toggleMenu}>
              <b>HOME</b>
            </Link>
          </div>
          <div>
            <Link to="/Oferta" className="button2" onClick={toggleMenu}>
              <b>OFERTA</b>
            </Link>
          </div>
          <div>
            <Link to="/Kontakt" className="button1" onClick={toggleMenu}>
              <b>KONTAKT</b>
            </Link>
          </div>
          <div>
            <Link to="/Galeria" className="button2" onClick={toggleMenu}>
              <b>GALERIA</b>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};
