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


//Denia
import { useAdmin } from "../hooks"

export default props => {
  const { signout } = useAdmin()

//Logo and Slider Photos
import exoduslogo from "../assets/exoduslogo.png"
import friends from "../assets/friends.jpg"
import oldcouple from "../assets/oldcouple.jpg"
import sunset from "../assets/sunset.jpg"
import lonelyman from "../assets/lonelyman.jpg"

export default (props) => {

  return (
    <Router>
      <div className="Container">
        <header className="head">

          

          <div className="logo">
            <img src={exoduslogo} />
          </div>

  
  <button id="signOut" onClick={e => signout()}>
            Sign Out
          </button>
  
  
          <aside>
            <Icon icon="bars" className="line-bars"></Icon>
          </aside>
        </header>
        <main>
          <div className="Form-links">
            <p>
              <Link to="/BasicInfo">Basic Info</Link>
            </p>
            <p>
              <Link to="/Assets">Assets</Link>
            </p>
            <br></br>
            <p>
              <Link to="/CareTaker">CareTaker</Link>
            </p>
            <br></br>
            <p>
              <Link to="/Gifts">Gifts</Link>
            </p>
            <br></br>
            <p>
              <Link to="/Thoughts">Thoughts</Link>
            </p>
            <br></br>
            <p>
              <Link to="/Sidebar">Sidebar</Link>
            </p>
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
