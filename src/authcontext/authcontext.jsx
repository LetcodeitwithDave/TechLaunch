// inputContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const data = localStorage.getItem("authtoken");
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authtoken")
      ? JSON.parse(localStorage.getItem("authtoken"))
      : null
  );

  // console.log("refresh token in localstorage", isAuthenticated.refresh);

  const logout = () => {
    setIsAuthenticated(null);
    localStorage.removeItem("authtoken");
    console.log("logged out");
  };

  const updateToken = async () => {
    try {
      console.log("update token");
      const response = await fetch("http://localhost:8000/api/token/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: isAuthenticated?.refresh }),
      });
      console.log("response -> ", response);

      if (response.ok) {
        const data = await response.json();
        console.log("token from update token -> ", data);
        localStorage.setItem("authtoken", JSON.stringify(data));
        setIsLoading(false);
        setIsAuthenticated(data);
      } else {
        logout();
      }
      if (isLoading) {
        setIsLoading(false);
      }
    } catch (error) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    if (isLoading) {
      updateToken();
    }
    const time = setInterval(() => {
      if (isAuthenticated) {
        updateToken();
      }
    }, 870000);
    return () => clearInterval(time);
  }, [isAuthenticated]);

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
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};
