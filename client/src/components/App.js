import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Admin from "./Admin"
import Login from "./Login"
import Register from "./Register"
import CheckLogin from "./CheckLogin"
///
import Slider from "../components/Slider"

function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Admin} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={CheckLogin} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
