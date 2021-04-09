import axios from "axios";
import { useEffect, useState } from "react";
import "./UserPop.css";

const UserPop = () => {
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
        <datalist id="users">
          <option value="Edge" />
        </datalist>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default UserPop;
