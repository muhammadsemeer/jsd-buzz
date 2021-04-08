import { Quiz } from "../components/Quiz/Quiz";
import QuizCode from "../components/QuizCode/QuizCode";

const Home = () => {
  return (
    <>
      <main>
        <aside>
          <Quiz />
        </aside>
        <aside>
          <QuizCode />
        </aside>
      </main>
    </>
  );
};

export default Home;
