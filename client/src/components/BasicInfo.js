import React, { useState } from "react"
import validator from "validator"
import { truncateSync } from "fs"

//ACTION DEFINITIONS
export function Forms(props) {
  const [fullName, setFullName] = useState("")
  const [fullNameError, setFullNameError] = useState("")
  const [cityName, setCityName] = useState("")
  const [cityNameError, setCityNameError] = useState("")
  const [countyName, setCountyName] = useState("")
  const [countyNameError, setCountyNameError] = useState("")
  const [stateName, setStateName] = useState("")
  const [stateNameError, setStateNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [submitted, setSubmitted] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    props.history.push("/submitted")
    let err = false

    if (fullName === "") {
      err = true
      setFullNameError("- Cannot Be Blank")
    } else {
      setFullNameError("")
    }

    if (cityName === "") {
      err = true
      setCityNameError("- Cannot Be Blank")
    } else {
      setCityNameError("")
    }

    if (countyName === "") {
      err = true
      setCountyNameError("- Cannot Be Blank")
    } else {
      setCountyNameError("")

      if (stateName === "") {
        err = true
        setStateNameError("- Cannot Be Blank")
      } else {
        setCountyNameError("")
      }

      if (email !== "") {
        if (!validator.isEmail(email)) {
          err = true
          setEmailError(" - Must be a valid email")
        } else {
          err = true
          setEmailError("")
        }
      } else {
        err = true
        setEmailError(" - Must be a valid email")
      }

      if (!validator)
        if (!err) {
          console.log("submitted")
        } else {
          console.log("not submitted")
        }
    }
  }

  //EXPORT DEFAULT (PROPS) => {
  return (
    <div className="container">
      <h1>Tell Us About Yourself</h1>
      <form>
        <label className="error" className={fullNameError === "" ? "" : "err"}>
          Full Name{fullNameError}
        </label>
        <input
          className={fullNameError === "" ? "" : "error"}
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          type="text"
          placeholder="Full Name"
        />

        <div>
          Mobile Number (Optional)
          <input type="text" placeholder="+1(808)702-2019"></input>
        </div>

        <div>
          <label>Marital Status</label>
          <select>
            <option value="marital status">Choose A Marital Status</option>
            <option value="marital status">Single</option>
            <option value="marital status">Married</option>
            <option value="marital status">Divorced</option>
          </select>
        </div>

        <label className="error" className={cityNameError === "" ? "" : "err"}>
          City{cityNameError}
        </label>
        <input
          className={cityNameError === "" ? "" : "err"}
          onChange={(e) => setCityNameError(e.target.value)}
          value={cityName}
          type="text"
          placeholder="City Name"
        />

        <label
          className="error"
          className={countyNameError === "" ? "" : "err"}
        >
          County{countyNameError}
        </label>
        <input
          className={countyNameError === "" ? "" : "err"}
          onChange={(e) => setCountyNameError(e.target.value)}
          value={countyName}
          type="text"
          placeholder="County Name"
        />

        <label className="error" className={stateNameError === "" ? "" : "err"}>
          State{stateNameError}
        </label>
        <input
          className={stateNameError === "" ? "" : "err"}
          onChange={(e) => setStateNameError(e.target.value)}
          value={stateName}
          type="text"
          placeholder="State Name"
        />

        <label className="error" className={emailError === "" ? "" : "err"}>
          Email{emailError}
        </label>
        <input
          className={emailError === "" ? "" : "error"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email@gmail.com"
        />

        <div className="formCheckBI">
          <label className="basicInfoCheck">
            <input type="checkbox" className="minorCheck" />I have minor
            children (17 and under)
          </label>
        </div>

        <div>
          <label className="basicInfoCheck">
            <input type="checkbox" className="adultCheck" />I have adult
            children
          </label>
        </div>

        <div>
          <label className="basicInfoCheck">
            <input type="checkbox" className="grandChildCheck" />I have
            grandchildren
          </label>
        </div>

        <div>
          <label className="basicInfoCheck">
            <input type="checkbox" className="petsCheck" />I have pets
          </label>
        </div>

        <div>
          <label className="basicInfoCheck">
            <input type="checkbox" className="estateCheck" />I own a home or
            other real estate
          </label>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Save And Continue
        </button>
      </form>
    </div>
  )
}
export default Forms
