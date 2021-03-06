import React, { useState } from "react"
import { useWitness, useAdmin } from "../hooks/index"

export default (props) => {
  const [nameWit1, setNameWit1] = useState("")
  const [nameWit2, setNameWit2] = useState("")
  const [DateW, setDateW] = useState("")
  const { grabWitnessInfo, witwit, get } = useWitness()
  const { isAuthenticated, id } = useAdmin()

  function handleSubmit(e) {
    e.preventDefault()
    grabWitnessInfo({
      user_Id: id,
      nameWit1: nameWit1,
      nameWit2: nameWit2,
      DateW: DateW
    })
  }

  return (
    <div className="container-1">
      <div className="container-2">
        <h1>Witness</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-3">
            <p>
              Find at least two (2) witnesses (most States require two (2)
              witnesses) that can attest to the will and sign. It is strongly
              encouraged the witnesses be disinterested from the will. For legal
              purposes, and so that the document is not contested by any third
              (3rd) party.
            </p>
            <div className="Input-1">
              <input
                type="text"
                placeholder="Witness No.1"
                onChange={(e) => setNameWit1(e.target.value)}
              />
            </div>
            <div className="Input-1">
              <input
                type="text"
                placeholder="Witness No.2"
                onChange={(e) => setNameWit2(e.target.value)}
              />
            </div>
            <div className="Input-1">
              <input
                type="date"
                placeholder="Date"
                onChange={(e) => setDateW(e.target.value)}
              />
            </div>
            <button className="button-go" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
