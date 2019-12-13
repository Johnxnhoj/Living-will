import React, { useState } from "react"
import { useEstate, useAdmin } from "../hooks/index"

export default props => {
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
      user_id: id,
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
        Assets
        <form onSubmit={handleSubmit}>
          <div className="box-1">
            <div className="Input-1">
              Name of Beneficiary{" "}
              <input
                type="text"
                placeholder="Name of Beneficiary"
                value={namebeni}
                onChange={e => setNamebeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Beneficiary Address{" "}
              <input
                type="text"
                placeholder="Beneficiary Adress"
                value={addressbeni}
                onChange={e => setAddressbeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Relation
              <input
                type="text"
                placeholder="Relation"
                value={relationbeni}
                onChange={e => setRelationbeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Type of Estate
              <input
                type="text"
                placeholder="Type of Estate"
                value={typebeni}
                onChange={e => setTypebeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Property
              <input
                type="text"
                placeholder="Property"
                value={property}
                onChange={e => setProperty(e.target.value)}
              ></input>
            </div>
            <button className="button-assets" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
