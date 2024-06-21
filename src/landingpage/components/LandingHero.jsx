import React from "react";
import { heroImage } from "../../assets/landingpageimage";

function LandingHero() {
  return (
    <div className=" flex flex-col md:flex-wrap md:flex-row justify-between mx-auto md:px-16 py-12">
      <div className=" md:w-1/2  text-center md:text-left px-5 lg:px-20 md:mt-0 mt-5 ">
        <h1 className=" text-3xl md:text-3xl lg:text-4xl font-montserratBold mb-4">
          Empower Your Tech Career with Student- Friendly Jobs
        </h1>
        <p className=" text-subheading lg:pt-2 pt-2 md:pt-0 font-montserratRegular text-sm md:text-md md:mb-0 lg:mb-3 mb-3">
        Find internships, remote work, and freelance opportunities that fit your schedule and help you gain real-world experience.
        </p>
        
        <button className=" bg-buttonBackground hover:bg-blue-600 transition duration-300 lg:mt-9 mt-9 md:mt-5 px-28 md:px-3 py-3 rounded-md items-center text-white font-montserratSemibold lg:text-lg text-lg md:text-sm  ">
          Get Started
        </button>
      </div>

      <div className=" md:w-1/2 mt-9 md:mt-0 px-4">
        <img
          src={heroImage}
          // width={610}
          // height={279}
          className=" rounded-lg shadow-lg flex-shrink-0  h-auto w-full"
        />
      </div>
    </div>
  );
}

export default LandingHero;
