// App.js
import React from 'react';
import { InputProvider } from './authcontext/inputContext';
import Header from './sections/Header';
import Jobsection from './sections/Jobsection';

function App() {
  return (
    <InputProvider>
      <main>
        <section>
          <Header />
        </section>
        <section>
          <Jobsection />
        </section>
      </main>
    </InputProvider>
  );
}

export default App;
