import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"
// import { useEffect } from "react"

// ACTION DEFINITIONS
const POST_WIT = "witness/POST_WIT"
const GET_WIT = "witness/GET_WIT"

// INITIAL STATE
const initialState = {
  witnessinfo: [],
  info: {}
}

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_WIT:
      return { ...state, witnessinfo: action.payload }
    case GET_WIT:
      return { ...state, info: action.payload }
    default:
      return state
  }
}

//ACTION CREATORS
//BRUH WHO NAMED IT WITWIT THO
export function postToWitWit(input) {
  return dispatch => {
    Axios.post("/witness/Witness", input).then(resp => {
      dispatch({
        type: POST_WIT,
        payload: resp.data
      })
    })
  }
}

export function getWit(id) {
  return dispatch => {
    Axios.get("/witness/Witness" + id).then(resp => {
      dispatch({
        type: GET_WIT,
        payload: resp.data[0]
      })
    })
  }
}

//CUSTOM HOOKS
export function useWitness() {
  const dispatch = useDispatch()
  const witwit = useSelector(appState => appState.witnessState.info)
  const find = id => dispatch(getWit(id))
  const grabWitnessInfo = witnessinfo => dispatch(postToWitWit(witnessinfo))
  return { grabWitnessInfo, find, witwit }
}
