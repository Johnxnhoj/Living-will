import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Admin from "./Admin"
///css
import "../styles/adminPage.css"

function App(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Admin} />
      </div>
    </Router>
  )
}

export default App
