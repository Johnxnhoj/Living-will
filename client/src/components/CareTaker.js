import React, { useState } from "react"
import { useTakerInfo, useAdmin } from "../hooks/index"

export default props => {
  const [childname, setChildname] = useState("")
  const [guardianName, setGuardianName] = useState("")
  const [altGuardianName, setAltGuardianName] = useState("")
  const [extraGuardianName, setExtraGuardianName] = useState("")
  const { grabCareInfo } = useTakerInfo()
  const { isAuthenticated, username, signin, signout, reg, id } = useAdmin()
  function handleSubmit(e) {
    e.preventDefault()
    grabCareInfo({
      user_id: id,
      childname: childname,
      guardianName: guardianName,
      altGuardianName: altGuardianName,
      extraGuardianName: extraGuardianName
    })
  }

  return (
    <div className="container-1">
      <div className="container-2">
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
    </div>
  )
}
