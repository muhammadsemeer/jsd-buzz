import QuizCode from "../QuizCode/QuizCode";
import "./Exp.css";
import { useContext, useEffect } from "react";
import { statsContext } from "../../contexts/statsContext";

const Explanation = ({ explanation, explanationCode }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("no-scroll");
    return () => {
      document.querySelector("body").classList.remove("no-scroll");
    };
  }, []);
  const { showExp } = useContext(statsContext);
  return (
    <div className="exp-pop">
      <div className="pop">
        {explanationCode !== "" ? <QuizCode code={explanationCode} /> : null}
        <h3>Explanation</h3>
        <pre>{explanation}</pre>
        <div className="btn">
          <button onClick={() => showExp(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
