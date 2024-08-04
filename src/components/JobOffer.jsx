import React from "react";
import { jobBackgroundImage } from "../assets/images";

function JobOffer({ jobInfo }) {
  const yearsOfExperince = (month) => {
    if (month > 12) {
      const value = month / 12;
      return ` ${value} years`;
    }
  };

  const formatSalary = () => {
    const minSalary = jobInfo.job_min_salary;
    const maxSalary = jobInfo.job_max_salary;

    if (jobInfo.job_min_salary > 999 && jobInfo.job_max_salary > 999) {
      const minSalary = jobInfo.job_min_salary / 1000;
      const maxSalary = jobInfo.job_max_salary / 1000;
      const minValue = minSalary.toFixed(1).replace(/\.0/, "") + "k";
      const maxValue = maxSalary.toFixed(1).replace(/\.0/, "") + "k";

      return `${minValue} - ${maxValue}`;
    } else {
      return `${minSalary} - ${maxSalary}`;
    }
  };
  return (
    <div className=" bg-test  mt-8 rounded-lg ">
      <div className=" flex-row justify-around p-6  flex gap-4">
        {/* work experoince  */}
        <div className=" flex flex-col  gap-2">
          <div className="  font-robotoRegular text-sm text-gray-500">
            Experience
          </div>
          <div className=" font-robotoMedium text-md text-textColor">
            {(jobInfo.job_required_experience &&
              yearsOfExperince(
                jobInfo.job_required_experience.required_experience_in_months
              )) ||
              "Not specifed"}
          </div>
        </div>

        {/* employement type */}
        <div className=" flex gap-2 flex-col">
          <div className=" font-robotoRegular text-sm text-gray-500">
            Employment Type
          </div>
          <div className=" font-robotoMedium text-md text-textColor">
            {jobInfo.job_employment_type}
          </div>
        </div>

        {/* Offer salary type */}
        <div className=" flex gap-2 flex-col">
          <div className=" font-robotoRegular text-sm text-gray-500">
            Offer Salary
          </div>
          <div className=" font-robotoMedium text-md text-textColor">
            {jobInfo.job_max_salary && jobInfo.job_min_salary ? (
              formatSalary()
            ) : (
              <div>TBD</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobOffer;
