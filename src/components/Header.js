import React from "react";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Header = () => {
  const [activeNav, setActiveNav] = useState("accueil");
  return (
    <header>
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <div className="nav">
        <NavLink
          to="/"
          className={activeNav == "accueil" ? "nav--active" : "nav--inactive"}
          onClick={() => {
            setActiveNav("accueil");
          }}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={activeNav == "about" ? "nav--active" : "nav--inactive"}
          onClick={() => {
            setActiveNav("about");
          }}
        >
          A propos
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
