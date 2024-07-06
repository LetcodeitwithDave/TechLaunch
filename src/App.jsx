// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import { Signup, Login } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AuthProvider, useAuth } from "./authcontext/authcontext";
import ProtectedRoute from "./authcontext/ProtectedRoute";
import { Main } from "./sections";
import Hope from "../../Hope";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
    // </div>
  );
}

const AppRoutes = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/home" element={<ProtectedRoute />} />
      <Route
        path="/"
        element={isAuthenticated ? navigate("/home") : <LandingPage />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? navigate("/home") : <Signup />}
      />
      <Route
        element={isAuthenticated ? navigate("/home") : <Login />}
        path="/login"
      />
      <Route path="/test" element={<Hope />} />
    </Routes>
  );
};

export default App;
library.add(far, fas);
