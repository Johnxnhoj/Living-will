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
import FormsPage from "./FormsPage"
import Documents from "./Documents"
import Executor from "./Executor"
import Witness from "./Witness"
import Notifications from "./Notifications"
import Help from "./Help"
import Settings from "./Settings"
import { useSide } from "../hooks"
import { useAdmin } from "../hooks"
import thankyou from "./thankyou"
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
            <header className="head">
              <div className="logo">
                <Link to="/">
                  <img className="logoa" src={exoduslogo} />
                </Link>
              </div>
              <div>
                Hello {username} {id}!
              </div>
              <div className="weird-con">
                <button id="signOut" onClick={e => signout()}>
                  Sign Out
                </button>
              </div>
            </header>
            <main>
              <Will className="Will" />
              <FormsPage className="formspage" />
            </main>
            ]
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
