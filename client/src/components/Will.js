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
  console.log(user_info)
  return (
    <div className="contain">
      <h1>Will</h1>
      <div className="container-will">
        {" "}
        <div className="BasicInfoShowing">
          I <p> {user_info ? user_info.full_name : "Update your shit"} </p>{" "}
          resident in the City of *City* County of *County*, State of *State*,
          being of sound mind, not acting under duress or undue influence, and
          fully understanding the nature and extent of all my property and of
          this .....blah blah blah.
          <p>{ideas ? ideas.user_thoughts : ""}</p> blah blah
        </div>
        <div className="executorSection">
          I nominate and appoint{" "}
          <p>{infoEstate ? infoEstate.beni_name : ""} </p> *ExecutorFullName* of
          *City,<p>{infoEstate ? infoEstate.relationbeni : ""} </p> County,
          State* <p>{witwit ? witwit.Wit_1 : ""} </p>as Personal Representative
          of my estate and I request that{" "}
          <p>{execute ? execute.full_name : ""}</p>(he /she) be appointed
          temporary PR<p>{presents ? presents.gift : ""}</p> if applies, if my
          PR fails or ceases<p>{care ? care.Guardian_Name : ""}</p>
          testing testing
        </div>
        <button onClick={myFunction}>Print this page</button>
      </div>
    </div>
  )
}
