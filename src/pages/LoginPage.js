import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      const { token, user } = res.data;

      // Stocker le token et le rôle dans localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);

      // Rediriger en fonction du rôle
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'veterinarian') {
        navigate('/veterinarian');
      } else if (user.role === 'employee') {
        navigate('/employee');
      }
    } catch (err) {
      console.error('Erreur lors de la connexion:', err.response.data);
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <InputField 
          label="Email" 
          name="email" 
          value={email} 
          onChange={handleChange} 
          type="email" 
          placeholder="Email" 
        />
        <InputField 
          label="Mot de passe" 
          name="password" 
          value={password} 
          onChange={handleChange} 
          type="password" 
          placeholder="Mot de passe" 
        />
        <LoginButton label="Se connecter" />
      </form>
    </div>
  );
};

export default LoginPage;
