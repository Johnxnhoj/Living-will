import React, { useState } from "react"
import { useAdmin } from "../hooks"
import { Link } from "react-router-dom"
// import "../styles/main.css"
import LLogin from "../assets/LLogin.png"

export default (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { reg } = useAdmin()

  function handleSubmit(e) {
    e.preventDefault()

    reg(username, password).then((resp) => {
      props.history.push("/")
    })
    // .catch(e => {})
  }
  return (
    <div className="mainLog">
      <div className="loginLogo">
        <img className="actualLogo" src={LLogin} />
      </div>

      <div className="formContainer">
        <form className="fill" onSubmit={handleSubmit}>
          <input
            id="user"
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="pass"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit">
            Login
          </button>
          <Link className="logBut" to="/login">
            Already A User? Log In!
          </Link>
        </form>
      </div>
    </div>
  )
}
