import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const statsContext = createContext();

const StatsContextProvider = ({ children }) => {
  const [stats, setStats] = useState();
  useEffect(() => {
    axios.get("/quiz/stats").then(({ data }) => {
      setStats(data);
    });
  }, []);
  const setStat = (stats) => {
    setStats(stats);
  };
  return (
    <statsContext.Provider value={{ stats, setStat }}>
      {children}
    </statsContext.Provider>
  );
};

export default StatsContextProvider;
