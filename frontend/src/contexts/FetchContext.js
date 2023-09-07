import React, { createContext, useState } from "react";

export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [active, setActive] = useState(true);

  return (
    <FetchContext.Provider value={{ active, setActive }}>
      {children}
    </FetchContext.Provider>
  );
};
