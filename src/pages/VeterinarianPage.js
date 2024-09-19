import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VeterinarianPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'veterinarian') {
      // Si l'utilisateur n'est pas vétérinaire, on le redirige vers la page de connexion
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Espace Vétérinaire</h1>
      <p>Accès aux comptes rendus des animaux.</p>
      {/* Ici, vous pouvez ajouter des fonctionnalités réservées aux vétérinaires */}
    </div>
  );
};

export default VeterinarianPage;
