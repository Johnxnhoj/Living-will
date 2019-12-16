import React, { useState } from "react"
import { useAdmin } from "../hooks"
import { Link } from "react-router-dom"
import exoduslogo from "../assets/exoduslogo.png"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { signin } = useAdmin()

  function handleSubmit(e) {
    e.preventDefault()

    signin(username, password)
      .then(resp => {
        props.history.push("/")
      })
      .catch(e => {})
  }
  return (
    <div className="loginpage">
      <div className="mainLog">
        <div className="loginLogo">
          <img className="actualLogo" src={exoduslogo} />
        </div>

        <div className="formContainer">
          <form className="fill" onSubmit={handleSubmit}>
            <p className="LOGIN">LOGIN</p>
            <input
              id="user"
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              id="pass"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="loginButton" type="submit">
              Sign In
            </button>
            <Link className="logBut" to="/register">
              New User?<p>Register Here!</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
