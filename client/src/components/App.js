import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Main Page Routes///

import Sidebar from "./Sidebar"
import Admin from "./Admin"
import BasicInfo from "./BasicInfo"
import Assets from "./Assets"
import Beni from "./Beni"
import CareTaker from "./CareTaker"
import Gifts from "./Gifts"
import Thoughts from "./Thoughts"

//// Side Bar Routes///
import Will from "./Will"
import Documents from "./Documents"
import Executor from "./Executor"
import Witness from "./Witness"
import Notifications from "./Notifications"
import Help from "./Help"
import Settings from "./Settings"

///css
import "../styles/adminPage.css"
import "../styles/Sidebar.css"
///Shey
import Amplify from "aws-amplify"
import aws_exports from "../aws-exports"
import { withAuthenticator } from "aws-amplify-react"
Amplify.configure(aws_exports)

function App(props) {
  return (
    <Router>
      <div>
        <header>
          <ul className="Nav">
            <li>
              <Link to="/">Admin</Link>
            </li>
            <li>
              <Link to="/Sidebar">Sidebar</Link>
            </li>
          </ul>
        </header>

        <Route exact path="/" component={Admin} />
        <Route path="/Sidebar" component={Sidebar} />
        <Route path="/BasicInfo" component={BasicInfo} />
        <Route path="/Assets" component={Assets} />
        <Route path="/Beni" component={Beni} />
        <Route path="/CareTaker" component={CareTaker} />
        <Route path="/Gifts" component={Gifts} />
        <Route path="/Thoughts" component={Thoughts} />

        <Route path="/Will" component={Will} />
        <Route path="/Documents" component={Documents} />
        <Route path="/Executor" component={Executor} />
        <Route path="/Witness" component={Witness} />
        <Route path="/Notifications" component={Notifications} />
        <Route path="/Help" component={Help} />
        <Route path="/Settings" component={Settings} />
      </div>
    </Router>
  )
}

export default App
