import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Will from "./Will"
import FormsPage from "./FormsPage"

export default props => {
  return (
    <Router>
      <div className="CWP">
        <Will className="Will" />

        <FormsPage className="formspage" />
      </div>
    </Router>
  )
}
