import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { authContext } from "../../contexts/authContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { admin } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={() => (admin.isLogged ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
