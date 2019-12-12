import React from "react"
import { useSide } from "../hooks"
import Slider from "./Slider"
export default props => {
  const { toggle } = useSide()
  return (
    <div>
      <Slider />

      <div className="middle-b">
        <button>Your Will</button>
        <button onClick={e => toggle()}>Create a Will</button>
      </div>
    </div>
  )
}
