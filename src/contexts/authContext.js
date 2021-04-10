import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("isUser")) || {
      user: false,
    }
  );
  const logUser = (user) => {
    localStorage.setItem("isUser", JSON.stringify(user));
    setAuth(user);
  };
  return (
    <authContext.Provider value={{ auth, logUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
