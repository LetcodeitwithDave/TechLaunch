import React from "react";
import { useAuth } from "./authcontext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({home}) =>{
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();

    return isAuthenticated ?  home : navigate('/')
}

export default ProtectedRoute;