import React, { useState } from "react";
import "./Header.css";

const Header = ({ history, handleSubmit }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="main-header">

      <div className="logo-container">
      <img src={`/images/logo.jpeg`} alt="logo.jpeg" className="image" />
      </div>
      <div id="tete">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">Annonces</a>
            </li>
            <li className="nav-item">
              <a href="/all">Ajout de detail </a>
            </li>
            <li className="nav-item">
              <a href="/statistique">Statistique</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
