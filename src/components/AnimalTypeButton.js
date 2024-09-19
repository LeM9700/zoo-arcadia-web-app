import React from 'react';

const AnimalTypeButton = ({ type, onClick }) => (
  <button onClick={() => onClick(type)}>{type}</button>
);

export default AnimalTypeButton;
