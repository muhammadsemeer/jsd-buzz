import Quiz from "../components/Quiz/Quiz";
import QuizCode from "../components/QuizCode/QuizCode";
import SocialCards from "../components/SocialCards/SocialCards";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/authContext";
import UserPop from "../components/UserPop/UserPop";

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    axios.get("/quiz").then((response) => {
      setQuiz(response.data);
      setLoad(true);
    });
  }, []);
  const { auth } = useContext(authContext);
  return (
    <>
    {!auth.user ? <UserPop /> : null}
      <main>
        <aside>
          {load ? <Quiz quiz={quiz[0]} /> : null}
          <div className="md">
            <SocialCards />
          </div>
        </aside>
        <aside>
          <QuizCode />
          <div className="lg">
            <SocialCards />
          </div>
        </aside>
      </main>
    </>
  );
};

export default Home;
