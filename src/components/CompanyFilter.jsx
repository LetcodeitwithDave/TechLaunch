import React, { useEffect, useRef, useState } from "react";

function CompanyFilter({ query, onFilterSelect }) {
  const queryRef = useRef(query); //store search text
  const [timeoutId, setTimeoutId] = useState(null);

  const [companyType, setCompanyType] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "11176b3d81msh1249e7c0bded57cp1ffb0ajsn50869dc9a9fd",
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

  useEffect(() => {
    queryRef.current = query; //check if query changes
    if (timeoutId) {
      clearTimeout(setTimeoutId); // clear previous timeout
    }

    const newTimeOut = setTimeout(() => {
      if (queryRef.current) {
        fetchData(queryRef.current);
      }
    }, 1000);

    setTimeoutId(newTimeOut); //store timeout id
    return () => clearTimeout(newTimeOut);
  }, [query]);

  // get filter from selected value
  const handleFilterSelect = (filter) => {
    console.log("it is called");
    onFilterSelect(filter);
  };

  return (
    <div className="flex items-center justify-center p-4 my-6">
      <select onChange={(e) => handleFilterSelect(e.target.value)}>
        <option value="">Select Company Type</option>
        {companyType &&
          companyType.map((type) => (
            <option key={type.value} value={type.value}>
              {type.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default CompanyFilter;
