import { createContext } from "react";
import { useState } from "react";

export const UserInfosContext = createContext();

export const UserInfosProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const saveId = (id) => {
    setUserId(id);
  };

  return (
    <UserInfosContext.Provider value={{ userId, saveId }}>
      {children}
    </UserInfosContext.Provider>
  );
};
