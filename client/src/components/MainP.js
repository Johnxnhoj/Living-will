import React from "react"
import { Link } from "react-router-dom"
import { useSide } from "../hooks"

import sundown from "../assets/sundown.mp4"
export default props => {
  const { toggle } = useSide()
  return (
    <div className="container-x">
      <div className="front-buttons">
        <button>Your Will</button>
        <Link to="CreateWillPage">
          <p className="createawill">create a will</p>
        </Link>
      </div>
      {/* <video autoplay="true" loop="true" id="myVideo" src={sundown}></video> */}
    </div>
  )
}
