import React from "react";
import { JobCard, JobDetail } from "../components";

function Jobsection() {
  return (
    <div className=" flex  justify-center  ">
      <div className="flex  flex-col mx-3 lg:mx-0 md:pr-6 ">
        <JobCard />
      </div>
      <div className="hidden md:block lg:w-1/3 h-screen overflow-y-auto sticky top-0">
        <JobDetail />
      </div>
    </div>

    // <div className=" flex justify-center  ">
    //   <div className=" w-full flex  flex-col mx-3 ">
    //     <JobCard />
    //   </div>
    //   <div className="hidden md:block h-screen overflow-y-auto sticky top-0">
    //     <JobDetail />
    //   </div>
    // </div>
  );
}

export default Jobsection;
