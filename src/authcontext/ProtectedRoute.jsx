import React, { useContext, useEffect } from "react";
import { AuthContext, useAuth } from "./authcontext";

import { Navigate, Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated && children;

  // const { isAuthenticated } = useContext(AuthContext);

  // return isAuthenticated ? children : navigate("/login");
};

export default ProtectedRoute;
