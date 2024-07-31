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

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AuthProvider, useAuth } from "./authcontext/authcontext";
import ProtectedRoute from "./authcontext/ProtectedRoute";
import { Main, Login, SignUp } from "./sections";
import Unauthourized from "./authcontext/Unauthourized";
import JobDetailsPage from "../pages/JobDetailsPage";
import Know from "../public/Know";
import { InputProvider } from "./authcontext/inputContext";
function App() {
  return (
    <AuthProvider>
      <InputProvider>
        <Router>
          <Routes>
            <Route
              element={<Unauthourized children={<Login />} />}
              path="/login"
            />

            <Route
              element={<Unauthourized children={<SignUp />} />}
              path="/signup"
            />

            <Route
              element={<Unauthourized children={<LandingPage />} />}
              path="/"
            />

            <Route
              element={<ProtectedRoute children={<Know />} />}
              path="/know"
            />

            <Route
              element={<ProtectedRoute children={<Main />} />}
              path="/home"
            />

            <Route
              element={<ProtectedRoute children={<JobDetailsPage />} />}
              path="/jobpage"
            />
          </Routes>
        </Router>
      </InputProvider>
    </AuthProvider>
    // </div>
  );
}

// const AppRoutes = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth();
//   return (
//     <Routes>
//       <Route path="/home" element={<ProtectedRoute />} />
//       <Route
//         path="/"
//         element={isAuthenticated ? navigate("/home") : <LandingPage />}
//       />
//       <Route
//         path="/signup"
//         element={isAuthenticated ? navigate("/home") : <Signup />}
//       />
//       <Route
//         element={isAuthenticated ? navigate("/home") : <Login />}
//         path="/login"
//       />

//       <Route path="/test" element={<Account />} />
//     </Routes>
//   );
// };

export default App;
library.add(far, fas);
