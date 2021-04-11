import { useContext, useEffect, useState } from "react";
import "./Quiz.css";
import party from "party-js";
import axios from "axios";
import { authContext } from "../../contexts/authContext";
import { statsContext } from "../../contexts/statsContext";

const Quiz = ({ quiz }) => {
  const { auth } = useContext(authContext);
  const { question, answerOptions, _id } = quiz[0];
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState({});
  const { stats, setStat } = useContext(statsContext);
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
      axios
        .patch(`/quiz/answer/${_id}`, {
          answered_by: auth.name,
          option: event.target.id,
          isCorrect: true,
        })
        .then(() => {
          document.getElementById(`prog${event.target.id}`).style.background =
            "#84ff82";
          axios.get("/quiz/stats").then(({ data }) => {
            setStat(data);
          });
        });
    } else {
      document
        .getElementById(event.target.dataset.label)
        .classList.add("wrong");
      axios
        .patch(`/quiz/answer/${_id}`, {
          answered_by: auth.name,
          option: event.target.id,
          isCorrect: false,
        })
        .then(() => {
          document.getElementById(`prog${event.target.id}`).style.background =
            "#ff5858";
          axios.get("/quiz/stats").then(({ data }) => {
            setStat(data);
          });
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
  const colors = ["#f53b86", "#ffd540", "#4199ff", "#6e76ff"];
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
                  value={data.answerText}
                  checked
                  hidden
                  disabled
                />
                <label
                  id={`label${index}`}
                  className={answer.isCorrect ? "correct" : "wrong"}
                  htmlFor={index}
                >
                  <div>
                    <div className="content">
                      <span className="op">{data.answerText}</span>
                      <span className="percentage">
                        {stats
                          ? Math.round(
                              (stats.options[index] / stats.totalAnswers) * 100
                            )
                          : 0}
                        %
                      </span>
                    </div>
                    <div className="progress">
                      <span
                        style={{
                          width: stats
                            ? (stats.options[index] / stats.totalAnswers) *
                                100 +
                              "%"
                            : 0 + "%",
                        }}
                      ></span>
                    </div>
                  </div>
                </label>
              </>
            ) : (
              <>
                <input
                  type="radio"
                  name="answer"
                  id={index}
                  data-label={`label${index}`}
                  onChange={(e) => checkAnswer(e)}
                  value={data.answerText}
                  hidden
                  disabled={answered ? true : false}
                />
                <label id={`label${index}`} htmlFor={index}>
                  <div>
                    <div className="content">
                      <span className="op">{data.answerText}</span>
                      {answered ? (
                        <span className="percentage">
                          {stats
                            ? Math.round(
                                (stats.options[index] / stats.totalAnswers) *
                                  100
                              )
                            : 0}
                          %
                        </span>
                      ) : null}
                    </div>
                    {answered ? (
                      <div className="progress">
                        <span
                          id={`prog${index}`}
                          style={{
                            width: stats
                              ? (stats.options[index] / stats.totalAnswers) *
                                  100 +
                                "%"
                              : 0 + "%",
                            background: colors[index],
                          }}
                        ></span>
                      </div>
                    ) : null}
                  </div>
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
