import "./QuizCode.css";
import Highlight from "react-highlight";
const QuizCode = ({code}) => {
  return (
    <div className="quiz-code">
      <Highlight language="javascript">{code}</Highlight>
    </div>
  );
};

export default QuizCode;
