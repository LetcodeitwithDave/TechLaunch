import React, { useEffect } from "react";
import {
  LandingHeader,
  LandingHero,
  OfferSection,
  FeaturedJobs,
  HowItWorks,
} from "./components";

import { useAuth } from "../authcontext/authcontext";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className=" ">
      <section className=" bg-white">
        <LandingHeader />
      </section>
      <section className="  bg-heroBackground">
        <LandingHero />
      </section>

      <section className=" mt-11 pb-20">
        <OfferSection />
      </section>
      <div className=" px-12">
        <hr />
      </div>

      <section className=" pt-24 mb-12">
        <HowItWorks />
      </section>

      <section className="mt-11 pb-14 bg-pageBackground">
        <FeaturedJobs />
      </section>
    </main>
  );
}

export default LandingPage;
