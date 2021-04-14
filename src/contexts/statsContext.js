import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const statsContext = createContext();

const StatsContextProvider = ({ children }) => {
  const [stats, setStats] = useState();
  const [exp, setShow] = useState(false);
  useEffect(() => {
    axios.get("/quiz/stats").then(({ data }) => {
      setStats(data);
    });
  }, []);
  const setStat = (stats) => {
    setStats(stats);
  };
  const showExp = (val) => {
    setShow(val);
  };
  return (
    <statsContext.Provider value={{ stats, setStat, exp, showExp }}>
      {children}
    </statsContext.Provider>
  );
};

export default StatsContextProvider;
