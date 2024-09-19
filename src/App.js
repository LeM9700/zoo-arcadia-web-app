import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import VeterinarianPage from './pages/VeterinarianPage';
import EmployeePage from './pages/EmployeePage';
import HabitatDetailsPage from './pages/HabitatsDetailsPage';
import HabitatsPage from './pages/HabitatsPage';
import HomePage from './pages/HomePage';
import AnimalDetailsPage from './pages/AnimalDetailsPage';
import ServicesPages from './pages/ServicesPages';

// Fonction pour vérifier si l'utilisateur est authentifié
const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Fonction pour vérifier le rôle de l'utilisateur
const checkUserRole = (role) => {
  const userRole = localStorage.getItem('role');
  return userRole === role;
};

// Composant pour protéger les routes selon le rôle
const PrivateRoute = ({ children, role }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  
  if (role && !checkUserRole(role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour l'inscription */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Route pour la connexion */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route pour la page d'accueil */}
        <Route path="/" element={<HomePage />} />

        {/* Route pour afficher tous les habitats */}
        <Route path="/habitats" element={<HabitatsPage />} />

        {/* Route pour afficher les détails d'un habitat spécifique */}
        <Route path="/habitat/:id" element={<HabitatDetailsPage />} />

        {/* Route pour afficher les détails d'un animal spécifique */}
        <Route path="/animal/:id" element={<AnimalDetailsPage />} />

        {/* Route pour afficher les services du parc */}
        <Route path="/services" element={<ServicesPages />} />

        {/* Routes protégées par rôle */}
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/veterinarian"
          element={
            <PrivateRoute role="veterinarian">
              <VeterinarianPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <PrivateRoute role="employee">
              <EmployeePage />
            </PrivateRoute>
          }
        />

        {/* Redirection par défaut vers la page de login si aucune route n'est trouvée */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
