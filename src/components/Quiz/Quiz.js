import { useContext, useEffect, useState } from "react";
import "./Quiz.css";
import party from "party-js";
import axios from "axios";
import { authContext } from "../../contexts/authContext";

const Quiz = ({ quiz }) => {
  const { auth } = useContext(authContext);
  const { question, answerOptions, _id } = quiz[0];
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState({});
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
      axios.patch(`/quiz/answer/${_id}`, {
        answered_by: auth.name,
        option: event.target.id,
        isCorrect: true,
      });
    } else {
      document
        .getElementById(event.target.dataset.label)
        .classList.add("wrong");
      axios.patch(`/quiz/answer/${_id}`, {
        answered_by: auth.name,
        option: event.target.id,
        isCorrect: false,
      });
    }
  };
  useEffect(() => {
    axios
      .post("/quiz/check-answered", {
        user: auth.name,
      })
      .then(({ data }) => {
        if (data) {
          setAnswered(true);
          setAnswer(data);
        }
      });
  }, [auth.name]);
  console.log(answer);
  return (
    <div className="quiz">
      <h2 className="question">{question}</h2>
      <div className="options">
        {answerOptions.map((data, index) => (
          <div key={index} className="option-feild">
            {index === parseInt(answer.option) ? (
              <>
                <input
                  type="radio"
                  name="answer"
                  id={index}
                  data-label={`label${index}`}
                  onChange={checkAnswer}
                  value={data.answerText}
                  checked
                  hidden
                  disabled={answered ? true : false}
                />
                <label
                  id={`label${index}`}
                  className={answer.isCorrect ? "" : "wrong"}
                  htmlFor={index}
                >
                  {data.answerText}
                </label>
              </>
            ) : (
              <>
                <input
                  type="radio"
                  name="answer"
                  id={index}
                  data-label={`label${index}`}
                  onChange={checkAnswer}
                  value={data.answerText}
                  hidden
                  disabled={answered ? true : false}
                />
                <label id={`label${index}`} htmlFor={index}>
                  {data.answerText}
                </label>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
