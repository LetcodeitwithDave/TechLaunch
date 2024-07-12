import React, { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    date_posted: "",
    employment_types: "",
    company_types: "",
  });

  return (
    <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider };
