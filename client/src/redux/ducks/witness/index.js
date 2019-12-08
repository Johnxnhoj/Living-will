import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"

// action definitions

const POST_WIT = "witness/POST_WIT"

// initial state
const initialState = {
  witnessinfo: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_WIT:
      return { ...state, witnessinfo: action.payload }

    default:
      return state
  }
}

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

export function useWitness() {
  const dispatch = useDispatch()
  const grabWitnessInfo = witnessinfo => dispatch(postToWitWit(witnessinfo))
  return { grabWitnessInfo }
}
