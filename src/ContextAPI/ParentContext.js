import { createContext, useContext, useState } from "react";
import { users as usersAnalytics } from "../Constant/users";
const ParentContext = createContext();

export const ParentContexProvider = ({ children }) => {
  const [users, setusers] = useState(usersAnalytics);
  const value = { users, setusers };

  return (
    <ParentContext.Provider value={value}>{children}</ParentContext.Provider>
  );
};

export const useParentContext = () => useContext(ParentContext);
