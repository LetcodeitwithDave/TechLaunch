// InputComponent.js
import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../authcontext/inputContext";
import Dropdown from "../landingpage/components/Dropdown";

function Input() {
  const [searchInput, setSearchInput] = useState("");
  const [getLocation, setGetLocation] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    date_posted: "",
    employment_types: "",
  });

  const { setUserData } = useContext(InputContext);

  console.log(searchInput);

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "11176b3d81msh1249e7c0bded57cp1ffb0ajsn50869dc9a9fd",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const filterparams = Object.keys(selectedFilters)
        .filter((key) => selectedFilters[key])
        .map((key) => `${key}=${selectedFilters[key]}`)
        .join("&");
      console.log("this is the filter", filterparams);

      const query = getLocation
        ? `${searchInput} in ${getLocation}`
        : searchInput || "Django developer";

      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&remote_jobs_only=true&${filterparams}`,
        options
      );
      console.log(response);

      const result = await response.json();

      console.log(result.data);
      setUserData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedFilters]); // Re-fetch data when filters change

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  // get data from child component- DropDown
  const handleFilterSelect = (filterCategory, filter) => {
    setSelectedFilters((prevFilter) => ({
      ...prevFilter,
      [filterCategory]: filter, //key : value from Dropdown component
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 my-6">
      <div className=" flex items-center border rounded-full border-gray-300 w-full max-w-3xl shadow-lg">
        {/* location input */}
        <div className=" flex items-center border-r border-gray-300 p-2 w-full">
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
        </div>

        {/* job search input */}
        <div className="  flex items-center w-full p-2">
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
          <button
            type="submit"
            onClick={() => fetchData()}
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
        </div>
      </div>

      {/* send setGetLocation as prop - also get data for location input */}
      <div className="flex flex-row gap-1 mt-2">
        {/* add onFilterSelect as prop to get filter option */}

        <Dropdown
          setGetLocation="dave"
          title="Date Posted"
          displayOptions={[
            "All day",
            "Past 24 hours",
            "Past 3days",
            "Past week",
            "Past month",
          ]}
          options={["all", "today", "3days", "week", "month"]}
          onFilterSelect={(filter) => handleFilterSelect("date_posted", filter)}
        />

        <Dropdown
          title="Employment type"
          displayOptions={["Full-time", "Contract", "Part-time", "Intern"]}
          options={["FULLTIME", "CONTRACTOR", "PARTTIME", "INTERN"]}
          onFilterSelect={(filter) =>
            handleFilterSelect("employment_types", filter)
          }
        />
      </div>
    </div>
  );
}

export default Input;
