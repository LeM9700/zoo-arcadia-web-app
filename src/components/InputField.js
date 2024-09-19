import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text', placeholder }) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  </div>
);

export default InputField;
