// components/Keypad.js
import React from 'react';

const Keypad = () => {
  const handleChange = (event) => {
    console.log('Entering password...');
  };

  return (
    <input 
      type="password" 
      onChange={handleChange} 
      placeholder="Enter password"
    />
  );
};

export default Keypad;
