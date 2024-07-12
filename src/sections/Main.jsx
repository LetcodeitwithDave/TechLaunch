import React from "react";
import { InputProvider } from "../authcontext/inputContext";
import Header from "./Header";
import Jobsection from "./Jobsection";
import { LandingHeader } from "../landingpage/components";
import { Input } from "../components";
import { FilterProvider } from "../authcontext/filterContext";

function Main() {
  return (
    <InputProvider>
      <FilterProvider>
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
      </FilterProvider>
    </InputProvider>
  );
}

export default Main;
