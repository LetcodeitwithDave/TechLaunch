import React, { useContext } from "react";
import { InputContext } from "../authcontext/inputContext";
import { nocompanyimage } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../authcontext/JobDetailContext";
import Loader from "./Loader";
function JobCard() {
  const navigate = useNavigate();
  const { userData, jobDetailsOpen, setJobDetailsOpen, isLoading } =
    useContext(InputContext);
  const { jobInfo, setJobInfo } = useContext(JobContext);

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  const formatSalary = (jobInfo) => {
    const minSalary = jobInfo.job_min_salary;
    const maxSalary = jobInfo.job_max_salary;

    if (jobInfo.job_min_salary > 999 && jobInfo.job_max_salary > 999) {
      const minSalary = jobInfo.job_min_salary / 1000;
      const maxSalary = jobInfo.job_max_salary / 1000;
      const minValue = minSalary.toFixed(1).replace(/\.0/, "") + "k";
      const maxValue = maxSalary.toFixed(1).replace(/\.0/, "") + "k";

      return `${minValue} - ${maxValue}`;
    } else {
      return `$${minSalary} - $${maxSalary}`;
    }
  };

  const jobFunction = (index) => {
    setJobInfo(userData[index]);
    localStorage.setItem("jobInfo", JSON.stringify(userData[index]));
    console.log("this is job info -> ", jobInfo);
    setJobDetailsOpen(!jobDetailsOpen);
    navigate(`/jobpage/${userData[index].job_id}`);
  };

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
    <div className="">
      {isLoading ? (
        <Loader />
      ) : (
        userData.length > 0 &&
        userData.map((job, index) => (
          <div key={index} className="py-2">
            <div
              onClick={() => jobFunction(index)}
              className="max-w-4xl p-6 flex flex-col gap-4 rounded-lg hover:shadow-lg bg-white cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 p-2 bg-heroBackground rounded-md">
                  <img
                    src={job.employer_logo || nocompanyimage}
                    alt="job image"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-robotoMedium text-textColor">
                    {job.job_title || "Senior Backend Engineer-Payments"}
                  </h1>
                  <div className="flex space-x-1 text-gray-600 font-robotoRegular text-sm">
                    <p>{job.employer_name}</p>
                    {job.job_country && <span>•</span>}
                    <p>
                      {job.job_country && job.job_city
                        ? `${job.job_city}, ${job.job_country}`
                        : job.job_country}
                    </p>
                    {job.job_posted_at_timestamp && (
                      <span>• {timePosted(job.job_posted_at_timestamp)}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-sans text-gray-600">
                  {truncateText(job.job_description, 700)}
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
                <div className=" flex gap-4">
                  <div className="flex gap-2 items-center text-gray-600 w-28 md:max-w-md bg-gray-100 p-2 rounded-lg text-xs font-robotoRegular">
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
                      className="lucide lucide-briefcase-business"
                    >
                      <path d="M12 12h.01" />
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                    {job.job_employment_type}
                  </div>

                  <div className="">
                    <div className=" ">
                      {job.job_max_salary && job.job_min_salary ? (
                        <div className=" items-center text-gray-600 w-28 md:max-w-md text-center bg-gray-100  p-2 rounded-lg text-md font-robotoRegular">
                          {formatSalary(job)}
                        </div>
                      ) : (
                        <div className=" items-center text-gray-600 w-28 md:max-w-md text-center bg-gray-100  p-2 rounded-lg text-md font-robotoRegular">
                          TBD
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="md:flex grid grid-cols-2 gap-4 items-center">
                  <button
                    onClick={() =>
                      navigate(`/jobpage/${userData[index].job_id}`)
                    }
                    className="bg-gray-100 py-2 px-4 text-sm rounded-md text-gray-600 font-robotoRegular hover:bg-gray-200"
                  >
                    View Details
                  </button>
                  <button
                    href={job.apply_options.map((apply) => apply.apply_link)}
                    target="_blank"
                    className="bg-buttonBackground hover:bg-blue-600 text-white font-robotoRegular text-sm px-10 py-2 rounded-md"
                  >
                    <a
                      href={job.apply_options.map((apply) => apply.apply_link)}
                      target="_blank"
                    >
                      Apply Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default JobCard;
