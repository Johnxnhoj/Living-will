import React from "react"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import "../styles/Sidebar.css"

///importing useSide function from hooks///
// import { useSide } from "../hooks"

export default props => {
  /// const useSide is what is going to make the side bar to open///
  // const { open } = useSide()
  return (
    /// className="Side" is what holds everything within the side bar///
    /// className="Window" is each Link within the side bar ///
    <div className="Side">
      <div className="toggle">
        <Icon icon="bars"></Icon>

        <div className="window">
          <Link to="/Will">Will</Link>
        </div>
        <div className="window">
          <Link to="/Documents">Documents</Link>
        </div>
        <div className="window">
          <Link to="/Executor">Executor</Link>
        </div>
        <div className="window">
          <Link to="/Witness">Witness</Link>
        </div>
        <div className="window">
          <Link to="/Notifications">Notifications</Link>
        </div>
        <div className="window">
          <Link to="/Help">Help</Link>
        </div>
        <div className="window">
          <Link to="/Settings">Settings</Link>
        </div>
      </div>
    </div>
  )
}
