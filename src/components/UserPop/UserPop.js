import { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/authContext";
import "./UserPop.css";

const UserPop = () => {
  const { logUser } = useContext(authContext);
  useEffect(() => {
    document.querySelector("body").classList.add("no-scroll");
    return () => {
      document.querySelector("body").classList.remove("no-scroll");
    };
  }, []);
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <section className="user-pop">
      <div className="pop">
        <h2>Welcome to</h2>
        <h1>JSD BUZZ</h1>
        <p>Daily quiz to buzz your knowledge</p>
        <label htmlFor="name">Full Name</label>
        <input
          list="users"
          type="text"
          name="name"
          id="name"
          vaule={name}
          onChange={handleChange}
        />
        <button onClick={() => logUser({ user: true, name })}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default UserPop;
