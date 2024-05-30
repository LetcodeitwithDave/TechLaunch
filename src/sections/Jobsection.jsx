import React from "react";
import { JobCard, JobDetail } from "../components";

function Jobsection() {

  return (
    <div className=" flex  max-container justify-center  ">
      <div className=" flex  flex-col pr-6 ">
        <JobCard />
      </div>
      <div className=" lg:w-1/3 h-screen overflow-y-auto sticky top-0">
        <JobDetail />
      </div>
    </div>
  );
}

export default Jobsection;
