import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar";
import axios from "axios";
import AuthContextProvider from "./contexts/authContext";
import StatsContextProvider from "./contexts/statsContext";
import Login from "./pages/Login";
import Sidebar from "./components/SIdebar/Sidebar";
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
            <Sidebar />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </StatsContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
