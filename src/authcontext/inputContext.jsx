// inputContext.js
import React, { createContext, useState, useContext } from 'react';

const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <InputContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </InputContext.Provider>
  );
};

const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInputContext must be used within an InputProvider');
  }
  return context;
};

export { InputProvider, useInputContext };
