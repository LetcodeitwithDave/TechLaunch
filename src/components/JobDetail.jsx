import React, { useContext } from "react";
import { InputContext } from "../authcontext/inputContext";

function JobDetail() {
  const { jobDetail, jobDetailsOpen, setJobDetailsOpen } =
    useContext(InputContext);

  return (
    <>
      {jobDetail.length > 0 ? (
        jobDetail.map((job, index) => (
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
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* main job details */}
              <div className=" rounded-lg">
                <div className=" flex space-x-4">
                  <div className=" flex ">
                    <h1 className="mb-2 text-xl font-semibold text-gray-900 hover:underline">
                      Senior Backend Engineer-Payments
                    </h1>
                  </div>
                </div>

                <p>Gurugeeks Royalty Limited </p>
                <p>Ikeja</p>
                <br />
                <div className="px-2">
                  <div className=" flex items-center space-x-4">
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
        ))
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
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* main job details */}
            <div className=" rounded-lg">
              <div className=" flex space-x-4">
                <div className=" flex ">
                  <h1 className="mb-2 text-xl font-semibold text-gray-900 hover:underline">
                    Senior Backend Engineer-Payments
                  </h1>
                </div>
              </div>

              <p>Gurugeeks Royalty Limited </p>
              <p>Ikeja</p>
              <br />
              <div className="px-2">
                <div className=" flex items-center space-x-4">
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
      )}
    </>
  );
}

export default JobDetail;
