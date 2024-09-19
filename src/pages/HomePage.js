import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/accueil/HeroSection';
import ServicesPreview from '../components/accueil/ServicesPreview';
import HabitatPreview from '../components/accueil/HabitatPreview';
import VisitorReviews from '../components/accueil/VisitorReviews';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      {/* Barre de navigation */}
      <NavBar />

      {/* Section principale (Hero) */}
      <HeroSection />

      {/* Carrousel des services */}
      <ServicesPreview />

      {/* Carrousel des habitats */}
      <HabitatPreview />

      {/* Carrousel des avis des visiteurs */}
      <VisitorReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
