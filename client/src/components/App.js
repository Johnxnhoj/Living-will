import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./Login"
import Sidebar from "./Sidebar"
import Admin from "./Admin"
import Will from "./Will"
import BasicInfo from "./BasicInfo"
import Assets from "./Assets"
import Beni from "./Beni"
import CareTaker from "./CareTaker"
import Gifts from "./Gifts"
import Thoughts from "./Thoughts"

function App(props) {
  return (
    <Router>
      <div>
        <ul className="Nav">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/Sidebar">Sidebar</Link>
          </li>
          <li>
            <Link to="/Admin">Admin</Link>
          </li>
          <li>
            <Link to="/Will">Will</Link>
          </li>
          <li>
            <Link to="/BasicInfo">BasicInfo</Link>
          </li>
          <li>
            <Link to="/Assets">Assets</Link>
          </li>
          <li>
            <Link to="/Beni">Beni</Link>
          </li>
          <li>
            <Link to="/CareTaker">CareTaker</Link>
          </li>
          <li>
            <Link to="/Gifts">Gifts</Link>
          </li>
          <li>
            <Link to="/Thoughts">Thoughts</Link>
          </li>
        </ul>
        <Route exact path="/" component={Login} />
        <Route exact path="/Sidebar" component={Sidebar} />
        <Route path="/Admin" component={Admin} />
        <Route path="/Will" component={Will} />
        <Route path="/BasicInfo" component={BasicInfo} />
        <Route path="/Assets" component={Assets} />
        <Route path="/Beni" component={Beni} />
        <Route path="/CareTaker" component={CareTaker} />
        <Route path="/Gifts" component={Gifts} />
        <Route path="/Thoughts" component={Thoughts} />
      </div>
    </Router>
  )
}

export default App
