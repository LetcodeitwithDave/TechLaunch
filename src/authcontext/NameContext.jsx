import React, { createContext, useState } from "react";
export const TestContext = createContext();

const TestProvider = ({ children }) => {
  const [testContext, setTestContext] = useState(false);
  return (
    <TestContext.Provider value={{ testContext, setTestContext }}>
      {children}
    </TestContext.Provider>
  );
};

export { TestProvider };
