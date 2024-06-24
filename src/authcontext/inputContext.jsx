// inputContext.js
import React, { createContext, useState, useContext } from "react";

export const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  return (
    <InputContext.Provider value={{ userData, setUserData }}>
      {children}
    </InputContext.Provider>
  );
};

export { InputProvider };
