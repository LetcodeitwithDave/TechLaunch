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
    <div className="px-8 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row">
        <div className="pl-0">
          <div className="pb-6">
            <p className="font-montserratRegular text-textColor text-sm">easy and fast</p>
            <h1 className="font-montserratSemibold text-3xl w-full md:text-4xl md:w-64 lg:text-5xl lg:w-80 pt-2">
              Get Hired In 3 Easy Steps
            </h1>
          </div>

          <div className="pl-0 ml-0 ">
            <div className="pb-9 flex items-start gap-4 md:gap-7">
              <img src={search1} alt="Search Icon" className="h-12 w-12 md:h-14 md:w-14" />
              <div className="">
                <h2 className="font-montserratSemibold text-lg">Search</h2>
                <p className="font-montserratRegular text-subheading leading-relaxed  w-72">
                  Enter your desired job title and location.
                </p>
              </div>
            </div>
            <div className="pb-9 flex items-start gap-4 md:gap-7">
              <img src={apply2} alt="Apply Icon" className="h-12 w-12 md:h-14 md:w-14" />
              <div className="max-w-sm">
                <h2 className="font-montserratSemibold text-lg">Apply</h2>
                <p className="font-montserratRegular text-subheading leading-relaxed w-72">
                  Select the job that fits your needs and submit your application.
                </p>
              </div>
            </div>
            <div className="pb-9 flex items-start gap-4 md:gap-7">
              <img src={getHired3} alt="Get Hired Icon" className="h-12 w-12 md:h-14 md:w-14" />
              <div className="max-w-sm">
                <h2 className="font-montserratSemibold text-lg">Get Hired</h2>
                <p className="font-montserratRegular text-subheading leading-relaxed  w-72">
                  Connect with employers and start your new role in tech.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* w-auto h-auto */}
        <div className=" mt-4 md:mt-20 md:ml-32 lg:mt-0 ">
          <img src={howItWorkImage}  alt="How it works" className=" h-auto w-auto  flex-shrink-0 rounded-lg "/>
        </div> 
      </div>
    </div>
  );
}
//             {/* pb-9 md:pb-5 lg:pb-9    h-12 w-12 md:h-10 md:w-10 lg:h-12 lg:w-12   */}


export default HowItWorks;
