import React, { useState } from "react"
import { useTakerInfo } from "../hooks/index"

export default props => {
  const [childname, setChildname] = useState("")
  const [guardianName, setGuardianName] = useState("")
  const [altGuardianName, setAltGuardianName] = useState("")
  const [extraGuardianName, setExtraGuardianName] = useState("")
  const { grabCareInfo } = useTakerInfo()
  function handleSubmit(e) {
    e.preventDefault()
    grabCareInfo({
      childname: childname,
      guardianName: guardianName,
      altGuardianName: altGuardianName,
      extraGuardianName: extraGuardianName
    })
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
          Guardian Full Name Full Name{" "}
          <input
            type="text"
            onChange={e => setGuardianName(e.target.value)}
          ></input>
        </div>
        <div>
          Alternate Guardian Full Name
          <input
            type="text"
            onChange={e => setAltGuardianName(e.target.value)}
          ></input>
        </div>
        <div>
          Extra Alternate Guardian Full Name
          <input
            type="text"
            onChange={e => setExtraGuardianName(e.target.value)}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
