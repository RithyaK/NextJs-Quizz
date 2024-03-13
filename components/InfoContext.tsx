import React, { useContext, useState } from "react";
const Context = React.createContext();

export const InfoContextProvider = (props) => {
  const [test, setTest] = useState("tgfdgfdest");

  const contextValue = { test };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export const useInfoContext = () => useContext(Context);
