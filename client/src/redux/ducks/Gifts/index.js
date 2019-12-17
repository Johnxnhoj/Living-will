import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// ACTION DEFINITIONS
const POST_GIFTS = "gifts/POST_GIFTS"
const GET_GIFTS = "gifts/GET_GIFTS"

// INITIAL STATE
const initialState = {
  gift: [],
  info: {}
}

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_GIFTS:
      return { ...state, gift: action.payload }
    case GET_GIFTS:
      return { ...state, info: action.payload }
    default:
      return state
  }
}

// ACTION CREATORS
export function postGifts(input) {
  return dispatch => {
    axios.post("/gifts/Gifts", input).then(resp => {
      dispatch({
        type: POST_GIFTS,
        payload: resp.data
      })
    })
  }
}

export function getGifts(id) {
  return dispatch => {
    axios.get("/Gifts/Gifts" + id).then(resp => {
      dispatch({
        type: GET_GIFTS,
        payload: resp.data[0]
      })
    })
  }
}

// CUSTOM HOOKS
export function useGifts() {
  const dispatch = useDispatch()
  const presents = useSelector(appState => appState.GiftsState.info)
  const arriving = id => dispatch(getGifts(id))
  const grabGiftInfo = info => dispatch(postGifts(info))
  useEffect(() => {}, [dispatch])
  return { grabGiftInfo, presents, arriving }
}
