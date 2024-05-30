import { useState, useEffect, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: "",
  });

  const session = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (session && session.user) {
      setAuth({
        user: session.user,
      });
    }
  }, []);
  const value = {
    auth,
    setAuth,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const Store = () => useContext(AppContext);

// this file will only be user for auth purposes.
