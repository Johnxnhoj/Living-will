import React, { useState } from "react"
import { useGifts, useAdmin } from "../hooks/index"

export default (props) => {
  // const [user_id, setUser_id] = useState("")
  const [gift, setGift] = useState("")
  const [gift_recipient, setGift_recipient] = useState("")
  const [relationship_to_user, setRelationship_to_user] = useState("")
  const [alternate_gift_recipient, setAlternate_gift_recipient] = useState("")
  const { isAuthenticated, id } = useAdmin()
  const { grabGiftInfo, presents, get } = useGifts()

  function handleSubmit(e) {
    e.preventDefault()
    props.history.push("/thankyou")
    grabGiftInfo({
      user_Id: id,
      gift: gift,
      gift_recipient: gift_recipient,
      relationship_to_user: relationship_to_user,
      alternate_gift_recipient: alternate_gift_recipient
    })
  }
  return (
    <div className="container-1">
      <div className="container-2">
        <h1>Gifts</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-3">
            <p>Gift #1</p>
            <div className="Input-1">
              <label>I want to give my...</label>
              <input
                onChange={(e) => setGift(e.target.value)}
                value={gift}
                type="text"
              ></input>
            </div>
            <div className="Input-1">
              <label>To... (Full Name)</label>
              <input
                onChange={(e) => setGift_recipient(e.target.value)}
                value={gift_recipient}
                type="text"
              ></input>
            </div>

            <div className="Input-1">
              <label>Relationship To This Person</label>
              <select
                name="relation"
                value={relationship_to_user}
                onChange={(e) => setRelationship_to_user(e.target.value)}
              >
                <option value="relation">Select</option>
                <option value="relation">//Immediate Family//</option>
                <option value="Spouse">Spouse</option>
                <option value="Daughter">Daughter</option>
                <option value="Son">Son</option>
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Sister">Sister</option>
                <option value="Brother">Brother</option>
                <option value="Domestic Partner">Domestic Partner</option>
                <option value="relation">//Extended Family//</option>
                <option value="Granddaughter">Granddaughter</option>
                <option value="Grandson">Grandson</option>
                <option value="Grandmother">Grandmother</option>
                <option value="Grandfather">Grandfather</option>
                <option value="Aunt">Aunt</option>
                <option value="Uncle">Uncle</option>
                <option value="Niece">Niece</option>
                <option value="Nephew">Nephew</option>
                <option value="Cousin">Cousin</option>
                <option value="relation">//In-Law Family//</option>
                <option value="Mother-In-Law">Mother-In-Law</option>
                <option value="Father-In-Law">Father-In-Law</option>
                <option value="Daughter-In-Law">Daughter-In-Law</option>
                <option value="Son-In-Law">Son-In-Law</option>
                <option value="Sister-In-Law">Sister-In-Law</option>
                <option value="Brother-In-Law">Brother-In-Law</option>
                <option value="relation">//Step Family//</option>
                <option value="Stepmother">Stepmother</option>
                <option value="Stepfather">Stepfather</option>
                <option value="Stepsister">Stepsister</option>
                <option value="Stepbrother">Stepbrother</option>
                <option value="Stepdaughter">Stepdaughter</option>
                <option value="Stepson">Stepson</option>
                <option value="relation">//Other//</option>
                <option value="Friend">Friend</option>
                <option value="Business-Partner">Business Partner</option>
                <option value="Charity">Charity</option>
                <option value="Church">Church</option>
                <option value="School">School</option>
              </select>
            </div>
            <div className="Input-1">
              <label>Alternate Recipient (Full Name)</label>
              <input
                onChange={(e) => setAlternate_gift_recipient(e.target.value)}
                value={alternate_gift_recipient}
                type="text"
              ></input>
            </div>

            <button value={id} className="button-go" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
