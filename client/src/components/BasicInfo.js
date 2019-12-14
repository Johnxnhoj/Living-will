import React, { useState } from "react"
// import validator from "validator"
import { useBasicInfo, useAdmin } from "../hooks/index"
import { decode } from "jsonwebtoken"
//ACTION DEFINITIONS
export default (props) => {
  const [fullName, setFullName] = useState("")
  const [cityName, setCityName] = useState("")
  const [countyName, setCountyName] = useState("")
  const [stateName, setStateName] = useState("")
  const [mobile_number, setMobile_number] = useState("")
  const [email, setEmail] = useState("")
  const [marital_status, setMarital_status] = useState("")
  const [children, setChildren] = useState("")
  const [home, setHome] = useState("")
  const [pets, setPets] = useState("")
  const { isAuthenticated, id } = useAdmin()
  const { grabUserInfo } = useBasicInfo()
  function handleSubmit(e) {
    e.preventDefault()
    //console.log(childname, guardianName)
    //console.log(guardianName)
    //console.log(childname, guardianName, altGuardianName, extraGuardianName)

    grabUserInfo({
      user_Id: id,
      fullName: fullName,
      cityName: cityName,
      countyName: countyName,
      stateName: stateName,
      email: email,
      mobile_number: mobile_number,
      marital_status: marital_status,
      children: children,
      home: home,
      pets: pets
    })
  }

  //EXPORT DEFAULT (PROPS) => {
  return (
    <div className="container-1">
      <div className="container-2">
        <h1>Tell Us About Yourself {id} </h1>
        <form onSubmit={handleSubmit}>
          <div className="container-3">
            <div className="Input-1">
              <label className="name">Full Name</label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                type="text"
                placeholder="Full Name"
              />
            </div>
            {/* //<div>
          Extra Alternate Guardian Full Name
          <input
            type="text"
            onChange={e => setExtraGuardianName(e.target.value)}
          ></input>
        </div> */}
            <div className="Input-1">
              <div>Mobile Number (Optional) </div>
              <input
                onChange={(e) => setMobile_number(e.target.value)}
                value={mobile_number}
                type="text"
                placeholder="+1(808)702-2019"
              ></input>
            </div>

            <div className="Input-1">
              <label>Marital Status</label>
              <select
                className="StatusChoices"
                name="married"
                value={marital_status}
                onChange={(e) => setMarital_status(e.target.value)}
              >
                <option value="marital status">Choose A Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widow">Widowed</option>
              </select>
            </div>
            <div className="Input-1">
              <label>City</label>
              <input
                onChange={(e) => setCityName(e.target.value)}
                value={cityName}
                type="text"
                placeholder="City Name"
              />
            </div>
            <div className="Input-1">
              <label>County</label>
              <input
                onChange={(e) => setCountyName(e.target.value)}
                value={countyName}
                type="text"
                placeholder="County Name"
              />
            </div>
            <div className="Input-1">
              <label>State</label>
              <input
                onChange={(e) => setStateName(e.target.value)}
                value={stateName}
                type="text"
                placeholder="State Name"
              />
            </div>
            <div className="Input-1">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="email@gmail.com"
              />
            </div>

            <div className="Input-1">
              <label>Do You Have Children?</label>
              <select
                className="Children"
                name="kids"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              >
                <option value="child">Select One</option>
                <option value="si">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="Input-1">
              <label>Do You Have Pets?</label>
              <select
                className="pets"
                name="pets"
                value={pets}
                onChange={(e) => setPets(e.target.value)}
              >
                <option value="pets">Select One</option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            <div className="Input-1">
              <label>Do You Own a Home</label>
              <select
                className="home"
                name="homies"
                value={home}
                onChange={(e) => setHome(e.target.value)}
              >
                <option value="home">Select One</option>
                <option value="yeah">Yes</option>
                <option value="nah">No</option>
              </select>
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
