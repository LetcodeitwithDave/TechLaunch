// InputComponent.js
import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../authcontext/inputContext";
import Dropdown from "../landingpage/components/Dropdown";

function Input() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const { setUserData } = useContext(InputContext);

  console.log(searchInput);

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "86363862bbmsh9eb0d6ad11b97e8p1bec71jsn7419c6a18d1b",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const filterString = selectedFilters.join("&");
      console.log(filterString);
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${searchInput}&page=1&num_pages=1&date_posted=all&remote_jobs_only=true&${filterString}`,
        options
      );
      console.log(response);
      const result = await response.json();
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

  const handleFilterSelect = (filter) => {
    setSelectedFilters((prevFilters) => [...prevFilters, filter]);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 my-6 mt-5">
      <div className="relative border border-gray-500 rounded-lg w-full max-w-lg">
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="shadow-lg rounded-md p-3 pr-12 w-full h-14 focus:out focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Job title, keywords, or company"
        />
        <button
          type="submit"
          onClick={() => fetchData()}
          className="absolute right-3 top-3"
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-row gap-1">
        {/* add onFilterSelect as prop to get filter option */}
        <Dropdown onFilterSelect={handleFilterSelect} />
        <Dropdown onFilterSelect={handleFilterSelect} />
        <Dropdown onFilterSelect={handleFilterSelect} />
        <Dropdown onFilterSelect={handleFilterSelect} />
      </div>
    </div>
  );
}

export default Input;
