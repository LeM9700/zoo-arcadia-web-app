import React from 'react';
import '../../css/HabitatPreview.css'; // Fichier CSS pour la mise en page

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bienvenue au Zoo Arcadia</h1>
        <p>Explorez le monde merveilleux des animaux dans un cadre naturel préservé.</p>
        <a href="/visit" className="hero-button">Planifiez votre visite</a>
      </div>
    </section>
  );
};

export default HeroSection;
