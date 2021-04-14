import Quiz from "../components/Quiz/Quiz";
import QuizCode from "../components/QuizCode/QuizCode";
import SocialCards from "../components/SocialCards/SocialCards";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/authContext";
import UserPop from "../components/UserPop/UserPop";
import unhappyEmoji from "../emoji-unhappy.svg";
import Explanation from "../components/Explanation/Explanation";
import { statsContext } from "../contexts/statsContext";

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    document.querySelector(".sidebar").style.display = "none";
    axios.get("/quiz").then((response) => {
      setQuiz(response.data);
      if (response.data.length !== 0) {
        setLoad(true);
      }
    });
    return () => {
      document.querySelector(".sidebar").style.display = "flex";
    };
  }, []);
  const { auth } = useContext(authContext);
  const { exp } = useContext(statsContext);
  return (
    <>
      {!auth.user ? <UserPop /> : null}
      {exp && quiz && quiz[0].expalanation  ? (
        <Explanation
          explanation={quiz[0].expalanation}
          explanationCode={quiz[0].explanationCode}
        />
      ) : null}
      <main>
        <aside>
          {load ? (
            <Quiz quiz={quiz} />
          ) : (
            <div className="info">
              <img src={unhappyEmoji} alt="unhappy-emoji" />
              <h1>No Quiz Uploaded</h1>
            </div>
          )}
          <div className="md">
            <SocialCards />
          </div>
        </aside>
        <aside>
          {quiz[0]?.questionCode ? (
            <QuizCode code={quiz[0].questionCode} />
          ) : null}
          <div className="lg">
            <SocialCards />
          </div>
        </aside>
      </main>
    </>
  );
};

export default Home;
