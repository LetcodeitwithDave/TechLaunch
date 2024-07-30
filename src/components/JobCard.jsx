import React, { useContext } from "react";
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

  const jobFunction = (index) => {
    setJobDetail(userData[index]);
    setJobDetailsOpen(!jobDetailsOpen);
    console.log("each job data in jobdetails -> ", jobDetail);
    console.log("this is the length of job detail -> ", jobDetail.length);
  };

  function timePosted(timestamp) {
    const givenDateInMs = timestamp * 1000; // Convert to milliseconds
    const now = Date.now();
    const diffInMs = now - givenDateInMs;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(diffInDays);
      return `${days} days ago`;
    }
  }

  return (
    <div className="">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        userData.length > 0 &&
        userData.map((job, index) => (
          <div key={index} className="py-2">
            <div
              onClick={() => jobFunction(index)}
              className="max-w-4xl p-6 flex flex-col gap-4 rounded-lg bg-white"
            >
              <div className=" flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 p-2 bg-heroBackground  rounded-md">
                  {job.employer_logo ? (
                    <img
                      src={job.employer_logo}
                      alt="job image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <img
                      src={job3}
                      alt="job image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                </div>

                <div className=" flex flex-col ">
                  <div className="flex ">
                    <div className="flex">
                      <h1 className=" text-xl font-robotoMedium text-textColor ">
                        {job.job_title || "Senior Backend Engineer-Payments"}
                      </h1>
                    </div>
                  </div>

                  <div className=" flex  space-x-1 text-gray-600 font-robotoRegular text-sm">
                    <p className=" ">{job.employer_name}</p>
                    {/* job_posted_at_timestamp */}

                    <span className=""> {job.job_country && "•"}</span>
                    <p>
                      {job.job_country && job.job_city
                        ? `${job.job_city}, ${job.job_country}`
                        : job.job_country}
                    </p>

                    <span className="">
                      {job.job_posted_at_timestamp &&
                        `• ${timePosted(job.job_posted_at_timestamp)}`}
                    </span>
                  </div>
                  <br />
                </div>
              </div>

              <div className=" flex-1">
                {/* <div className="">
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
                </div> */}

                <div className="">
                  {job.job_description && (
                    <div className="flex items-center">
                      <p className="font-sans text-gray-600">
                        {truncateText(job.job_description, 700)}
                      </p>
                      <br />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {jobDetailsOpen && <JobDetail />}
    </div>
  );
}

export default JobCard;
