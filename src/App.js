import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar";
import axios from "axios";
import AuthContextProvider from "./contexts/authContext";
axios.defaults.baseURL = process.env.REACT_APP_API_PATH;

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <TopBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
