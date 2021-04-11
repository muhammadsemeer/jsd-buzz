import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { authContext } from "../contexts/authContext";
import { useForm } from "../utils/useForm/useForm";
import "../css/login.css";
import axios from "axios";

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const { admin, logAdmin } = useContext(authContext);
  const [value, handleValue] = useForm({
    email: "",
    password: "",
  });
  useEffect(() => {
    document.querySelector("header").style.display = "none";
    document.querySelector(".sidebar").style.display = "none";
    if (admin.isLogged) {
      setRedirect(true);
    }
    return () => {
      document.querySelector("header").style.display = "flex";
      document.querySelector(".sidebar").style.display = "flex";
    };
  }, [admin.isLogged]);
  if (redirect) {
    return <Redirect to="/quiz/today" />;
  }
  const doLogin = (event) => {
    event.preventDefault();
    if (value.email.length !== 0 && value.password.length !== 0) {
      axios
        .post(
          "/auth/login",
          { ...value },
          {
            withCredentials: true,
          }
        )
        .then(({ data }) => {
          logAdmin({ isLogged: true, ...data });
        })
        .catch((error, data) => {
          setError(error.response.data);
          setTimeout(() => {
            setError(false);
          }, 2000);
        });
    }
  };
  return (
    <div className="login">
      <form onSubmit={doLogin}>
        <h1>Admin Login</h1>
        {error ? <p className="error">{error}</p> : null}
        <div className="input-feild">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={value.email}
            onChange={handleValue}
            required
          />
        </div>
        <div className="input-feild">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={value.password}
            onChange={handleValue}
            required
          />
        </div>
        <div className="input-feild">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
