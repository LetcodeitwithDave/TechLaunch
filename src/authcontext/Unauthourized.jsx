import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authcontext";
import { useEffect } from "react";

function Unauthourized({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  //   return isAuthenticated ? navigate("/home") : children;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return !isAuthenticated && children;
}

export default Unauthourized;
