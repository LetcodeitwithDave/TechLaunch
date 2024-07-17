import React, { useContext } from "react";
import { InputContext } from "../authcontext/inputContext";

function JobDetail() {
  const { jobDetail, jobDetailsOpen } = useContext(InputContext);

  return (
    <>
      <div className="block p-6  rounded-lg">
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
              Experience with JavaScript, Amazon Web Service(AWS), Git , or
              MongoDB is helpful to... this will work is ass out
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetail;
