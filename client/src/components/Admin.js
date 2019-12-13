import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Icon from "../lib/Icon"

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
import { useAdmin } from "../hooks"
//Logo and Carousel Imports
import exoduslogo from "../assets/exoduslogo.png"
// import Slider from "../components/Slider"
// import Header from "../components/Header"
import MainP from "./MainP"

export default props => {
  const { visible, toggle } = useSide()
  const { username, signout, isAuthenticated, id } = useAdmin()
  return (
    <div>
      {isAuthenticated ? (
        <Router>
          <div className="Container">
            <header>
              <div className="logo">
                <Link to="/">
                  <img className="logoa" src={exoduslogo} />
                </Link>
              </div>

              <div>
                Hello {username} {id}!
              </div>

              <div className={visible ? "Side open" : "Side"}>
                <div className="toggle" onClick={e => toggle()}>
                  <Icon icon="bars" />
                </div>
                <div className="Form-links">
                  <Link to="/">
                    <p>
                      Home
                      <Icon icon="home" />
                    </p>
                  </Link>
                  <Link to="/Will">
                    <p>
                      Will
                      <Icon icon="address-card" />
                    </p>
                  </Link>

                  <Link to="/BasicInfo">
                    <p>
                      Basic Info
                      <Icon icon="save" />
                    </p>
                  </Link>

                  <Link to="/Assets">
                    <p>
                      Assets
                      <Icon icon="sitemap" />
                    </p>
                  </Link>
                  <Link to="/CareTaker">
                    <p>
                      Caretaker
                      <Icon icon="heart" />
                    </p>

                  </Link>
                  <Link to="/Gifts">
                    <p>
                      Gifts
                      <Icon icon="gift" />
                    </p>
                  </Link>
                  <Link to="/Thoughts">
                    <p>
                      Thoughts
                      <Icon icon="comment" />
                    </p>
                  </Link>

                  <Link to="/Executor">
                    <p>
                      Executor
                      <Icon icon="file" />
                    </p>

                  </Link>
                  <Link to="/Witness">
                    <p>
                      Witness
                      <Icon icon="address-book" />
                    </p>
                  </Link>

                  <button id="signOut" onClick={e => signout()}>
                    Sign Out
                  </button>
                </div>
              </div>
            </header>

            <main>
              <Route exact path="/" component={MainP} />
              <div className="change">
                <Route path="/BasicInfo" component={BasicInfo} />
                <Route path="/Assets" component={Assets} />
                <Route path="/CareTaker" component={CareTaker} />
                <Route path="/Gifts" component={Gifts} />
                <Route path="/Thoughts" component={Thoughts} />

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
              <div className="logo">
                <Link to="/">
                  <img className="logoa-2" src={exoduslogo} />
                </Link>
                <div className="icons">
                  <Icon icon="facebook-square"></Icon>
                  <Icon icon="instagram"></Icon>
                  <Icon icon="twitter-square"></Icon>
                </div>
              </div>

              <div className="rights">
                Exodus, Inc. All Rights Reserved.
                <p className="disclaimer">
                  Disclaimer: We are not a law firm or a substitute for an
                  attorney or law firm. We cannot provide any kind of advice,
                  explanation, opinion, or recommendation about possible legal
                  rights, remedies, defenses, options, selection of forms or
                  strategies.
                </p>
              </div>

            </footer>
          </div>
        </Router>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  )
}
