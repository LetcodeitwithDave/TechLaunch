import React, { useEffect } from "react";
import { useAuth } from "./authcontext";
import { Main } from "../sections";
import { Login } from "../components";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated in ProtectedRoute", isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Main /> : null;
};

export default ProtectedRoute;
