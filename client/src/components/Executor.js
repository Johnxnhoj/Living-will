import React from "react"
export default props => {
  return (
    <div>
      <div className="Title">Executor</div>
      <div>
        Full Name <input type="text" name="text"></input>{" "}
      </div>
      <div>
        {" "}
        City <input type="text"></input>{" "}
      </div>
      <div>
        {" "}
        County <input type="text"></input>{" "}
      </div>
      <div>
        {" "}
        State <input type="text"></input>{" "}
      </div>
    </div>
  )
}
