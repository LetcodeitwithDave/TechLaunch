// InputComponent.js
import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../authcontext/inputContext";
import { Dropdown, CompanyFilter } from "./index";
import { FilterContext } from "../authcontext/filterContext";

function Input() {
  const [searchInput, setSearchInput] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const [getLocation, setGetLocation] = useState("");

  const [completedQuery, setCompletedQuery] = useState("");
  // const [selectedFilters, setSelectedFilters] = useState({
  //   date_posted: "",
  //   employment_types: "",
  //   company_types: "",
  // });
  const { selectedFilters, setSelectedFilters } = useContext(FilterContext);
  const { setUserData, setIsLoading, isLoading } = useContext(InputContext);

  console.log(searchInput);

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "86363862bbmsh9eb0d6ad11b97e8p1bec71jsn7419c6a18d1b",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async (query) => {
    try {
      const filterparams = Object.keys(selectedFilters)
        .filter((key) => selectedFilters[key])
        .map((key) => `${key}=${selectedFilters[key]}`)
        .join("&");
      console.log("this is the filter in input component ", filterparams);

      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&remote_jobs_only=true&${filterparams}`,
        options
      );
      console.log(response);
      if (response.ok) {
        const result = await response.json();
        console.log(result.data);
        setUserData(result.data);
        setIsLoading(false);

        localStorage.setItem("savedJob", JSON.stringify(result.data));
        localStorage.setItem("lastFetchTime", Date.now());
      } else {
        console.log("somthing went wrong with fetch");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (completedQuery) {
      fetchData(completedQuery); //pass query to fetchData
    } else {
      // for the display of job on pageload
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
      const savedJob = localStorage.getItem("savedJob");

      const lastFetchTime = localStorage.getItem("lastFetchTime");

      if (savedJob && lastFetchTime && Date.now() - lastFetchTime < oneDay) {
        if (isLoading) {
          const timeLoader = setInterval(() => {
            setIsLoading(true);

            setUserData(JSON.parse(savedJob));
            setIsLoading(false);
          }, 1000);
          return () => clearInterval(timeLoader);
        }
      } else {
        fetchData("developer");
      }
    }
  }, [completedQuery, selectedFilters]); // Re-fetch data when filter & completed change

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const query = getLocation
        ? `${searchInput} in ${getLocation}`
        : searchInput || "Django developer";
      setCompletedQuery(query);
      setIsLoading(true);
      setDoneTyping(true);
    }
  };

  //set completed query
  const handleButtonclick = () => {
    const query = getLocation
      ? `${searchInput} in ${getLocation}`
      : searchInput || "Django developer";
    setCompletedQuery(query);
    setIsLoading(true);
    setDoneTyping(true);
  };

  // get data from child component- DropDown
  const handleFilterSelect = (filterCategory, filter) => {
    console.log("mobile handlefilter -> ", selectedFilters);
    setSelectedFilters((prevFilter) => ({
      ...prevFilter,
      [filterCategory]: filter, //key : value from Dropdown component
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 my-2">
      <div className=" flex items-center border rounded-full bg-white  w-full max-w-3xl shadow-lg">
        {/* job search input */}
        <div className="  flex items-center border-gray-300 border-r w-full p-2">
          <button
            type="submit"
            onClick={handleButtonclick}
            className="right-3 top-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            type="text"
            id="searchInput"
            name="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className=" w-full p-2 outline-none"
            placeholder="Job title, keywords, or company"
          />
        </div>

        {/* location input */}
        <div className=" flex items-center p-2 w-full">
          <input
            type="text"
            id="locationInput"
            name="locationInput"
            value={getLocation}
            onChange={(e) => setGetLocation(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full p-2 outline-none"
            placeholder="City, state (e.g., Berlin, Germany)"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-map-pin w-6 h-6 text-gray-500 mr-2 "
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
      </div>

      {/* drropdown */}
      {doneTyping && (
        <div className=" md:hidden flex flex-row flex-wrap gap-1 mt-4">
          <Dropdown
            title="Date Posted"
            displayOptions={[
              "All day",
              "Past 24 hours",
              "Past 3days",
              "Past week",
              "Past month",
            ]}
            options={["all", "today", "3days", "week", "month"]}
            onFilterSelect={(filter) =>
              handleFilterSelect("date_posted", filter)
            }
          />

          <Dropdown
            title="Job Type"
            displayOptions={["Full-time", "Contract", "Part-time", "Intern"]}
            options={["FULLTIME", "CONTRACTOR", "PARTTIME", "INTERN"]}
            onFilterSelect={(filter) =>
              handleFilterSelect("employment_types", filter)
            }
          />

          {/* <Dropdown
          title="Company"
          displayOptions={["Full-time", "Contract", "Part-time", "Intern"]}
          options={["FULLTIME", "CONTRACTOR", "PARTTIME", "INTERN"]}
          onFilterSelect={(filter) =>
            handleFilterSelect("employment_types", filter)
          }
        /> */}

          <CompanyFilter
            // isLoading={isLoading}
            title="Company Type"
            query={completedQuery} //send completed query
            onFilterSelect={(filter) =>
              handleFilterSelect("company_types", filter)
            }
          />
        </div>
      )}
    </div>
  );
}

export default Input;
