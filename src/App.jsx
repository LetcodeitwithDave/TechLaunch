// App.js
import React from 'react';
import { Main } from './sections';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { LandingHeader } from './landingpage/components';
import LandingPage from './landingpage/LandingPage';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route   path='/home' element={<Main />} />
          <Route   path='/' element={<LandingPage />} />
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
