import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import menuPng from "../images/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="grid grid-cols-5 items-center">
      <img
        src={logo}
        alt="logo"
        className="col-start-1 col-span-2 md:col-span-1"
      />

      <ul className="hidden md:flex col-start-3 col-end-5 justify-center space-x-8">
        <li>
          <Link to="/Balonowa" className="button1">
            <b>HOME</b>
          </Link>
        </li>
        <li>
          <Link to="/Oferta" className="button2">
            <b>OFERTA</b>
          </Link>
        </li>
        <li>
          <Link to="/Kontakt" className="button1">
            <b>KONTAKT</b>
          </Link>
        </li>
      </ul>

      <img
        src={menuPng}
        alt="Menu"
        className="hamburger col-start-5 justify-self-end cursor-pointer md:hidden"
        onClick={toggleMenu}
      />

      {menuOpen && (
        <ul className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 md:hidden">
          <li>
            <Link to="/Balonowa" className="button1" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Oferta" className="button2" onClick={toggleMenu}>
              Oferta
            </Link>
          </li>
          <li>
            <Link to="/Kontakt" className="button1" onClick={toggleMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
