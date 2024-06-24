// inputContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) =>  {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // get access_token if available
    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token){
            setIsAuthenticated(true)
        }

    }, []);


    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}} >
            {children}
        </AuthContext.Provider>
    );
}

