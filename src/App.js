import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar";
import axios from "axios";
import AuthContextProvider from "./contexts/authContext";
import StatsContextProvider from "./contexts/statsContext";
import Login from "./pages/Login";
axios.defaults.baseURL = process.env.REACT_APP_API_PATH;

function App() {
  return (
    <>
      <AuthContextProvider>
        <StatsContextProvider>
          <Router>
            <TopBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
          <Router basename="/admin">
            <Route path="/login">
              <Login />
            </Route>
          </Router>
        </StatsContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
