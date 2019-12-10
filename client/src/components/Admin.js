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

import { useAdmin } from "../hooks"

//Logo and Carousel Imports
import exoduslogo from "../assets/exoduslogo.png"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import friends from "../assets/friends.jpg"
import oldcouple from "../assets/oldcouple.jpg"
import sunset from "../assets/sunset.jpg"
import lonelyman from "../assets/lonelyman.jpg"

export default (props) => {
  const { visible, toggle } = useSide()

  const { signout } = useAdmin()

  return (
    <Router>
      <div className="Container">
        <header className="head">
          <div className="logo">
            <img className="logoa" src={exoduslogo} />
          </div>
          {/* <button id="signOut" onClick={e => signout()}>
            Sign Out
          </button> */}
          <div className={visible ? "Side open" : "Side"}>
            <div className="toggle" onClick={(e) => toggle()}>
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
          <div className="middle-b">
            <button>Your Will</button>
            <button onClick={e => toggle()}>Create a Will</button>
          </div>
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
          <AwesomeSlider>
            <div data-src={lonelyman} />
            <div data-src={friends} />
            <div data-src={sunset} />
            <div data-src={oldcouple} />
          </AwesomeSlider>
        </main>
        <footer className="foot">
          Exodus, Inc. All Rights Reserved.
          <div className="icons">
            <Icon icon="facebook-square"></Icon>
            <Icon icon="instagram"></Icon>
            <Icon icon="twitter-square"></Icon>
          </div>
          <div>
            Disclaimer: We are not a law firm or a substitute for an attorney or
            law firm. We cannot provide any kind of advice, explanation,
            opinion, or recommendation about possible legal rights, remedies,
            defenses, options, selection of forms or strategies.{" "}
          </div>
        </footer>
      </div>
    </Router>
  )
}
