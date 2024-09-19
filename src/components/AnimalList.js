import React from 'react';

const AnimalList = ({ animals }) => (
  <ul>
    {animals.map((animal) => (
      <li key={animal._id}>{animal.name}</li>
    ))}
  </ul>
);

export default AnimalList;
