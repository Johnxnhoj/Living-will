import React from "react"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"

export default (props) => {
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
      <footer className="foot">
        <p>Exodus, Inc. All Rights Reserved.</p>
        <div className="icons">
          <Icon icon="facebook-square"></Icon>
          <Icon icon="instagram"></Icon>
          <Icon icon="twitter-square"></Icon>
        </div>
      </footer>
    </div>
  )
}
