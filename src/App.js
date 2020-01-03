import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";

// component imports
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import TradeForm from "./components/TradeForm.js";
import Trending from './pages/Trending'
import Welcome from "./pages/Welcome";
import { UserContext } from "./utils/Contexts.js";

function App() {
  const { user, setUser } = React.useContext(UserContext);

  React.useEffect(() => {
    if (!user.id) {
      const token = window.localStorage.getItem("token");
      if (token) {
        axios
          .post("http://localhost:3300/api/auth/tokenLogin", { token })
          .then(res => setUser(res.data.user));
      }
    }
  }, []);

  return user.id ? (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/profile/:id"
            render={props => <ProfilePage {...props} />}
          />
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/tradeform">
            <TradeForm />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
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