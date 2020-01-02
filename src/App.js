import React from "react";
<<<<<<< HEAD
=======

>>>>>>> 8b425b9b6349c3284f853a05238ae5bece6e894b
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";

// component imports
import Feed from "./components/Feed/Feed.js";
import Home from "./pages/Home.js";
import ProfilePage from "./pages/ProfilePage.js";

function App() {
  return (
    <div className="">
      <Route exact path="/">
        <Home />>
      </Route>
      <Route path="/profile/:id">
        <ProfilePage />
      </Route>
    </div>
  );
}

export default App;
