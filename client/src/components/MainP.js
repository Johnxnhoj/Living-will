import React from "react"
import { useSide } from "../hooks"
import Slider from "./Slider"
export default props => {
  const { toggle } = useSide()
  return (
    <div className="container-main">
      <div classsName="container-2">
        <div className="middle-b">
          <button>Your Will</button>
          <button onClick={e => toggle()}>Create a Will</button>
          <Slider />
        </div>
      </div>
    </div>
  )
}
