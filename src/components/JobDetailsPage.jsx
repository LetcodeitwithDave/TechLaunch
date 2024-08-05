import React, { useContext } from "react";
import { LandingHeader } from "../landingpage/components";
import { JobContext } from "../authcontext/JobDetailContext";
import { job3, jobBackgroundImage, nocompanyimage } from "../assets/images";
import BackButton from "./BackButton";
import JobOffer from "./JobOffer";

function JobDetailsPage() {
  const { jobInfo } = useContext(JobContext);

  const timePosted = (timestamp) => {
    const givenDateInMs = timestamp * 1000;
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
  };

  return (
    <div className="bg-test">
      <LandingHeader />
      <div className="mx-6">
        <div className="mt-8">
          <BackButton />
        </div>
        <div className="mt-8 p-4 bg-white rounded-md max-w-4xl">
          <div>
            <div className="relative">
              <img
                src={jobBackgroundImage}
                className="rounded-t-lg w-full"
                alt=""
              />
              <div className="mx-4">
                <div className="flex-shrink-0 w-16 h-16 p-1 top-9 -mt-9 bg-heroBackground rounded-md">
                  <img
                    src={jobInfo.employer_logo || nocompanyimage}
                    alt="job image"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex flex-col">
                    <h1 className="text-xl gap-2 md:text-3xl font-robotoMedium text-textColor">
                      {jobInfo.job_title}
                    </h1>

                    <div className="flex space-x-1 mt-0 text-gray-600 font-robotoRegular text-sm">
                      <p>{jobInfo.employer_name}</p>
                      {jobInfo.job_country && <span>•</span>}
                      <p>
                        {jobInfo.job_country && jobInfo.job_city
                          ? `${jobInfo.job_city}, ${jobInfo.job_country}`
                          : jobInfo.job_country}
                      </p>
                      {jobInfo.job_posted_at_timestamp && (
                        <span>
                          • {timePosted(jobInfo.job_posted_at_timestamp)}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="transition duration-300 hover:bg-blue-600 px-4 py-2 rounded-md mt-4 bg-buttonBackground text-white font-robotoMedium">
                    <a
                      href={jobInfo.apply_options[0]?.apply_link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </button>
                </div>
                <div>
                  <JobOffer jobInfo={jobInfo} />
                </div>

                <div className="mt-10">
                  <div className="font-robotoMedium text-textColor text-xl">
                    About The Job
                  </div>

                  <div
                    className="mt-2 font-robotoRegular text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: jobInfo.job_description,
                    }}
                  />

                  <div className="mt-4">
                    {jobInfo.job_highlights && (
                      <>
                        {jobInfo.job_highlights.Qualifications && (
                          <div className="mt-4">
                            <h2 className="font-robotoMedium text-textColor text-lg">
                              Qualifications and skiil set
                            </h2>
                            <ul className="list-disc list-inside mt-4 leading-9">
                              {jobInfo.job_highlights.Qualifications.map(
                                (qualification, index) => (
                                  <li
                                    key={index}
                                    className="font-robotoRegular text-gray-600"
                                  >
                                    {qualification}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                        {jobInfo.job_highlights.Responsibilities && (
                          <div className="mt-4">
                            <h2 className="font-robotoMedium text-textColor text-lg ">
                              Responsibilities
                            </h2>
                            <ul className="list-disc list-inside mt-2 leading-9">
                              {jobInfo.job_highlights.Responsibilities.map(
                                (responsibility, index) => (
                                  <li
                                    key={index}
                                    className="font-robotoRegular text-gray-600"
                                  >
                                    {responsibility}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
