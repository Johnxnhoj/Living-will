import React from "react"
import { useBasicInfo } from "../hooks/index"

export default props => {
  const { grabUserInfo, get } = useBasicInfo()
  return (
    <div>
      <div>will</div>
      <div>
        <p className="BasicInfoShowing">
          I *FullName* resident in the City of *City* County of *County*, State
          of *State*, being of sound mind, not acting under duress or undue
          influence, and fully understanding the nature and exent of all my
          property and of this .....blah blah blah.
        </p>{" "}
        <p className="executorSection">
          I nominate and appoint *ExecutorFullName* of *City, County, State* as
          Personal Representative of my estate and I request that (he /she) be
          appointed temporary PR if applies.if my PR fails or ceases
        </p>
      </div>
    </div>
  )
}
