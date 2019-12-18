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
          I <span>{user_info ? user_info.full_name : "Update your shit"}</span>
          resident in the City of
          <span> {user_info ? user_info.city : ""} </span> County of{" "}
          <span> {user_info ? user_info.county : ""} </span> , State of{" "}
          <span> {user_info ? user_info.state : ""} </span> being of sound mind,
          not acting under duress or undue influence, and fully understanding
          the nature and extent of all my property and of this disposition
          thereof, do hereby make , publish, and declare this document to be my
          Last Will and Testament, and hereby revoke any and all other wills and
          codicls heretofore made by me.
        </div>
        {/* <div className="TAXES">
          <label>I. Expenses & Taxes</label>
          <p>
            {" "}
            I direct that all my debts, and expenses of my last illness,
            funeral, and burial, be paid as soon after my death as may be
            reasonalbly convenient, and I hearbt authorize my Personal
            Representative, hearinafter appointed, to settle and discharge, in
            his or her absolute discretion, any claims made against my estate.
          </p>
          <p>
            I further direct that my Personal Representative shall pay out of my
            estate any and all estate and inheritance taxes payable by reason of
            my death in respect of all items included in the computation of such
            taxes, whether passing under this Will or otherwise. Said taxes
            shall be paid by Personal Representative as if such taxes were my
            debts without recovery of any part of such tax payments from anyone
            who recieves any item included in such computation.{" "}
          </p>
        </div> */}
        <label> Personal Representative</label>
        <div className="executorSection">
          I nominate and appoint <span>{execute ? execute.full_name : ""}</span>
          of
          <span>{execute ? execute.city : ""}</span>, County of
          <span>{execute ? execute.county : ""}</span>, State of{" "}
          <span>{execute ? execute.state : ""} </span> as Personal
          Representative of my estate and I request that (he /she) be appointed
          temporary Personal Representative if (he/she) applies. If my Personal
          Representative fails or ceases to so serve, then I nominate
          <span>{care ? care.Guardian_Name : ""} </span> to serve.
        </div>
        <label>iii. Disposition of Property</label>
        <div className="AssetsSection">
          I give
          <span>{infoEstate ? infoEstate.beni_name : ""} </span>currently of,{" "}
          <span>{infoEstate ? infoEstate.address : ""}</span> who is my,
          <span>{infoEstate ? infoEstate.relationbeni : ""}</span> the following
          property:
          <span>{infoEstate ? infoEstate.property : ""} </span>
          <span>{infoEstate ? infoEstate.type_of : ""} </span>.
        </div>
        <div className="GuardianSection">
          I leave my child
          <span>{care ? care.child_name : ""} </span> to be looked after by
          <span>{care ? care.Guardian_Name : ""} </span>. If he/she is unable,
          uncaple, or unwilling to then I appoint
          <span>{care ? care.alt_Guardian_Name : ""}</span> as my child's
          guardian. If he/she is unable, uncaple, or unwilling to then I appoint
          <span>{care ? care.extra_Guardian_Name : ""}</span>
          as their guardian.
        </div>
        <div className="GiftsSection">
          <span>{presents ? presents.gift : ""}</span> Gift
          <span>{presents ? presents.gift_recipient : ""}</span> Who is
          recieving the gift?
          <span>{presents ? presents.relationship_to_user : ""}</span>{" "}
          relationship to user
          <span>{presents ? presents.alternate_gift_recipient : ""}</span>{" "}
          alternative gift recipient
        </div>
        <div className="ThoughtsSection">
          <span>{ideas ? ideas.user_thoughts : ""}</span> Message to loved ones.
        </div>
        <div className="WitSection">
          <span>{witwit ? witwit.Wit_1 : ""} </span> Witness Number 1
          <span>{witwit ? witwit.Wit_2 : ""} </span> Witness Number 2
          <span>{witwit ? witwit.Date_W : ""} </span> Date they sigined
          E-Document{" "}
        </div>
      </div>
      <button onClick={myFunction}>Print this page</button>
    </div>
  )
}
