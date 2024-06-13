import React from "react";
import { LandingHeader, LandingHero, OfferSection, FeaturedJobs } from "./components";

function LandingPage() {
  return (
    <main className=" ">
      <section className=" bg-white">
        <LandingHeader />
      </section>
      <section className="  bg-heroBackground">
        <LandingHero />
      </section>

      <section  className=" mt-11 pb-16">
        <OfferSection />
      </section>

      <section  className="mt-11 mb-14">
        <FeaturedJobs />
      </section>
    </main>
  );
}

export default LandingPage;
