import React from 'react';
import Slider from 'react-slick';
import '../../css/ServicesPreview.css'; // Style du carrousel

const ServicesPreview = () => {
  const services = [
    { name: 'Restaurant Grillade', description: 'Dégustez des plats savoureux avec vue sur les animaux.', image: '/path/to/grill-image.jpg' },
    { name: 'Fast-Food du Zoo', description: 'Des repas rapides pour une pause entre les visites.', image: '/path/to/fastfood-image.jpg' },
    { name: 'Boutique de souvenirs', description: 'Ramenez un souvenir unique de votre visite.', image: '/path/to/souvenir-image.jpg' },
    // Ajoutez d'autres services ici
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="services-preview">
      <h2>Nos Services</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-slide">
            <img src={service.image} alt={service.name} />
            <div className="service-description">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesPreview;
