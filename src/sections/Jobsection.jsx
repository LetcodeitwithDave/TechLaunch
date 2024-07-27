import React from "react";
import { JobCard, JobDetail, Filter, ProfileCard } from "../components";

function Jobsection() {
  return (
    <div className=" flex  gap-6 ">
      <div className=" justify-start hidden ml-6 h-screen md:block overflow-y-auto sticky top-0">
        <Filter />
      </div>

      <div className="flex mx-4 lg:mx-0 flex-col ">
        <JobCard />
      </div>

      {/* <div className="justify-end hidden lg:block ml-auto mr-6   ">
        <ProfileCard />
      </div> */}
      {/* <div className="hidden md:block lg:w-1/3 h-screen overflow-y-auto sticky top-0">
        <JobDetail />
      </div> */}
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
