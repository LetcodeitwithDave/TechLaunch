import React, { useContext } from "react";
import { InputContext } from "../authcontext/inputContext";
import { job3 } from "../assets/images";
function JobDetail() {
  const { jobDetail, jobDetailsOpen, setJobDetailsOpen } =
    useContext(InputContext);

  return (
    <>
      {jobDetail ? (
        <div className=" fixed   inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white p-8 rounded-t-lg shadow-lg  w-1/2 relative">
            <button
              onClick={() => setJobDetailsOpen(!jobDetailsOpen)}
              className="transition duration-200  absolute top-4  right-4 hover:text-gray-700 hover:bg-gray-100 hover:rounded-sm px-1 py-1"
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
              {jobDetail.employer_logo ? (
                <img
                  src={jobDetail.employer_logo}
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

              <h1 className="mb-2 text-xl font-robotoMedium text-gray-800 hover:underline">
                {jobDetail.job_title}
              </h1>

              <div className=" font-robotoRegular text-textColor flex space-x-2">
                <p>
                  <a
                    className={
                      jobDetail.employer_website &&
                      " underline underline-offset-2"
                    }
                    href={
                      jobDetail.employer_website && jobDetail.employer_website
                    }
                  >
                    {jobDetail.employer_name}
                  </a>
                </p>
                <p>
                  |{" "}
                  {jobDetail.job_city === null
                    ? jobDetail.job_country
                    : jobDetail.job_city}
                </p>
              </div>

              <button className=" transition duration-300 hover:bg-blue-600 p-2 rounded-md mt-2 bg-buttonBackground text-white  font-robotoMedium">
                <a
                  href={jobDetail.apply_options.map(
                    (apply) => apply.apply_link
                  )}
                >
                  {" "}
                  Apply Now
                </a>
              </button>
            </div>
          </div>

          {/* second card */}
          <div className="bg-white p-8 mt-0 shadow-lg w-1/2  overflow-y-auto sticky top-0">
            {/* main job details */}
            <div className=" mt-0 rounded-lg">
              <div className=" flex space-x-4">
                <div className=" flex ">
                  <h1 className="text-xl font-semibold text-gray-900 hover:underline">
                    Senior Backend Engineer-Payments
                  </h1>
                </div>
              </div>

              <p>Gurugeeks Royalty Limited </p>
              <p>Ikeja</p>
              <br />
              <div className="px-2">
                <div className=" flex items-center  space-x-4 ">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-lg text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>

                  <p className=" font-sans text-gray-600">
                    The ideal candidate will have a unique blend of technical
                    expertise, insatiable curiosity
                  </p>
                  <br />
                </div>

                <div className=" flex items-center mt-2 space-x-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>

                  <p className=" font-sans  text-gray-600">
                    Experience with JavaScript, Amazon Web Service(AWS), Git ,
                    or MongoDB is helpful to... this will work is ass out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" fixed   inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white p-8 rounded-t-lg shadow-lg  w-1/2 relative">
            <button
              onClick={() => setJobDetailsOpen(!jobDetailsOpen)}
              className="transition duration-200  absolute top-4  right-4 hover:text-gray-700 hover:bg-gray-100 hover:rounded-sm px-1 py-1"
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
              <img
                src={job3}
                alt="job image"
                className=" mb-2 lg:h-14 lg:w-16 md:h-12 md:w-16 h-12 w-28 rounded-full"
              />

              <h1 className="mb-2 text-xl font-robotoMedium text-gray-800 hover:underline">
                Senior Backend Engineer-Payments
              </h1>

              <div className=" font-robotoRegular text-textColor flex space-x-2">
                <p>Gurugeeks Royalty Limited</p>
                <p>| Ikeja</p>
              </div>

              <button className=" transition duration-300 hover:bg-blue-600 p-2 rounded-md mt-2 bg-buttonBackground text-white  font-robotoMedium">
                <a href=""> Apply Now</a>
              </button>
            </div>
          </div>

          <div className="bg-white p-8 mt-0 shadow-lg w-1/2  overflow-y-auto sticky top-0">
            {/* second card and main job details */}
            <div className=" mt-0 rounded-lg">
              <div className=" flex space-x-4">
                <div className=" flex ">
                  <h1 className="text-xl font-semibold text-gray-900 hover:underline">
                    Senior Backend Engineer-Payments
                  </h1>
                </div>
              </div>

              <p>Gurugeeks Royalty Limited </p>
              <p>Ikeja</p>
              <br />
              <div className="px-2">
                <div className=" flex items-center  space-x-4 ">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-lg text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>

                  <p className=" font-sans text-gray-600">
                    The ideal candidate will have a unique blend of technical
                    expertise, insatiable curiosity
                  </p>
                  <br />
                </div>

                <div className=" flex items-center mt-2 space-x-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>

                  <p className=" font-sans  text-gray-600">
                    Experience with JavaScript, Amazon Web Service(AWS), Git ,
                    or MongoDB is helpful to... this will work is ass out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JobDetail;
