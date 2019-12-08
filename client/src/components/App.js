import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Admin from "./Admin"
///css
import "../styles/adminPage.css"
import "../styles/Sidebar.css"
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
