// Dropdown.js
import { useState } from "react";
// onFilterSelect - prop from inputcomponent
const Dropdown = ({ options, title, onFilterSelect, displayOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterSelect = (filter, value) => {
    onFilterSelect(options[filter]); // Calls the function passed from the parent
    setIsOpen(false); // Close the dropdown
    setSelectedValue(value);
    console.log("this is the value -> ", value);
  };

  const selectedOption = () => {
    setSelectedValue(false);
  };

  return (
    <div className=" relative">
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
            {displayOptions.map((displayOption, index) => (
              <li key={displayOption}>
                <a
                  href="#"
                  onClick={() => handleFilterSelect(index, displayOption)}
                  className="block px-4 py-2 hover:bg-gray-100  text-gray-600 hover:rounded"
                >
                  {displayOption}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
