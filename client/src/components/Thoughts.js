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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Thoughts</h1>
        <p>Jot your personal thoughts or messages here.</p>
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
  )
}
