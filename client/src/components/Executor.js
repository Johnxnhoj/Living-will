import React, { useState } from "react"
import { useExecutor, useAdmin } from "../hooks/index"

export default (props) => {
  const [fullName, setFullName] = useState("")
  const [cityName, setCityName] = useState("")
  const [countyName, setCountyName] = useState("")
  const [stateName, setStateName] = useState("")
  const { grabUserExecutor, get, execute } = useExecutor()
  const { isAuthenticated, id } = useAdmin()

  function handleSubmit(e) {
    e.preventDefault()
    grabUserExecutor({
      user_Id: id,
      fullName: fullName,
      cityName: cityName,
      countyName: countyName,
      stateName: stateName
    })
  }

  return (
    <div className="container-1">
      <div className="container-2">
        <h1>Executor</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-3">
            <p>
              Name an executor, who is responsible for tracking down assets,
              paying creditors, and making sure beneficiaries named in the will
              receive property to which they are entitled.
            </p>
            <div className="Input-1">
              Full Name{" "}
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                name="text"
              ></input>{" "}
            </div>
            <div className="Input-1">
              {" "}
              City{" "}
              <input
                type="text"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              ></input>{" "}
            </div>
            <div className="Input-1">
              {" "}
              County{" "}
              <input
                type="text"
                value={countyName}
                onChange={(e) => setCountyName(e.target.value)}
              ></input>{" "}
            </div>
            <div className="Input-1">
              {" "}
              State{" "}
              <input
                type="text"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
              ></input>{" "}
            </div>
            <button
              className="button-go"
              type="submit"
              // value={userExecutor}
              // onChange={(e) => setUserExecutor(e.target.value)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
