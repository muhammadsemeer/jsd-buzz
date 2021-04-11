import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../jsd-buzz.svg";

const Sidebar = () => {
  useEffect(() => {
    document.querySelector("header").style.display = "none";
    return () => {
      document.querySelector("header").style.display = "flex";
    };
  });
  return (
    <div className="sidebar">
      <div className="head">
        <img src={logo} alt="JSD_BUZZ_LOGO" />
        <h1>Admin Panel</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/quiz/today" activeClassName="active">
              Today's Quiz
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-quiz">Add Quiz</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
