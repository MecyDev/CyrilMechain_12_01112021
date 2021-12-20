import { createContext } from "react";
import { useState } from "react";

/** @type { object } */
export const UserInfosContext = createContext();

/** @type { object } */
export const UserInfosProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  /** @type { integer } */
  const saveId = (id) => {
    setUserId(id);
  };

  return (
    <UserInfosContext.Provider value={{ userId, saveId }}>
      {children}
    </UserInfosContext.Provider>
  );
};
