import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Icon from "../lib/Icon"
import Sidebar from "./Sidebar"
import BasicInfo from "./BasicInfo"
import Assets from "./Assets"

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
import { useSide } from "../hooks"

export default props => {
  const { visible, toggle } = useSide()
  return (
    <Router>
      <div className="Container">
        <header className="head">
          LOGO
          <div className={visible ? "Side open" : "Side"}>
            <div className="toggle" onClick={e => toggle()}>
              <Icon icon="bars" />
            </div>
            <div className="Form-links">
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/Assets">Assets</Link>
              </p>
              <p>
                <Link to="/CareTaker">CareTaker</Link>
              </p>
              <p>
                <Link to="/Gifts">Gifts</Link>
              </p>
              <p>
                <Link to="/Thoughts">Thoughts</Link>
              </p>
            </div>
          </div>
        </header>
        <main>
          <div className="change">
            <Route path="/BasicInfo" component={BasicInfo} />
            <Route path="/Assets" component={Assets} />

            <Route path="/CareTaker" component={CareTaker} />
            <Route path="/Gifts" component={Gifts} />
            <Route path="/Thoughts" component={Thoughts} />
            <Route path="/Sidebar" component={Sidebar} />
            <Route path="/Will" component={Will} />
            {/* routes for the side bar*/}
            <Route path="/Documents" component={Documents} />
            <Route path="/Executor" component={Executor} />
            <Route path="/Witness" component={Witness} />
            <Route path="/Notifications" component={Notifications} />
            <Route path="/Help" component={Help} />
            <Route path="/Settings" component={Settings} />
          </div>
        </main>
        <footer className="foot">
          Exodus, Inc. All Rights Reserved.
          <div className="icons">
            <Icon icon="facebook-square"></Icon>
            <Icon icon="instagram"></Icon>
            <Icon icon="twitter-square"></Icon>
          </div>
        </footer>
      </div>
    </Router>
  )
}
