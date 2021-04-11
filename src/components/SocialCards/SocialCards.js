import "./SocialCards.css";
import telegram from "../../telegram.svg";
import whatsapp from "../../whatsapp.svg";
import logo from "../../jsd.jpg";
import { useContext } from "react";
import { statsContext } from "../../contexts/statsContext";

const SocialCards = () => {
  const { stats } = useContext(statsContext);
  return (
    <div className="social-cards">
      <div className="cards card1">
        <div className="answered">
          <p className="head">Answered</p>
          <h2>{stats ? stats.totalAnswers : 0}</h2>
        </div>
        <div className="share-links">
          <p className="head">Share</p>
          <a
            href={`whatsapp://send?text=Take a Daily Quiz on JSD BUZZ ${process.env.REACT_APP_PUBLIC_URL}`}
            data-action="share/facenoook/share"
            target="_blank"
            style={{ color: "#00D856" }}
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
            Share on Whatsapp
          </a>
          <a
            href={`tg://msg_url?url=Take a Daily Quiz on JSD BUZZ ${process.env.REACT_APP_PUBLIC_URL}`}
            target="_blank"
            style={{ color: "#0088CC" }}
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="link" />
            Share on Telegram
          </a>
        </div>
      </div>
      <div className="cards card2">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h2>Js Developers</h2>
        <p>Join our JSD community and we can develop as a family.</p>
        <a
          href="https://chat.whatsapp.com/FZNbeGS3CodFT0V6DVu9el"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join
        </a>
      </div>
    </div>
  );
};

export default SocialCards;
