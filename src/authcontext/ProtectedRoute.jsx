import React, { useContext, useEffect } from "react";
import { AuthContext, useAuth } from "./authcontext";
import { Main } from "../sections";
import { Login } from "../components";
import { Navigate, Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // const { isAuthenticated } = useAuth();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, navigate]);

  // return isAuthenticated ? <Main /> : null;

  const { isAuthenticated } = useContext(AuthContext);
  console.log("auth in protected view ", isAuthenticated.refresh);

  return isAuthenticated ? children : navigate("/login");
  //

  // return (
  //   <Route {...rest}>{isAuthenticated ? children : navigate("/login")}</Route>
  // );
};

export default ProtectedRoute;
