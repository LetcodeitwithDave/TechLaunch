// App.js
import React from "react";
import { Main } from "./sections";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import { Signup, Login } from "./components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";

// // import the library
// import { library } from '@fortawesome/fontawesome-svg-core'

// // import your icons
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
library.add(far, fas);
