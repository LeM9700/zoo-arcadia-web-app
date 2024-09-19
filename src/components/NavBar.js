import React from 'react';
import '../css/NavBar.css'; // Nous ajouterons un fichier CSS pour le style

const NavBar = () => {
  return (
    <nav className="navbar" style={{ backgroundImage: 'url("/path/to/background-image.jpg")' }}>
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Zoo Arcadia Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/habitats">Habitats</a></li>
        <li><a href="/animals">Animaux</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/login">Connexion</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
