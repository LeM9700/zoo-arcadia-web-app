import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      // Si l'utilisateur n'est pas admin, on le redirige vers la page de connexion
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Espace Administrateur</h1>
      <p>Bienvenue dans l'espace de gestion des administrateurs.</p>
      {/* Ici, vous pouvez ajouter des fonctionnalités réservées aux administrateurs */}
    </div>
  );
};

export default AdminPage;
