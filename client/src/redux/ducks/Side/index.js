import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const SIDE_OPEN = "SIDE_OPEN"
const SIDE_CLOSE = "SIDE_CLOSE"
const SIDE_TOGGLE = "SIDE_TOGGLE"

// initial state
const initialState = {
  toggle: false
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SIDE_TOGGLE:
      return { ...state, toggle: state.toggle ? false : true }
    default:
      return state
  }
}

// action creators
const openSide = () => {
  return {
    type: SIDE_OPEN
  }
}

const closeSide = () => {
  return {
    type: SIDE_CLOSE
  }
}

const toggleSide = () => {
  return {
    type: SIDE_TOGGLE
  }
}

// custom hooks
export function useSide() {
  const visible = useSelector(appState => appState.sideState.toggle)
  // const visible = useSelector(appState => appState.sideSate.open)
  const dispatch = useDispatch()
  const open = () => dispatch(openSide())
  const close = () => dispatch(closeSide())
  const toggle = () => dispatch(toggleSide())

  return { open, close, toggle, visible }
}
