import QuizCode from "../QuizCode/QuizCode";
import Exp from "./Exp.css";
import { useEffect } from "react";

const Explanation = ({ explanation, explanationCode }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("no-scroll");
    return () => {
      document.querySelector("body").classList.remove("no-scroll");
    };
  }, []);
  return (
    <div className="exp-pop">
      <div className="pop">
        {/* {explanationCode !== "" ? ( */}
        <QuizCode
          code={`{
function foo() 
{
let a = b = 0;
a++;
return a;
}
foo();
typeof a;
typeof b
};`}
        />
        {/* ) : null} */}
        <h3>Explanation</h3>
        <p>{explanation}</p>
        <div className="btn">
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
