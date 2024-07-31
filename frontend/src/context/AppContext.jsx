/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MainContext = createContext();

export const PageContext = ({ children }) => {
  const [user, setUser] = useState({});

  const logOut = () => {
    setUser({});
    localStorage.removeItem('accessToken');
  };

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        logOut,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
