import React, { useContext, useState } from "react";
import { InputContext } from "../authcontext/inputContext";
import { job3 } from "../assets/images";
import JobDetail from "./JobDetail";

function JobCard() {
  const {
    userData,
    setJobDetail,
    jobDetail,
    setJobDetailsOpen,
    jobDetailsOpen,
    isLoading,
  } = useContext(InputContext);

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  const test = () => {
    console.log("job details oo");
    setJobDetailsOpen(!jobDetailsOpen);
  };

  const jobFunction = (index) => {
    setJobDetail(userData[index]);
    setJobDetailsOpen(!jobDetailsOpen);
    console.log("each job data  in jobdetails -> ", jobDetail);
    console.log("this is the lenght of job detail -> ", jobDetail.length);
  };
  return (
    <div className="">
      {userData.length > 0
        ? userData.map((job, index) => (
            <div key={index} className="py-2">
              {/* it starts here */}
              <div
                onClick={() => jobFunction(index)}
                className="  max-w-4xl p-6 flex flex-row gap-4  rounded-lg border border-gray-300 bg-white"
              >
                {/* image */}
                <div>
                  {job.employer_logo ? (
                    <img
                      src={job.employer_logo}
                      alt="job image"
                      className=" lg:h-12 lg:w-14 md:h-12 md:w-16 h-12 w-12  rounded-full"
                    />
                  ) : (
                    <img
                      src={job3}
                      alt="job image"
                      className=" lg:h-12 lg:w-14 md:h-12 md:w-16 h-12 w-28 rounded-full"
                    />
                  )}
                </div>
                <div>
                  <div className="flex space-x-4">
                    <div className="flex">
                      <h1 className="mb-2 text-xl font-semibold text-gray-900 hover:underline">
                        {job.job_title || "Senior Backend Engineer-Payments"}
                      </h1>
                    </div>
                  </div>
                  <p>{job.employer_name} </p>

                  <p>
                    {job.job_city === null ? job.job_country : job.job_city}
                  </p>
                  <br />
                  <div className="">
                    {job.job_highlights &&
                      job.job_highlights.Responsibilities?.slice(0, 3).map(
                        (item, i) => (
                          <div key={i} className="flex items-center">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-dot text-gray-900"
                              >
                                <circle cx="12.1" cy="12.1" r="1" />
                              </svg>
                            </button>
                            <p className="font-sans text-gray-600">
                              {truncateText(item, 120)}
                            </p>
                            <br />
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))
        : isLoading && (
            <div className="flex items-center justify-center h-screen    ">
              <div className="loader"></div>
            </div>
          )}

      {jobDetailsOpen && <JobDetail />}
    </div>
  );
}

export default JobCard;
