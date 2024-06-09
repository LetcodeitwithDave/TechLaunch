import React from "react";
import { heroImage } from "../../assets/landingpageimage";

function LandingHero() {
  return (
    <div className=" flex justify-between px-16 py-12">
      <div className=" w-1/2 text-left px-20 mt-3 ">
        <h1 className=" text-5xl font-montserratBold text-textColor mb-4">
          Empower Your Tech Career with Student- Friendly Jobs
        </h1>
        <p className=" text-subheading pt-7 font-montserratRegular text-lg mb-6">
        Find internships, remote work, and freelance opportunities that fit your schedule and help you gain real-world experience. Start building your future today!
        </p>
        
        <button className=" bg-buttonBackground hover:bg-blue-600 transition duration-300 mt-9 px-6 py-3 rounded-md items-center text-white font-montserratSemibold text-lg  ">
          Get Started
        </button>
      </div>

      <div className=" w-1/2">
        <img
          src={heroImage}
          // width={610}
          // height={279}
          className=" rounded-lg shadow-lg object-cover  mt-0 h-auto w-full"
        />
      </div>
    </div>
  );
}

export default LandingHero;
