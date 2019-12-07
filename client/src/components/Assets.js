import React, { useState } from "react"
import { useEstate } from "../hooks/index"

export default props => {
  const [namebeni, setNamebeni] = useState("")
  const [addressbeni, setAddressbeni] = useState("")
  const [relationbeni, setRelationbeni] = useState("")
  const [typebeni, setTypebeni] = useState("")
  const [property, setProperty] = useState("")
  const { grabEstateInfo } = useEstate()
  function handleSubmit(e) {
    e.preventDefault()
    grabEstateInfo({
      namebeni: namebeni,
      addressbeni: addressbeni,
      relationbeni: relationbeni,
      typebeni: typebeni,
      property: property
    })
  }

  return (
    <div className="container-1">
      <form onSubmit={handleSubmit}>
        <div className="box-1">
          <div className="box-Person">
            <div className="Input-1">
              Name of Beneficiary{" "}
              <input
                type="text"
                placeholder="Name of Beneficiary"
                onChange={e => setNamebeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Beneficiary Address{" "}
              <input
                type="text"
                placeholder="Beneficiary Adress"
                onChange={e => setAddressbeni(e.target.value)}
              ></input>
            </div>
            <div className="Input-1">
              Relation
              <input
                type="text"
                placeholder="Relation"
                onChange={e => setRelationbeni(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="box-Person">
            <div className="Input-1">
              Type of Estate
              <input
                type="text"
                placeholder="Type of Estate"
                onChange={e => setTypebeni(e.target.value)}
              ></input>
              <div className="Input-1">
                Property
                <input
                  type="text"
                  placeholder="Property"
                  onChange={e => setProperty(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}
