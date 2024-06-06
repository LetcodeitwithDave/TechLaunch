import React from 'react';
import { InputProvider } from '../authcontext/inputContext';
import Header from './Header';
import Jobsection from './Jobsection';

function Main() {
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

export default Main;
