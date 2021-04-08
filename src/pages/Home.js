import { Quiz } from "../components/Quiz/Quiz";
import QuizCode from "../components/QuizCode/QuizCode";
import SocialCards from "../components/SocialCards/SocialCards";

const Home = () => {
  return (
    <>
      <main>
        <aside>
          <Quiz />
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
