import React from "react"
import { Route } from "react-router-dom"
import Admin from "./Admin"

export default props => {
  return (
    <>
      <Route path="/" component={Admin} />
    </>
  )
}
