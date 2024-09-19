import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'employee') {
      // Si l'utilisateur n'est pas employé, on le redirige vers la page de connexion
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Espace Employé</h1>
      <p>Gestion des services et des animaux du parc.</p>
      {/* Ici, vous pouvez ajouter des fonctionnalités réservées aux employés */}
    </div>
  );
};

export default EmployeePage;
