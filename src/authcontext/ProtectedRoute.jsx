import React from "react";
import { useAuth } from "./authcontext";
import { useNavigate } from "react-router-dom";
import { Main } from "../sections";
import { Login } from "../components";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Main /> : <Login />;
};

export default ProtectedRoute;
