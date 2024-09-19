import React from 'react';
import '../css/ServiceList.css'; // Fichier CSS pour styliser la liste des services

const services = [
  {
    name: 'Restaurant Grillade',
    description: 'Un restaurant offrant des grillades variées, y compris des options végétariennes.',
    image: '/path/to/grill-image.jpg'
  },
  {
    name: 'Fast-Food du Zoo',
    description: 'Une pause rapide pour un repas léger, idéal pour les familles.',
    image: '/path/to/fastfood-image.jpg'
  },
  {
    name: 'Boutique de Souvenirs',
    description: 'Ramenez chez vous un souvenir unique de votre visite au Zoo Arcadia.',
    image: '/path/to/souvenir-image.jpg'
  }
  // Ajouter d'autres services ici
];

const ServiceList = () => {
  return (
    <section className="service-list">
      <h2>Nos Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.name} />
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
