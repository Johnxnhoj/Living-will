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

export default props => {
  const { grabUserInfo, basicInfo, user_info, info, get } = useBasicInfo()
  const { grabEstateInfo, estate, getting } = useEstate()
  const { grabCareInfo, guardian, recieve } = useTakerInfo()
  const { grabUserExecutor, grab, execute } = useExecutor()
  const { grabGiftInfo, presents, arriving } = useGifts()
  const { grabUserThoughts, ideas, want } = useUserThoughts()
  const { grabWitnessInfo, find, witwit } = useWitness()
  const { isAuthenticated, username, signin, signout, reg, id } = useAdmin()
  useEffect(() => {
    get(id)
  }, [])

  return (
    <div className="container-1">
      <div className="container-2">
        <h1>Will</h1>
        <div className="container-will">
          {" "}
          <p className="BasicInfoShowing">
            I {user_info.full_name} resident in the City of *City* County of
            *County*, State of *State*, being of sound mind, not acting under
            duress or undue influence, and fully understanding the nature and
            extent of all my property and of this .....blah blah blah.
          </p>
          <p className="executorSection">
            I nominate and appoint *ExecutorFullName* of *City, County, State*
            as Personal Representative of my estate and I request that (he /she)
            be appointed temporary PR if applies.if my PR fails or ceases
          </p>
          <p>{CareTaker.child_name}</p>
        </div>
      </div>
    </div>
  )
}
