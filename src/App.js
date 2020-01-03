import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar"

// component imports
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import TradeForm from "./components/TradeForm.js";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path='/profile/:id'>
          <ProfilePage />
        </Route>
        <Route path="/tradeform">
          <TradeForm />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
