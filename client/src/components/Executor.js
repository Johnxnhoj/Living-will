import React, { useState } from "react"
import { useUserExecutor } from "../hooks/index"

const [fullName, setFullName] = useState("")
const [cityName, setCityName] = useState("")
const [countyName, setCountyName] = useState("")
const [stateName, setStateName] = useState("")
const { grabUserExecutor } = useUserExecutor()
function handleSubmit(e) {
  e.preventDefault()
  grabUserExecutor({
    fullName: fullName,
    cityName: cityName,
    countyName: countyName,
    stateName: stateName
  })
}

export default (props) => {
  return (
    <div>
      <div className="Title">Executor</div>
      <div>
        Full Name <input type="text" name="text"></input>{" "}
      </div>
      <div>
        {" "}
        City <input type="text"></input>{" "}
      </div>
      <div>
        {" "}
        County <input type="text"></input>{" "}
      </div>
      <div>
        {" "}
        State <input type="text"></input>{" "}
      </div>
      <button
        type="submit"
        value={userExecutor}
        onChange={(e) => setUserExecutor(e.target.value)}
      >
        Save And Continue
      </button>
    </div>
  )
}
