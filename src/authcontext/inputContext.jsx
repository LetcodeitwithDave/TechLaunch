// inputContext.js
import React, { createContext, useState, useContext } from "react";

export const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [test, setTest] = useState(false);
  const [jobDetail, setJobDetail] = useState([]);
  const [jobDetailsOpen, setJobDetailsOpen] = useState(false);
  return (
    <InputContext.Provider
      value={{
        userData,
        setUserData,
        jobDetail,
        setJobDetail,
        jobDetailsOpen,
        setJobDetailsOpen,
        isLoading,
        setIsLoading,
        test,
        setTest,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export { InputProvider };
