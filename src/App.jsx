// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import { Signup, Login } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AuthProvider, useAuth } from "./authcontext/authcontext";
import ProtectedRoute from "./authcontext/ProtectedRoute";
import { Main } from "./sections";
function App() {
  const isAuthenticated = localStorage.getItem("access_token");
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<ProtectedRoute />} />
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/home" /> : <LandingPage />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
    // </div>
  );
}

export default App;
library.add(far, fas);
