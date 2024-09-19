import React from 'react';
import '../css/Footer.css'; // Style pour le footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Zoo Arcadia. Tous droits réservés.</p>
        <ul className="footer-links">
          <li><a href="/mentions-legales">Mentions Légales</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="social-media">
        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
