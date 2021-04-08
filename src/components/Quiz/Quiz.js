import { useForm } from "../../utils/useForm/useForm";
import "./Quiz.css"

export const Quiz = () => {
  const [value, handleChange] = useForm({
    answer: "",
  });
  return (
    <div className="quiz">
      <h2 className="question">What will Be The Output</h2>
      <div className="options">
        <div className="option-feild">
          <input
            type="radio"
            name="answer"
            id="option1"
            onClick={handleChange}
            hidden
          />
          <label htmlFor="option1">loerm ipsem</label>
        </div>
        <div className="option-feild">
          <input
            type="radio"
            name="answer"
            id="option2"
            onClick={handleChange}
            hidden
          />
          <label htmlFor="option2">loerm ipsem</label>
        </div>
        <div className="option-feild">
          <input
            type="radio"
            name="answer"
            id="option3"
            onClick={handleChange}
            hidden
          />
          <label htmlFor="option3">loerm ipsem</label>
        </div>
        <div className="option-feild">
          <input
            type="radio"
            name="answer"
            id="option4"
            onClick={handleChange}
            hidden
          />
          <label htmlFor="option4">loerm ipsem</label>
        </div>
      </div>
    </div>
  );
};
