import React, { useState } from "react"
import { useTakerInfo } from "../hooks/index"

export default props => {
  const [childname, setChildname] = useState("")
  const { grabCareInfo } = useTakerInfo()
  function handleSubmit(e) {
    e.preventDefualt()
    grabCareInfo(childname)
  }
  return (
    <div>
      <div>Guardian</div>
      <form onSubmit={handleSubmit}>
        <div>
          Child Full Name{" "}
          <input type="text" onChange={e => setChildname(e.target.value)} />
        </div>
        <div>
          {" "}
          Guardian Full Name Full Name <input type="text"></input>
        </div>
        <div>
          Alternate Guardian Full Name<input type="text"></input>
        </div>
        <div>
          Extra Alternate Guardian Full Name<input type="text"></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
