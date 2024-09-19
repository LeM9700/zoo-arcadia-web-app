import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AnimalTypeButton from '../components/AnimalTypeButton';
import AnimalList from '../components/AnimalList';

const HabitatDetailsPage = () => {
  const { id } = useParams();
  const [habitat, setHabitat] = useState(null);
  const [animalTypes, setAnimalTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [animalsByType, setAnimalsByType] = useState([]);

  useEffect(() => {
    // Récupérer les données de l'habitat et des animaux
    axios.get(`/api/habitats/${id}`)
      .then(response => {
        const fetchedHabitat = response.data;
        setHabitat(fetchedHabitat);

        // Extraire les types d'animaux de manière dynamique
        const types = new Set(fetchedHabitat.animals.map(animal => animal.type));
        setAnimalTypes([...types]); // Convertir le Set en tableau
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails de l\'habitat:', error);
      });
  }, [id]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    const filteredAnimals = habitat.animals.filter(animal => animal.type === type);
    setAnimalsByType(filteredAnimals);
  };

  if (!habitat) {
    return <div>Chargement des détails de l'habitat...</div>;
  }

  return (
    <div>
      <h1>{habitat.name}</h1>
      <p>{habitat.description}</p>
      
      <h2>Types d'animaux :</h2>
      <ul>
        {animalTypes.map((type) => (
          <li key={type}>
            <AnimalTypeButton type={type} onClick={handleTypeClick} />
          </li>
        ))}
      </ul>

      <h2>{selectedType ? `Liste des ${selectedType}` : 'Sélectionnez un type d\'animal'}</h2>
      <AnimalList animals={animalsByType} />
    </div>
  );
};

export default HabitatDetailsPage;
