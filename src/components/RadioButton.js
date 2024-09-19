import React from 'react';

const RadioButton = ({ label, name, value, checked, onChange }) => (
  <div>
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </div>
);

export default RadioButton;
