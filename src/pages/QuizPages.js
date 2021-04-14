import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "../utils/useForm/useForm";

const QuizPages = ({ add }) => {
  const history = useHistory();
  const [value, handleValue] = useForm({
    question: "",
    questionCode: "",
    expalanation: "",
    explanationCode: "",
  });
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answerText, setAnswerText] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  useEffect(() => {
    document.querySelector("header").style.display = "none";
    return () => {
      document.querySelector("header").style.display = "flex";
    };
  }, []);
  const addOption = () => {
    if (answerOptions.length !== 4) {
      setAnswerOptions([...answerOptions, { answerText, isCorrect }]);
      setAnswerText("");
      setIsCorrect(false);
    }
  };
  const addQuiz = (event) => {
    event.preventDefault();
    axios.post("/quiz", { ...value, answerOptions }).then(({ data }) => {
      history.push("/quiz/today");
    });
  };
  return (
    <section className="admin">
      <div className="form">
        <form onSubmit={addQuiz}>
          <h1>Add Quiz</h1>
          <div className="form-field">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              name="question"
              id="question"
              onChange={handleValue}
              value={value.question}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="questionCode">Code Snippet</label>
            <textarea
              name="questionCode"
              id="questionCode"
              onChange={handleValue}
              value={value.questionCode}
            ></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="expalanation">Explanation</label>
            <textarea
              name="expalanation"
              id="expalanation"
              onChange={handleValue}
              value={value.expalanation}
            ></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="explanationCode">Explanation Code Snippet</label>
            <textarea
              name="explanationCode"
              id="explanationCode"
              onChange={handleValue}
              value={value.explanationCode}
            ></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="answerOption">Options</label>
            <div>
              <input
                type="text"
                name="answerOption"
                id="answerOption"
                onChange={(e) => setAnswerText(e.target.value)}
                value={answerText}
              />
              <div>
                <input
                  type="radio"
                  name="isCorrect"
                  id="true"
                  onChange={() => setIsCorrect(true)}
                  checked={isCorrect ? true : false}
                  hidden
                />
                <label htmlFor="true">True</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="isCorrect"
                  id="false"
                  onChange={() => setIsCorrect(false)}
                  checked={isCorrect ? false : true}
                  hidden
                />
                <label htmlFor="false">False</label>
              </div>
              <input type="button" value="Add" onClick={addOption} />
            </div>
          </div>
          <div className="options">
            {answerOptions.map((value, index) => (
              <div key={index} className="form-field">
                <div>
                  <input type="text" value={value.answerText} readOnly />
                  <input
                    type="radio"
                    checked={value.isCorrect}
                    disabled
                    hidden
                  />
                  <label>{value.isCorrect.toString()}</label>
                </div>
              </div>
            ))}
          </div>
          <div className="form-field">
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuizPages;
