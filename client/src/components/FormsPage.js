import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
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

import thankyou from "./thankyou"
import MainP from "./MainP"

export default props => {
  return (
    <div className="contain2">
      <div className="box-links">
        <Link to="/BasicInfo">
          <p>
            Basic Info
            {/* <Icon className="Icon" icon="save" /> */}
          </p>
        </Link>

        <Link to="/Assets">
          <p>
            Assets
            {/* <Icon className="Icon" icon="sitemap" /> */}
          </p>
        </Link>
        <Link to="/CareTaker">
          <p>
            Caretaker
            {/* <Icon className="Icon" icon="heart" /> */}
          </p>
        </Link>
        <Link to="/Gifts">
          <p>
            Gifts
            {/* <Icon className="Icon" icon="gift" /> */}
          </p>
        </Link>
        <Link to="/Thoughts">
          <p>
            Thoughts
            {/* <Icon className="Icon" icon="comment" /> */}
          </p>
        </Link>

        <Link to="/Executor">
          <p>
            Executor
            {/* <Icon className="Icon" icon="file" /> */}
          </p>
        </Link>
        <Link to="/Witness">
          <p>
            Witness
            {/* <Icon className="Icon" icon="address-book" /> */}
          </p>
        </Link>
      </div>
      <div className="form-routes">
        <div className="change">
          <Route path="/BasicInfo" component={BasicInfo} />
          <Route path="/Assets" component={Assets} />
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
          <Route path="/thankyou" component={thankyou} />
        </div>
      </div>
    </div>
  )
}
