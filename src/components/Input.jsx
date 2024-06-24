// InputComponent.js
import React, { useContext, useState } from "react";
import { InputContext } from "../authcontext/inputContext";

function Input() {
  const [searchInput, setSearchInput] = useState("");

  const { setUserData } = useContext(InputContext);

  console.log(searchInput);

  // get the api here
  // create state to store what the type in the input
  // use context api to share the state.

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8ea29b4f1amshb945df4cfa16601p18b0b1jsnd5b1db74b6f4",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async (searchInput) => {
    try {
      // const response = await fetch(url, options);
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${
          searchInput || "Django Developer"
        }&page=1&num_pages=1&date_posted=all&remote_jobs_only=true`,
        options
      );
      const result = await response.json();

      // store api in state
      setUserData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
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
          className="shadow-lg rounded-md p-3 pr-12 w-full h-14 focus:out focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Job title, keywords, or company"
        />
        <button
          type="submit"
          onClick={() => fetchData(searchInput)}
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
    </div>
  );
}

export default Input;
