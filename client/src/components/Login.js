import React, { useState } from "react"
import { useAdmin } from "../hooks"
import { Link } from "react-router-dom"
// import "../styles/main.css"
// import "../styles/base.css"

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
    <div className="mainLog">
      <form className="fill" onSubmit={handleSubmit}>
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
        <button className="go" type="submit">
          Login
        </button>
      </form>
      <Link to="/register">New User? Register Here!</Link>
    </div>
  )
}
