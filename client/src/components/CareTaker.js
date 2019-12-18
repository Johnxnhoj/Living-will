import React, { useState } from "react"
import { useTakerInfo, useAdmin } from "../hooks/index"

import { decode } from "jsonwebtoken"

export default props => {


  const [childname, setChildname] = useState("")
  const [guardianName, setGuardianName] = useState("")
  const [altGuardianName, setAltGuardianName] = useState("")
  const [extraGuardianName, setExtraGuardianName] = useState("")

  const { grabCareInfo, guardian, get } = useTakerInfo()
  const { isAuthenticated, id } = useAdmin()

  function handleSubmit(e) {
    e.preventDefault()
    // props.history.push("/thankyou")

    console.log(
      {
        user_Id: id,
        childname: childname,
        guardianName: guardianName,
        altGuardianName: altGuardianName,
        extraGuardianName: extraGuardianName
      },
      "kjkjj"
    )
    grabCareInfo({
      user_Id: id,
      childname: childname,
      guardianName: guardianName,
      altGuardianName: altGuardianName,
      extraGuardianName: extraGuardianName
    })
  }

  return (
    <div className="container-1">
      <div className="container-2">
        <h1>Caretaker</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-3">
            <div className="Input-1">
              Child Full Name{" "}
              <input type="text" onChange={e => setChildname(e.target.value)} />
            </div>
            <div className="Input-1">
              {" "}
              Guardian Full Name Full Name
              <input
                type="text"
                onChange={e => setGuardianName(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Alternate Guardian Full Name
              <input
                type="text"
                onChange={e => setAltGuardianName(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Extra Alternate Guardian Full Name
              <input
                type="text"
                onChange={e => setExtraGuardianName(e.target.value)}
              ></input>
            </div>

            <button className="button-go" type="submit" value={id}>

              Submit

            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
