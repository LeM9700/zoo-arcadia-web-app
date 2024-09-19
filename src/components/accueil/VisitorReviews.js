import React from 'react';
import Slider from 'react-slick';
import '../../css/VisitorReviews.css'; // Style pour le carrousel des avis

const VisitorReviews = () => {
  const reviews = [
    { name: 'Alice', review: 'Le zoo est incroyable, les animaux sont bien soignés et les habitats sont très réalistes.' },
    { name: 'Bob', review: 'Une visite inoubliable, surtout pour les enfants. Le service était impeccable !' },
    { name: 'Chloe', review: 'Je reviendrai sans hésiter. Les animaux semblent heureux et en bonne santé.' },
    // Ajoutez d'autres avis ici
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="visitor-reviews">
      <h2>Ce que disent nos visiteurs</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-slide">
            <p>"{review.review}"</p>
            <h3>- {review.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VisitorReviews;
