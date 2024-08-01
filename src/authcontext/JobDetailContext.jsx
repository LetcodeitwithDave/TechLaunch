import React, { createContext } from "react";
import { useState } from "react";
const JobContext = createContext();

const JobDetailProvider = ({ children }) => {
  const [jobInfo, setJobInfo] = useState([]);
  return (
    <JobContext.Provider value={{ jobInfo, setJobInfo }}>
      {children}
    </JobContext.Provider>
  );
};

export { JobContext, JobDetailProvider };
