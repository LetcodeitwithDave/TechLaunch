import React, { useContext } from "react";
import { JobCard, JobDetail, Filter, ProfileCard } from "../components";
import { InputContext } from "../authcontext/inputContext";

function Jobsection() {
  const { setIsLoading, isLoading, userData } = useContext(InputContext);
  return (
    <div className=" flex gap-8   ">
      <div className=" justify-start hidden ml-6 h-screen md:block overflow-y-auto sticky top-0">
        <Filter />
      </div>

      <div>
        <div className=" mb-2">
          <span className=" text-textColor">Showing: </span>
          {!isLoading && <span>{userData.length} Jobs </span>}
        </div>
        <div className={`flex  mx-4 lg:mx-0 flex-col `}>
          <JobCard />
        </div>
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
