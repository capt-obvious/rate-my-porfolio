import React from "react"
import "./App.css"
import { Route } from "react-router-dom"
import Navbar from "./components/Navbar"

// component imports
import Feed from "./components/Feed"
import Home from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path="/profile/:id">
        <ProfilePage />
      </Route>
    </div>
  );
}

export default App