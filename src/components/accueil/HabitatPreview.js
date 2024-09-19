import React from 'react';
import Slider from 'react-slick';
import '../../css/HabitatPreview.css'; // Style pour le carrousel des habitats

const HabitatPreview = () => {
  const habitats = [
    { name: 'Savane', description: 'Découvrez les lions, éléphants, et girafes dans leur habitat naturel.', image: '/path/to/savane-image.jpg' },
    { name: 'Jungle', description: 'Rencontrez les tigres, serpents, et oiseaux exotiques.', image: '/path/to/jungle-image.jpg' },
    { name: 'Marais', description: 'Admirez les crocodiles et autres reptiles dans les marais.', image: '/path/to/marais-image.jpg' },
    // Ajoutez d'autres habitats ici
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="habitat-preview">
      <h2>Nos Habitats</h2>
      <Slider {...settings}>
        {habitats.map((habitat, index) => (
          <div key={index} className="habitat-slide">
            <img src={habitat.image} alt={habitat.name} />
            <div className="habitat-description">
              <h3>{habitat.name}</h3>
              <p>{habitat.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HabitatPreview;
