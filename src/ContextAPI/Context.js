import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const value = { toggleSidebar, setToggleSidebar };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const Store = () => useContext(AppContext);
