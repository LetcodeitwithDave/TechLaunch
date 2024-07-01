import React from "react";
import { useAuth } from "./authcontext";
import { Main } from "../sections";
import { Login } from "../components";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("access_token");

  return isAuthenticated ? <Main /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
