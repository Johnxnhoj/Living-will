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
  const { grabUserInfo, basicInfo, user_info, info, get } = useBasicInfo()
  const { grabEstateInfo, estate, infoEstate, getting } = useEstate()
  const { grabCareInfo, CareTaker, recieve } = useTakerInfo()
  // const { grabUserExecutor, grab, execute } = useExecutor()
  // const { grabGiftInfo, presents, arriving } = useGifts()
  // const { grabUserThoughts, ideas, want } = useUserThoughts()
  // const { grabWitnessInfo, find, witwit } = useWitness()
  const { isAuthenticated, username, signin, signout, reg, id } = useAdmin()
  useEffect(() => {
    get(id)
    // recieve(id)
    getting(id)
  }, [])
  console.log(infoEstate)

  return (
    <div className="contain">
      <h1>Will</h1>
      <div className="container-will">
        {" "}
        <p className="BasicInfoShowing">
          I <p> {user_info.full_name} </p> resident in the City of *City* County
          of *County*, State of *State*, being of sound mind, not acting under
          duress or undue influence, and fully understanding the nature and
          extent of all my property and of this .....blah blah blah.
        </p>
        <p className="executorSection">
          I nominate and appoint{" "}
          <p>{infoEstate ? infoEstate.beni_name : ""} </p> *ExecutorFullName* of
          *City,{infoEstate ? infoEstate.relationbeni : ""} County, State* as
          Personal Representative of my estate and I request that (he /she) be
          appointed temporary PR if applies.if my PR fails or ceases
        </p>
        <p></p>
      </div>
    </div>
  )
}
