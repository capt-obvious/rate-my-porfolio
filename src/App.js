import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// component imports
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import TradeForm from "./components/TradeForm.js";
import Feed from "./components/Feed";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/profile/:id">
        <ProfilePage />
      </Route>
      <Route path="/tradeform">
        <TradeForm />
      </Route>
    </div>
  );
}

export default App;
