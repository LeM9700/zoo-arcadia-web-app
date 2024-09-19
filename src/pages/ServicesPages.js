import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceList from '../components/ServicesList';

const ServicesPage = () => {
  return (
    <div>
      {/* Barre de navigation */}
      <NavBar />

      {/* Section principale avec la liste des services */}
      <ServiceList />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
