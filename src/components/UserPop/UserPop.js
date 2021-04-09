import axios from "axios";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import "./UserPop.css";

const UserPop = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("no-scroll");
    getUser();
    return () => {
      document.querySelector("body").classList.remove("no-scroll");
    };
  }, []);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const fuse = new Fuse(users, {
    keys: ["name"],
  });
  const handleChange = (event) => {
    setName(event.target.value);
    setList(fuse.search(event.target.value));
  };
  console.log(list);
  const getUser = () => {
    axios.get("/user").then((response) => {
      setUsers(response.data);
    });
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
          {list.map(({ item }, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default UserPop;
