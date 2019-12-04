import React from "react"

import { Link } from "react-router-dom"
export default props => {
  return (
    <div className="Container">
      <div className="FormBubble">
        <p>
          <Link to="/BasicInfo">Basic Info</Link>
        </p>
        <p>
          <Link to="/Assets">Assets</Link>
        </p>
        <br></br>
        <p>
          <Link to="/Beni">Beneficiary</Link>
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
      </div>
    </div>
  )
}
