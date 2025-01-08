
import React, { useState } from 'react';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default InputComponent;
