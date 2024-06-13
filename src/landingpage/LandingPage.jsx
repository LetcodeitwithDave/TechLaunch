import React from "react";
import { LandingHeader, LandingHero, OfferSection, FeaturedJobs, HowItWorks } from "./components";

function LandingPage() {
  return (
    <main className=" ">
      <section className=" bg-white">
        <LandingHeader />
      </section>
      <section className="  bg-heroBackground">
        <LandingHero />
      </section>

      <section  className=" mt-11 pb-20">
        <OfferSection />
      </section>
      <div className=" px-12">
        <hr/>
      </div>

      <section className=" pt-24">
        <HowItWorks />
      </section>

      {/* <section  className="mt-11 mb-14">
        <FeaturedJobs />
      </section> */}
    </main>
  );
}

export default LandingPage;
