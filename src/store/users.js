import React, { createContext } from "react";

export const UserContext = createContext();

const UserStore = ({ children }) => {
  const user = {
    name: "ji",
    age: "29",
    job: "frontend",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserStore;
