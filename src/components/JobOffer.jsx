import React from "react";
import { jobBackgroundImage } from "../assets/images";

function JobOffer({ storedJob }) {
  const yearsOfExperince = (month) => {
    if (month > 12) {
      const value = month / 12;
      return ` ${value} years`;
    }
  };

  const formatSalary = () => {
    const minSalary = storedJob.job_min_salary;
    const maxSalary = storedJob.job_max_salary;

    if (storedJob.job_min_salary > 999 && storedJob.job_max_salary > 999) {
      const minSalary = storedJob.job_min_salary / 1000;
      const maxSalary = storedJob.job_max_salary / 1000;
      const minValue = minSalary.toFixed(1).replace(/\.0/, "") + "k";
      const maxValue = maxSalary.toFixed(1).replace(/\.0/, "") + "k";

      return `${minValue} - ${maxValue}`;
    } else {
      return `${minSalary} - ${maxSalary}`;
    }
  };
  return (
    <div className=" bg-test   mt-8 rounded-lg ">
      <div className=" flex-row justify-between sm:justify-around p-6 flex gap-4">
        {/* work experoince  */}
        <div className=" flex flex-col  gap-2">
          <div className="  font-robotoRegular text-sm text-gray-500">
            Experience
          </div>
          <div className=" font-robotoRegular text-md text-textColor">
            {(storedJob.job_required_experience &&
              yearsOfExperince(
                storedJob.job_required_experience.required_experience_in_months
              )) ||
              "Not specifed"}
          </div>
        </div>

        {/* employement type */}
        <div className=" flex gap-2 flex-col">
          <div className=" font-robotoRegular text-sm text-gray-500">
            Employment Type
          </div>
          <div className=" font-robotoRegular text-md text-textColor">
            {storedJob.job_employment_type}
          </div>
        </div>

        {/* Offer salary type */}
        <div className=" flex gap-2 flex-col">
          <div className=" font-robotoRegular text-sm text-gray-500">
            Offer Salary
          </div>
          <div className=" font-robotoRegular text-md text-textColor">
            {storedJob.job_max_salary && storedJob.job_min_salary ? (
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
