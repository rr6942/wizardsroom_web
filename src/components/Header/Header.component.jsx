// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Wizard's Room
      </Link>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
