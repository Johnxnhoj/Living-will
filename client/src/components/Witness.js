import React from "react"
export default props => {
  return (
    <div>
      <div>Witnesses</div>
      <p>
        Find at least two (2) witnesses (most States require two (2) witnesses)
        that can attest to the will and sign. It is strongly encouraged the
        witnesses be disinterested from the will. For legal purposes, and so
        that the document is not contested by any third (3rd) party.
      </p>
      <div>
        <input type="text" name="fname" placeholder="Witness No.1" />
      </div>
      <div>
        <input type="text" placeholder="Witness No.2" />
        <div>
          <input type="text" placeholder="Date" />
        </div>
      </div>
    </div>
  )
}
