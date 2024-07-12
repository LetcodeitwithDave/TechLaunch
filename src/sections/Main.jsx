import React from "react";
import { InputProvider } from "../authcontext/inputContext";
import Header from "./Header";
import Jobsection from "./Jobsection";
import { LandingHeader } from "../landingpage/components";
import { Input } from "../components";

function Main() {
  return (
    <InputProvider>
      <main className="bg-heroBackground">
        <section>
          <LandingHeader />
        </section>
        <section>
          <Input />
        </section>
        <section>
          <Jobsection />
        </section>
      </main>
    </InputProvider>
  );
}

export default Main;
