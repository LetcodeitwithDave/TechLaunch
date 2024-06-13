import React from "react";
import {
  apply1,
  apply2,
  search1,
  search2,
  getHired1,
  getHired4,
} from "../../assets/landingpageimage/howitworksimages";

function HowItWorks() {
  return (
    <div className=" px-32">
      <div className=" pb-6">
        <p className=" font-montserratRegular text-textColor">easy and fast</p>
        <h1 className=" font-montserratSemibold text-5xl  w-80 pt-2">
          Get Hired In 3 Easy Steps
        </h1>
      </div>
      <div className="">
        {/*  border px-3 py-3 w-12 rounded-lg */}
        <div className=" pb-9  flex gap-7">
          <img src={search2} height={55} width={50} className=" " />
          <div className=" ">
            <h1 className=" font-montserratSemibold text-lg"> Search</h1>
            <p className=" font-montserratRegular text-subheading">
              Enter your desired job title and location.
            </p>
          </div>
        </div>
        <div className=" pb-9  flex gap-7">
          <img src={apply1} height={55} width={50} className=" " />
          <div className="">
            <h1 className=" font-montserratSemibold text-lg"> Apply</h1>
            <p className=" font-montserratRegular text-subheading  whitespace-pre-line ">
              Select the job that fits your needs
              and submit your application.
            </p>
          </div>
        </div>
        <div className=" pb-9 flex  gap-7">
          <img src={getHired4} height={55} width={50} className=" " />
          <div className="">
            <h1 className=" font-montserratSemibold text-lg"> Get Hired</h1>
            <p className=" font-montserratRegular text-subheading  ">
              Connect with employers and start your new role in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
