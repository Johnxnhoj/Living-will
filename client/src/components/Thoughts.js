import React, { useState } from "react"
import { useUserThoughts, useAdmin } from "../hooks/index"

export default (props) => {
  const [userThoughts, setUserThoughts] = useState("")
  const { grabUserThoughts, get, ideas } = useUserThoughts()
  const { isAuthenticated, id } = useAdmin()
  function handleSubmit(e) {
    e.preventDefault()
    props.history.push("/thankyou")
    grabUserThoughts({
      userThoughts: userThoughts,
      user_Id: id
    })
  }
  return (
    <div className="container-1">
      <div className="container-2">
        <h1>Thoughts</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-3">
            <p className="description">
              You may jot down general thoughts about your life or leave
              detailed explanations about why you left specific gifts behind,
              etc.{" "}
            </p>
            <textarea
              rows="10"
              cols="50"
              value={userThoughts}
              onChange={(e) => setUserThoughts(e.target.value)}
            ></textarea>
            <div>
              <button className="button-go" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
