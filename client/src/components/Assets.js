import React, { useState } from "react"
import { useEstate, useAdmin } from "../hooks/index"

export default (props) => {
  const [namebeni, setNamebeni] = useState("")
  const [addressbeni, setAddressbeni] = useState("")
  const [relationbeni, setRelationbeni] = useState("")
  const [typebeni, setTypebeni] = useState("")
  const [property, setProperty] = useState("")
  const { grabEstateInfo } = useEstate()
  const { id } = useAdmin()
  function handleSubmit(e) {
    e.preventDefault()
    grabEstateInfo({
      user_Id: id,
      namebeni: namebeni,
      addressbeni: addressbeni,
      relationbeni: relationbeni,
      typebeni: typebeni,
      property: property
    })
  }

  return (
    <div className="container-1">
      <div className="container-2">
        <h1>Assets</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-3">
            <div className="Input-1">
              Name of Beneficiary{" "}
              <input
                type="text"
                placeholder="Name of Beneficiary"
                value={namebeni}
                onChange={(e) => setNamebeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Beneficiary Address{" "}
              <input
                type="text"
                placeholder="Beneficiary Adress"
                value={addressbeni}
                onChange={(e) => setAddressbeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              <label> Relation</label>

              <select
                name="relation"
                value={relationbeni}

                onChange={e => setRelationbeni(e.target.value)}
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
              Type of Estate
              <input
                type="text"
                placeholder="Type of Estate"
                value={typebeni}
                onChange={(e) => setTypebeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Property
              <input
                type="text"
                placeholder="Property"
                value={property}
                onChange={(e) => setProperty(e.target.value)}
              ></input>
            </div>

            <button className="button-go" type="submit" value={id}>
              submit

            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
