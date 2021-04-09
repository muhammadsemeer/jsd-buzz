import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState(localStorage.getItem("user"));
  return (
    <authContext.Provider value={auth}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
