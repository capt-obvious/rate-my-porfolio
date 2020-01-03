import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";

// component imports
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import TradeForm from "./components/TradeForm.js";
import Welcome from "./pages/Welcome";
import { UserContext } from "./utils/Contexts.js";
import Axios from "axios";

function App() {
  const { user, setUser } = React.useContext(UserContext);

  React.useEffect(() => {
    if (!user.username) {
      const token = window.localStorage.getItem("token");
      console.log(token);
      axios
        .post("http://localhost:3300/api/auth/tokenLogin", { token })
        .then(res => setUser(res.data.user));
    }
  }, []);

  return user.username ? (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/profile/:id">
          <ProfilePage />
        </Route>
        <Route path="/tradeform">
          <TradeForm />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="*">
          <Redirect to="/welcome" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
