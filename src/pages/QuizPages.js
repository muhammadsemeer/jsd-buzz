import { useEffect } from "react";
import { useForm } from "../utils/useForm/useForm";

const QuizPages = () => {
  const [value, handleValue] = useForm({
    question: "",
    questionCode: "",
  });
  useEffect(() => {
    document.querySelector("header").style.display = "none";
    return () => {
      document.querySelector("header").style.display = "felx";
    };
  }, []);
  return (
    <section className="admin">
      <div className="form">
        <form>
          <h1>Add Quiz</h1>
          <div className="form-field">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              name="question"
              id="question"
              onChange={handleValue}
              value={value.question}
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
            <label htmlFor="answerOption">Options</label>
            <div>
              <input type="text" name="answerOption" id="answerOption" />
              <div>
                <input
                  type="radio"
                  name="isCorrect"
                  id="true"
                  value="true"
                  hidden
                />
                <label htmlFor="true">True</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="isCorrect"
                  id="false"
                  value="false"
                  checked
                  hidden
                />
                <label htmlFor="false">False</label>
              </div>
              <input type="button" value="Add" />
            </div>
          </div>
          <div className="options"></div>
          <div className="form-field">
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuizPages;
