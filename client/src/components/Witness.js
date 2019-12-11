import React, { useState } from "react"
import { useWitness } from "../hooks/index"

export default props => {
  const [nameWit1, setNameWit1] = useState("")
  const [nameWit2, setNameWit2] = useState("")
  const [DateW, setDateW] = useState("")
  const { grabWitnessInfo } = useWitness()
  function handleSubmit(e) {
    e.preventDefault()
    grabWitnessInfo({
      nameWit1: nameWit1,
      nameWit2: nameWit2,
      DateW: DateW
    })
  }

  return (
    <div className="container-1">
      <div className="container-2">
        <form onSubmit={handleSubmit}>
          <div>Witnesses</div>
          <p>
            Find at least two (2) witnesses (most States require two (2)
            witnesses) that can attest to the will and sign. It is strongly
            encouraged the witnesses be disinterested from the will. For legal
            purposes, and so that the document is not contested by any third
            (3rd) party.
          </p>
          <div>
            <input
              type="text"
              placeholder="Witness No.1"
              onChange={e => setNameWit1(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Witness No.2"
              onChange={e => setNameWit2(e.target.value)}
            />
            <div>
              <input
                type="date"
                placeholder="Date"
                onChange={e => setDateW(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}
