import React from "react"
export default props => {
  // const create = useCreateBene()
  // const [Beni_name, setBeni_name]

  return (
    <div className="container-1">
      <div className="box-1">
        <div className="box-Person">
          <div className="Input-1">
            <p>Name of Beneficiary</p>
            <input type="name" placeholder="Name of Beneficiary"></input>
          </div>
          <div className="Input-1">
            <p>Beneficiary Address</p>
            <input type="name" placeholder="Beneficiary Adress"></input>
          </div>
          <div className="Input-1">
            <p>Relation</p>
            <input type="name" placeholder="Relation"></input>
          </div>
        </div>
        <div className="box-Person">
          <div className="Input-1">
            <p>Type of Estate</p>
            <input type="name" placeholder="Type of Estate"></input>
            <div className="Input-1">
              <p>Property</p>
              <input type="name" placeholder="Property"></input>
            </div>
          </div>
          <button type="sumbit">sumbit</button>
        </div>
      </div>
    </div>
  )
}
