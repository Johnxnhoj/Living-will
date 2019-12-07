import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"

// action definitions

const POST_ESTATE = "estate/POST_ESTATE"

// initial state
const initialState = {
  info: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_ESTATE:
      return { ...state, info: action.payload }

    default:
      return state
  }
}

export function postToEstate(input) {
  return dispatch => {
    Axios.post("/estate/estate", input).then(resp => {
      dispatch({
        type: POST_ESTATE,
        payload: resp.data
      })
    })
  }
}

export function useEstate() {
  const dispatch = useDispatch()
  const grabEstateInfo = info => dispatch(postToEstate(info))
  return { grabEstateInfo }
}
