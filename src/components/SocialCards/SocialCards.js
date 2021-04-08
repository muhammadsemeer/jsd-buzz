import "./SocialCards.css";
import twitter from "../../twitter.svg";
import facebook from "../../facebook.svg";
import whatsapp from "../../whatsapp.svg";
import link from "../../link.svg";

const SocialCards = () => {
  return (
    <div className="social-cards">
      <div className="cards card1">
        <div className="answered">
          <p className="head">Answered</p>
          <h2>4</h2>
        </div>
        <div className="share-links">
          <p className="head">Share</p>
          <a
            href="#"
            target="_blank"
            style={{ color: "#00AAEC" }}
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
            Share on Twitter
          </a>
          <a
            href="#"
            target="_blank"
            style={{ color: "#4460A0" }}
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
            Share on Facebook
          </a>
          <a
            href="#"
            target="_blank"
            style={{ color: "#00D856" }}
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
            Share on Whatsapp
          </a>
          <a
            href="#"
            target="_blank"
            style={{ color: "#FF5B8C" }}
            rel="noopener noreferrer"
          >
            <img src={link} alt="link" />
            Share Link
          </a>
        </div>
      </div>
      <div className="cards"></div>
    </div>
  );
};

export default SocialCards;
