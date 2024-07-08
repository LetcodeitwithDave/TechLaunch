import React, { useEffect, useRef, useState } from "react";

function CompanyFilter({ isLoading, title, query, onFilterSelect }) {
  // const queryRef = useRef(query); //store search text
  // const [timeoutId, setTimeoutId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const [companyType, setCompanyType] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8ea29b4f1amshb945df4cfa16601p18b0b1jsnd5b1db74b6f4",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async (query) => {
    try {
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search-filters?query=${query}&date_posted=all`,
        options
      );
      if (response.ok) {
        const result = await response.json();
        console.log("response -> ", response);
        console.log("response data -> ", result.data.company_types);
        setCompanyType(result.data.company_types);
      } else {
        console.log("something went wrong");
        alert("something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // if (!isLoading) {
    //   queryRef.current = query; //check if query changes
    //   if (timeoutId) {
    //     clearTimeout(setTimeoutId); // clear previous timeout
    //   }
    //   const newTimeOut = setTimeout(() => {
    //     if (queryRef.current) {
    //       fetchData(queryRef.current);
    //     }
    //   }, 1000);

    //   setTimeoutId(newTimeOut); //store timeout id
    //   return () => clearTimeout(newTimeOut);
    // }

    if (query) {
      fetchData(query);
    }
  }, [query]);

  // get filter from selected value
  const handleFilterSelect = (filter) => {
    console.log("it is called");
    onFilterSelect(filter);

    setIsOpen(false); // Close the dropdown
    setSelectedValue(filter);
  };

  const selectedOption = () => {
    setSelectedValue(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        type="button"
        className="text-textColor inline-flex bg-gray-200 font-montserratRegular focus:ring-gray-400 hover:bg-gray-300 focus:ring-1 focus:outline-none  font-medium rounded-lg px-5 py-2.5 text-center text-sm items-center"
      >
        {selectedValue ? (
          <div onClick={selectedOption}>{selectedValue}</div>
        ) : (
          title
        )}

        {selectedValue ? (
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
            className="lucide lucide-x w-4 ms-2 h-4"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            className="w-2.5 h-2.5 ms-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen ? (
        <div className="mt-4 absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {companyType &&
              companyType.map((type) => (
                <li value={type.value} key={type.name}>
                  <a
                    href="#"
                    onClick={(e) => handleFilterSelect(e.target.value)}
                    className="block px-4 py-2 hover:bg-gray-100  text-gray-600 hover:rounded"
                  >
                    {type.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default CompanyFilter;
