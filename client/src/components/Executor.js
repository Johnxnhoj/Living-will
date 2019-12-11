import React, { useState } from "react"
import { useExecutor } from "../hooks/index"
export default props => {
  const [fullName, setFullName] = useState("")
  const [cityName, setCityName] = useState("")
  const [countyName, setCountyName] = useState("")
  const [stateName, setStateName] = useState("")
  const { grabUserExecutor } = useExecutor()

  function handleSubmit(e) {
    e.preventDefault()
    grabUserExecutor({
      fullName: fullName,
      cityName: cityName,
      countyName: countyName,
      stateName: stateName
    })
  }

  return (
    <div className="container-1">
      <div className="container-2">
        <form onSubmit={handleSubmit}>
          <div className="Title">Executor</div>
          <div>
            Full Name{" "}
            <input
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              name="text"
            ></input>{" "}
          </div>
          <div>
            {" "}
            City{" "}
            <input
              type="text"
              value={cityName}
              onChange={e => setCityName(e.target.value)}
            ></input>{" "}
          </div>
          <div>
            {" "}
            County{" "}
            <input
              type="text"
              value={countyName}
              onChange={e => setCountyName(e.target.value)}
            ></input>{" "}
          </div>
          <div>
            {" "}
            State{" "}
            <input
              type="text"
              value={stateName}
              onChange={e => setStateName(e.target.value)}
            ></input>{" "}
          </div>
          <button
            type="submit"
            // value={userExecutor}
            // onChange={(e) => setUserExecutor(e.target.value)}
          >
            Save And Continue
          </button>
        </form>
      </div>
    </div>
  )
}
