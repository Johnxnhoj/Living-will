import React, { useState } from "react"
import { useUserThoughts } from "../hooks/index"

export default (props) => {
  const [userThoughts, setUserThoughts] = useState("")
  const { grabUserThoughts } = useUserThoughts()
  function handleSubmit(e) {
    e.preventDefault()
    grabUserThoughts({
      userThoughts: userThoughts
    })
  }
  return (
    <div className="container-1">
      <div className="container-2">
        <form onSubmit={handleSubmit}>
          <h1>Thoughts</h1>
          <p>
            You may jot down general thoughts about your life or leave detailed
            explanations about why you left specific gifts behind, etc.{" "}
          </p>
          <textarea
            rows="10"
            cols="50"
            value={userThoughts}
            onChange={(e) => setUserThoughts(e.target.value)}
          ></textarea>
          <div>
            <button type="submit">Save And Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}
