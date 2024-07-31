import React, { useContext } from "react";
import { LandingHeader } from "../src/landingpage/components";
import { InputContext } from "../src/authcontext/inputContext";
import { job3 } from "../src/assets/images";

function JobDetailsPage() {
  const { jobDetailsOpen, setJobDetailsOpen } = useContext(InputContext);
  const localjob = localStorage.getItem("jobdetail");
  const jobInfo = JSON.parse(localjob);
  console.log("Jobdetail ->  ", jobInfo);

  console.log("detail page is here ooo");

  return (
    <div className=" bg-test">
      <LandingHeader />

      <div className=" relative mx-auto gap-8 px-2 sm:px-6 lg:px-8 flex items-center ">
        <div className=" fixed  inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white p-8 rounded-t-lg shadow-lg  w-1/2 relative">
            <button
              onClick={() => setJobDetailsOpen(!jobDetailsOpen)}
              className="transition duration-200  absolute top-1  right-1 hover:text-gray-700 hover:bg-gray-100 hover:rounded-md px-3 py-3 mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* main job details */}

            <div className="">
              {jobInfo.employer_logo ? (
                <img
                  src={jobInfo.employer_logo}
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

              <h1 className="mb-2 text-2xl font-robotoMedium text-gray-800">
                {jobInfo.job_title}
              </h1>

              <div className=" font-robotoRegular text-textColor flex space-x-2">
                <p>
                  <a
                    className={
                      jobInfo.employer_website &&
                      " underline underline-offset-4 decoration-gray-600"
                    }
                    href={jobInfo.employer_website && jobInfo.employer_website}
                  >
                    {jobInfo.employer_name}
                  </a>
                </p>
                <p>
                  |{" "}
                  {jobInfo.job_city === null
                    ? jobInfo.job_country
                    : jobInfo.job_city}
                </p>
              </div>

              <button className=" transition duration-300 hover:bg-blue-600 px-4 py-2 rounded-md mt-4 bg-buttonBackground text-white  font-robotoMedium">
                <a
                  href={jobInfo.apply_options.map((apply) => apply.apply_link)}
                >
                  {" "}
                  Apply Now
                </a>
              </button>
            </div>
          </div>

          {/* second card */}
          <div className="bg-white font-robotoRegular  p-8 mt-0 shadow-lg w-1/2 text-textColor overflow-y-auto sticky top-0">
            {/* main job details */}
            <div className=" mt-0 rounded-lg">
              <h1 className=" text-xl font-robotoMedium text-gray-800">
                Full job description
              </h1>

              <p className=" text-md  mt-6">Job Title: {jobInfo.job_title}</p>

              <p className=" text-md  mt-4">
                {jobInfo.job_city && jobInfo.job_country ? (
                  <p>
                    Location: {jobInfo.job_city}, {jobInfo.job_country}
                  </p>
                ) : (
                  <p>location : {jobInfo.job_city || jobInfo.job_country}</p>
                )}
              </p>

              {jobInfo.job_highlights.Responsibilities && (
                <div className=" mt-6">
                  <p>Key Responsibilities: </p>
                  <br />
                </div>
              )}
              {jobInfo.job_highlights &&
                jobInfo.job_highlights.Responsibilities?.map((keys) => (
                  <div className=" flex " key={keys.id}>
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
                        className="lucide lucide-dot w-6 h-6 text-textColor"
                      >
                        <circle cx="12.1" cy="12.1" r="1" />
                      </svg>
                    </button>

                    <p className="font-sans text-textColor mb-2">{keys}</p>
                  </div>
                ))}

              {jobInfo.job_highlights.Qualifications && (
                <div className=" mt-6">
                  <p>Qualifications: </p>
                  <br />
                </div>
              )}

              {jobInfo.job_highlights &&
                jobInfo.job_highlights.Qualifications?.map((keys) => (
                  <div className=" flex " key={keys.id}>
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
                        className="lucide lucide-dot w-6 h-6 text-textColor"
                      >
                        <circle cx="12.1" cy="12.1" r="1" />
                      </svg>
                    </button>

                    <p className="font-sans text-textColor mb-2">{keys}</p>
                  </div>
                ))}

              <p className=" text-textColor font-robotoRegular mt-4">
                Job type: {jobInfo.job_employment_type}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
