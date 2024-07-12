import React, { useContext, useState } from "react";
import { FilterContext } from "../authcontext/filterContext";
import {
  datePostedDisplay,
  jobTypeDisplay,
  datePostedOption,
  jobTypeOption,
} from "../constants";

function Filter() {
  const [isClicked, setIsClicked] = useState("");
  const { selectedFilters, setSelectedFilters } = useContext(FilterContext);

  const handleFilterSelect = (
    filterCategory,
    queryFilter,
    index,
    filterSection
  ) => {
    setSelectedFilters((prevFilter) => ({
      ...prevFilter,
      [filterCategory]: queryFilter[index], //use index to get exact query value
    }));
    setIsClicked(filterSection[index].label);
    console.log("this is the index ", isClicked);

    console.log("selectedFilters -> ", selectedFilters);
  };

  return (
    <div className=" w-72 px-5 h-screen bg-white rounded-xl">
      <div className=" py-6 font-robotoBold text-gray-950 text-xl">Filter</div>

      <div className="mt-2">
        <div className=" text-gray-950 font-robotoBold text-[15px]">
          Data Posted
        </div>

        <div className="sm:flex flex-col gap-1 mt-2 justify-center font-robotoRegular">
          {datePostedDisplay.map((item, index) => (
            <a
              key={item.label}
              className={" text-gray-700 py-2 rounded-md text-sm"}
            >
              <div
                className=" flex gap-2"
                onClick={() =>
                  handleFilterSelect(
                    "date_posted",
                    datePostedOption,
                    index,
                    datePostedDisplay
                  )
                }
              >
                <div
                  className={`w-4 h-4 border ${
                    isClicked && item.label == isClicked
                      ? "bg-blue-500"
                      : console.log("something is wrong")
                  }  border-gray-400 rounded-sm `}
                ></div>
                <div>{item.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className=" mt-4">
        <div className=" text-gray-950 font-robotoBold text-[15px]">
          Job Type
        </div>
        <div className="sm:flex flex-col gap-1 mt-2 justify-center font-robotoRegular">
          {jobTypeDisplay.map((item, index) => (
            <a
              key={item.label}
              className={`text-gray-700 py-2 rounded-md text-sm`}
            >
              <div
                className=" flex gap-2"
                onClick={() => {
                  handleFilterSelect(
                    "employment_types",
                    jobTypeOption,
                    index,
                    jobTypeDisplay
                  );
                }}
              >
                <div
                  className={`w-4 h-4 border ${
                    isClicked && item.label == isClicked
                      ? "bg-blue-500"
                      : console.log("something is wron")
                  }  border-gray-400 rounded-sm `}
                ></div>
                <div>{item.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <h1 className=" mt-5">{isClicked}</h1>
    </div>
  );
}

export default Filter;