import React, { useEffect } from "react"
import {
  useBasicInfo,
  useAdmin,
  useEstate,
  useTakerInfo,
  useGifts,
  useExecutor,
  useUserThoughts,
  useWitness
} from "../hooks/index"
import CareTaker from "../redux/ducks/CareTaker"
import estate from "../redux/ducks/estate"

export default props => {
  const { isAuthenticated, username, signin, signout, reg, id } = useAdmin()
  const { user_info, get } = useBasicInfo()
  const { infoEstate, getting } = useEstate()

  const { grabCareInfo, care, recieve } = useTakerInfo(id)
  const { grabUserExecutor, grab, execute, executor } = useExecutor(id)
  const { grabGiftInfo, presents, arriving } = useGifts(id)
  const { grabUserThoughts, ideas, want } = useUserThoughts(id)
  const { grabWitnessInfo, find, witwit, ness } = useWitness(id)

  function myFunction() {
    window.print()
  }
  useEffect(() => {
    get(id)
    // want(id)

    // grab(id)
    // find()

    getting(id)
  }, [])
  // console.log(infoEstate)

  console.log(care)
  // console.log(witwit)
  // console.log(id)
  return (
    <div className="contain">
      <h1>Will</h1>
      <div className="container-will">
        {" "}
        <div className="BasicInfoShowing">
          I <p> {user_info.full_name} </p> resident in the City of{" "}
          <p> {user_info.city} </p> County of <p> {user_info.county} </p> ,
          State of <p> {user_info.state} </p> being of sound mind, not acting
          under duress or undue influence, and fully understanding the nature
          and extent of all my property and of this .....blah blah blah.
          <p>{ideas ? ideas.user_thoughts : ""}</p> blah blah
        </div>
        <div className="executorSection">
          Inominate and appoint *ExecutorFullName* of *City,
          <p>{infoEstate ? infoEstate.relationbeni : ""} </p> County, State*{" "}
          <p>{witwit ? witwit.Wit_1 : ""} </p>as Personal Representative of my
          estate and I request that <p>{execute ? execute.full_name : ""}</p>(he
          /she) be appointed temporary PR<p>{presents ? presents.gift : ""}</p>{" "}
          if applies, if my PR fails or ceases
          <p>{care ? care.Guardian_Name : ""}</p>
          testing testing
        </div>
        <div className="AssetsSection">
          <p>{infoEstate ? infoEstate.beni_name : ""} </p>beni name
          <p>{infoEstate ? infoEstate.address : ""}</p> address
          <p>{infoEstate ? infoEstate.relationbeni : ""}</p>relationship
          <p>{infoEstate ? infoEstate.property : ""} </p>property
          <p>{infoEstate ? infoEstate.type_of : ""} </p>type of
        </div>
        <div className="GuardianSection">
          <p>{care ? care.child_name : ""} </p>Child
          <p>{care ? care.Guardian_Name : ""} </p>Guardian
          <p>{care ? care.alt_Guardian_Name : ""}</p> Guardian Alternative
          <p>{care ? care.extra_Guardian_Name : ""}</p>Alternative Guardian
          Number 2
        </div>
        <div className="GiftsSection">
          <p>{presents ? presents.gift : ""}</p> Gift
          <p>{presents ? presents.gift_recipient : ""}</p> Who is recieving the
          gift?
          <p>{presents ? presents.relationship_to_user : ""}</p> relationship to
          user
          <p>{presents ? presents.alternate_gift_recipient : ""}</p> alternative
          gift recipient
        </div>
        <div className="ThoughtsSection">
          <p>{ideas ? ideas.user_thoughts : ""}</p> Message to loved ones.
        </div>
        <div className="WitSection">
          <p>{witwit ? witwit.Wit_1 : ""} </p> Witness Number 1
          <p>{witwit ? witwit.Wit_2 : ""} </p> Witness Number 2
          <p>{witwit ? witwit.Date_W : ""} </p> Date they sigined E-Document{" "}
        </div>
      </div>
      <button onClick={myFunction}>Print this page</button>
    </div>
  )
}
