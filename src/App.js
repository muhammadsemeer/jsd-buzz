import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar";
import axios from "axios";
import AuthContextProvider from "./contexts/authContext";
import StatsContextProvider from "./contexts/statsContext";
import Login from "./pages/Login";
import Sidebar from "./components/SIdebar/Sidebar";
import PrivateRoute from "./components/PrivateRoute.js/PrivateRoute";
// import Admin from "./pages/Admin";
axios.defaults.baseURL = process.env.REACT_APP_API_PATH;

function App() {
  return (
    <>
      <AuthContextProvider>
        <StatsContextProvider>
          <Router basename="/">
            <TopBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
          <Router basename="/admin">
            <Sidebar />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute exact path="/quiz/today">
                {/* <Admin /> */}
              </PrivateRoute>
            </Switch>
          </Router>
        </StatsContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
