import React from "react";
import { LandingHeader, LandingHero } from "./components";

function LandingPage() {
  return (
    <main className=" bg-pageBackground">
      <section className=" bg-white">
        <LandingHeader />
      </section>
      <section className=" bg-heroBackground ">
        <LandingHero />
      </section>
    </main>
  );
}

export default LandingPage;
