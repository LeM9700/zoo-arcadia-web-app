import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import RadioButton from '../components/RadioButton';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contractNumber: '',
    role: 'employee', // Valeur par défaut pour le rôle
  });

  const { name, email, password, contractNumber, role } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log('User registered successfully', res.data);
    } catch (err) {
      console.error('Error registering user:', err.response.data);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <InputField label="Nom" name="name" value={name} onChange={handleChange} placeholder="Nom" />
        <InputField label="Email" name="email" value={email} onChange={handleChange} type="email" placeholder="Email" />
        <InputField label="Mot de passe" name="password" value={password} onChange={handleChange} type="password" placeholder="Mot de passe" />
        
        <h3>Choisissez votre rôle :</h3>
        <RadioButton label="Admin" name="role" value="admin" checked={role === 'admin'} onChange={handleChange} />
        <RadioButton label="Vétérinaire" name="role" value="veterinarian" checked={role === 'veterinarian'} onChange={handleChange} />
        <RadioButton label="Employé" name="role" value="employee" checked={role === 'employee'} onChange={handleChange} />
        <br />
        <InputField label="Numéro de contrat" name="contractNumber" value={contractNumber} onChange={handleChange} placeholder="Numéro de contrat" />
        
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterPage;
