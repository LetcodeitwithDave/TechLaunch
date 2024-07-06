// Dropdown.js
import { useState } from "react";
// onFilterSelect - prop from inputcomponent
const Dropdown = ({ options, title, onFilterSelect, displayOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterSelect = (filter) => {
    onFilterSelect(filter); // Calls the function passed from the parent
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-textColor bg-gray-200 font-montserratRegular focus:ring-gray-400 hover:bg-gray-300 focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {title}
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
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {displayOptions.map((displayOption, index) => (
              <li key={displayOption}>
                <a
                  href="#"
                  onClick={() => handleFilterSelect(options[index])}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {displayOption}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
