import { Quiz } from "../components/Quiz/Quiz";
import QuizCode from "../components/QuizCode/QuizCode";
import SocialCards from "../components/SocialCards/SocialCards";

const Home = () => {
  return (
    <>
      <main>
        <aside>
          <Quiz />
        </aside>
        <aside>
          <QuizCode />
          <SocialCards />
        </aside>
      </main>
    </>
  );
};

export default Home;
