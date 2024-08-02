import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AuthProvider } from "./authcontext/authcontext";
import ProtectedRoute from "./authcontext/ProtectedRoute";
import { Main, Login, SignUp } from "./sections";
import Unauthourized from "./authcontext/Unauthourized";
import JobDetailsPage from "./components/JobDetailsPage";

import Know from "../public/Know";
import { InputProvider } from "./authcontext/inputContext";
import { JobDetailProvider } from "./authcontext/JobDetailContext";
function App() {
  return (
    <AuthProvider>
      <InputProvider>
        <JobDetailProvider>
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
                element={<ProtectedRoute children={<JobDetailsPage />} />}
                path="/jobpage/:jobId"
              />

              <Route
                element={<ProtectedRoute children={<Main />} />}
                path="/home"
              />
            </Routes>
          </Router>
        </JobDetailProvider>
      </InputProvider>
    </AuthProvider>
  );
}

export default App;
library.add(far, fas);
