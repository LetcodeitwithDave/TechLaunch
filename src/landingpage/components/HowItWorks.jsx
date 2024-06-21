import React from "react";
import {
  apply1,
  apply2,
  search1,
  search2,
  getHired1,
  getHired4,
  getHired3,
  howItWorkImage,
} from "../../assets/landingpageimage/howitworksimages";

function HowItWorks() {
  return (
    <div className="px-4 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="pl-0 md:w-1/2 lg:w-2/5">
          <div className="pb-6">
            <p className="font-montserratRegular text-textColor text-sm">easy and fast</p>
            <h1 className="font-montserratSemibold text-3xl md:text-4xl lg:text-5xl pt-2">
              Get Hired In 3 Easy Steps
            </h1>
          </div>

          <div className="pl-0 ml-0">
            <div className="pb-6 md:pb-9 flex items-start gap-4 md:gap-7">
              <img src={search1} alt="Search Icon" className="h-12 w-12 md:h-14 md:w-14" />
              <div className="">
                <h2 className="font-montserratSemibold text-lg">Search</h2>
                <p className="font-montserratRegular text-subheading leading-relaxed">
                  Enter your desired job title and location.
                </p>
              </div>
            </div>
            <div className="pb-6 md:pb-9 flex items-start gap-4 md:gap-7">
              <img src={apply2} alt="Apply Icon" className="h-12 w-12 md:h-14 md:w-14" />
              <div className="max-w-sm">
                <h2 className="font-montserratSemibold text-lg">Apply</h2>
                <p className="font-montserratRegular text-subheading leading-relaxed">
                  Select the job that fits your needs and submit your application.
                </p>
              </div>
            </div>
            <div className="pb-6 md:pb-9 flex items-start gap-4 md:gap-7">
              <img src={getHired3} alt="Get Hired Icon" className="h-12 w-12 md:h-14 md:w-14" />
              <div className="max-w-sm">
                <h2 className="font-montserratSemibold text-lg">Get Hired</h2>
                <p className="font-montserratRegular text-subheading leading-relaxed">
                  Connect with employers and start your new role in tech.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 md:ml-10 lg:ml-20 md:w-1/2 lg:w-3/5">
          <img
            src={howItWorkImage}
            alt="How it works"
            className="h-auto w-full flex-shrink-0 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
