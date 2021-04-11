import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { authContext } from "../contexts/authContext";
import "../css/login.css";

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const { auth } = useContext(authContext);
  useEffect(() => {
    if (auth.admin) {
      setRedirect(true);
    }
  }, [auth.admin]);
  if (redirect) {
    return <Redirect path="/admin" />;
  }
  return (
    <div className="login">
      <form>
        <h1>Admin Login</h1>
        {error ? <p className="error">{error}</p> : null}
        <div className="input-feild">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="input-feild">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="input-feild">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
