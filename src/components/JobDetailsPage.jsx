import React, { useContext } from "react";
import { LandingHeader } from "../landingpage/components";
import { JobContext } from "../authcontext/JobDetailContext";
import { job3, jobBackgroundImage } from "../assets/images";
import BackButton from "./BackButton";

function JobDetailsPage() {
  const { jobInfo } = useContext(JobContext);

  return (
    <div className=" bg-test mx-6">
      <LandingHeader />
      <div className=" mt-8">
        <BackButton />
      </div>
      <div className=" mt-5 border bg-white max-w-4xl ">
        <div className=" p-2 rounded-t-lg">
          <div>
            <img src={jobBackgroundImage} className=" rounded-t-lg" alt="" />
          </div>

          {jobInfo.employer_logo ? (
            <img
              src={jobInfo.employer_logo}
              alt="job image"
              className="lg:h-12 lg:w-14 md:h-12 md:w-16 h-12 w-12 rounded-full"
            />
          ) : (
            <img
              src={job3}
              alt="job image"
              className="lg:h-12 lg:w-14 md:h-12 md:w-16 h-12 w-28 rounded-full"
            />
          )}
          <h1 className="mb-2 text-2xl font-robotoMedium  text-textColor">
            {jobInfo.job_title}
          </h1>
          <div className="font-robotoRegular text-textColor flex space-x-2">
            <p>
              <a
                className={
                  jobInfo.employer_website &&
                  "underline underline-offset-4 decoration-gray-600"
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
          <button className="transition duration-300 hover:bg-blue-600 px-4 py-2 rounded-md mt-4 bg-green-400 text-white font-robotoMedium">
            <a href={jobInfo.apply_options.map((apply) => apply.apply_link)}>
              Apply Now
            </a>
          </button>
          <div className="mt-0 rounded-lg">
            <h1 className="text-xl font-robotoMedium text-textColor">
              Full job description
            </h1>
            <p className="text-md mt-6">Job Title: {jobInfo.job_title}</p>
            <p className="text-md mt-4">
              Location: {jobInfo.job_city || jobInfo.job_country}
            </p>
            <div
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: jobInfo.job_description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
