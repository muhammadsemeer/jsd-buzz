import "./QuizCode.css";
import Highlight from "react-highlight";
const QuizCode = () => {
  return (
    <div className="quiz-code">
      <Highlight language="javascript">{`let a = 5`}</Highlight>
    </div>
  );
};

export default QuizCode;
