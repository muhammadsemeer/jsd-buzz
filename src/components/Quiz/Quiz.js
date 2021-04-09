import { useState } from "react";
import "./Quiz.css";
import party from "party-js";

const Quiz = ({ quiz }) => {
  const { question, answerOptions } = quiz;
  const [answered, setAnswered] = useState(false);
  const checkAnswer = (event) => {
    setAnswered(true);
    if (answerOptions[event.target.id].isCorrect) {
      party.cursor({
        color: ["#ff5858", "#84ff82", "#ffd540", "#5891ff"],
        count: party.variation(50, 0.5),
        size: party.minmax(6, 10),
        velocity: party.minmax(-300, -600),
        angularVelocity: party.minmax(6, 9),
        shape: [
          "star",
          "square",
          "circle",
          "rectangle",
          "ellipse",
          "rounded-square",
          "rounded-rectangle",
        ],
      });
      console.log(true);
    } else {
      document.getElementById(event.target.dataset.label).classList.add("wrong")
      console.log(false);
    }
  };
  return (
    <div className="quiz">
      <h2 className="question">{question}</h2>
      <div className="options">
        {answerOptions.map((data, index) => (
          <div key={index} className="option-feild">
            <input
              type="radio"
              name="answer"
              id={index}
              data-label={`label${index}`}
              onClick={checkAnswer}
              value={data.answerText}
              hidden
              disabled={answered ? true : false}
            />
            <label id={`label${index}`} htmlFor={index}>
              {data.answerText}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
