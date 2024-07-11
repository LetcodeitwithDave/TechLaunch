// inputContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const data = localStorage.getItem("authtoken");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authtoken")
      ? JSON.parse(localStorage.getItem("authtoken"))
      : null
  );

  // // get access_token if available
  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   console.log("isAuthenticated data in authcontext", token);
  //   if (token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  //   console.log("isAuthenticated state: ", isAuthenticated);
  // }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
