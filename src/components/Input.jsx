// InputComponent.js
import React from 'react';
import { useInputContext } from '../authcontext/inputContext';

function Input() {
  const { searchInput, setSearchInput } = useInputContext();
  console.log(searchInput)

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 my-6 mt-0">
      <div className="relative border border-gray-200 rounded-lg w-full max-w-lg">
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          value={searchInput}
          onChange={handleChange}
          className="shadow-lg rounded-md p-3 pr-12 w-full focus:out focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Job title, keywords, or company"
        />
        <button type="submit" className="absolute right-3 top-3">
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
