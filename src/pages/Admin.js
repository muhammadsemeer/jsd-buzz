import { useEffect, useState } from "react";
import axios from "axios";
import "../css/admin.css"
import QuizCode from "../components/QuizCode/QuizCode";

const Admin = () => {
  const [quiz, setQuiz] = useState([]);
  const [load, setLoad] = useState(false);
  const [stats, setStats] = useState();
  useEffect(() => {
    document.querySelector("header").style.display = "none";
    axios.get("/quiz").then((response) => {
      if (response.data.length !== 0) {
        setQuiz(response.data[0]);
        setLoad(true);
      }
    });
    axios.get("/quiz/stats").then((response) => {
      if (response.data.length !== 0) {
        setStats(response.data);
      }
    });
    return () => {
      document.querySelector("header").style.display = "flex";
    };
  }, []);
  const colors = ["#f53b86", "#ffd540", "#4199ff", "#6e76ff"];
  const { question, answerOptions } = quiz;
  return (
    <section className="admin">
      {load ? (
        <div className="quiz">
          <h2 className="question">{question}</h2>
          {quiz?.questionCode ? (
            <QuizCode code={quiz.questionCode} />
          ) : null}
          <div className="options">
            {answerOptions.map((data, index) => (
              <div key={index} className="option-feild">
                <input
                  type="radio"
                  name="answer"
                  id={index}
                  data-label={`label${index}`}
                  value={data.answerText}
                  hidden
                  disabled
                />
                <label id={`label${index}`} htmlFor={index}>
                  <div>
                    <div className="content">
                      <span className="op">{data.answerText}</span>
                        <span className="percentage">
                          {stats
                            ? Math.round(
                                (stats.options[index] / stats.totalAnswers) *
                                  100
                              )
                            : 0}
                          %
                        </span>
                    </div>
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
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Admin;
