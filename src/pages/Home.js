import Quiz from "../components/Quiz/Quiz";
import QuizCode from "../components/QuizCode/QuizCode";
import SocialCards from "../components/SocialCards/SocialCards";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/authContext";
import UserPop from "../components/UserPop/UserPop";
import unhappyEmoji from "../emoji-unhappy.svg";

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    axios.get("/quiz").then((response) => {
      setQuiz(response.data);
      if (response.data.length !==0){
        setLoad(true)
      } 
    });
  }, []);
  const { auth } = useContext(authContext);
  return (
    <>
      {!auth.user ? <UserPop /> : null}
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
          {quiz[0]?.questionCode ? <QuizCode /> : null}
          <div className="lg">
            <SocialCards />
          </div>
        </aside>
      </main>
    </>
  );
};

export default Home;
