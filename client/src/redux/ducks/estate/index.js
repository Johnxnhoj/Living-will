import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Axios from "axios"

// action definitions

const POST_ESTATE = "estate/POST_ESTATE"
const GET_ESTATE = "estate/GET_ESTATE"

// initial state
const initialState = {
  info: [],
  estate: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_ESTATE:
      return { ...state, info: action.payload }
    case GET_ESTATE:
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

export function getAssets(id) {
  return dispatch => {
    Axios.get("/estate/estate" + id).then(resp => {
      console.log(resp.data[0])
      dispatch({
        type: GET_ESTATE,
        payload: resp.data[0]
      })
    })
  }
}
export function useEstate() {
  const dispatch = useDispatch()
  const estate = useSelector(appState => appState.AssetsState.estate)
  const getting = id => dispatch(getAssets(id))
  const grabEstateInfo = info => dispatch(postToEstate(info))
  useEffect(() => {}, [dispatch])
  return { grabEstateInfo, estate, getting }
}
