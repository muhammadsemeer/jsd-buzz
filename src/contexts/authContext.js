import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("isUser")) || {
      user: false,
    }
  );
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || {
      isLogged: false,
    }
  );
  const logUser = (user) => {
    let format = /^[a-zA-Z]/g;
    if (format.test(user.name)) {
      localStorage.setItem("isUser", JSON.stringify(user));
      setAuth(user);
    }
  };
  const logAdmin = (admin) => {
    localStorage.setItem("admin", JSON.stringify(admin));
    setAdmin(admin);
  };
  return (
    <authContext.Provider value={{ auth, logUser, admin, logAdmin }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
