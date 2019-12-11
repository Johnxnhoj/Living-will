import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAdmin } from "../hooks"

import Routes from "./Routes"

export default props => {
  const { isAuthenticated } = useAdmin()

  return isAuthenticated ? <Routes /> : <Redirect to="/Login" />
}
