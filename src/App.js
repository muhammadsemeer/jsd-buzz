import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar";
import axios from "axios";
axios.defaults.baseURL = "http://locahost:3001";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
