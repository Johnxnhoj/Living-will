import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// ACTION DEFINITIONS
const POST_GIFTS = "gifts/GET_GIFTS"
// const GET_RECIPIENT = "lw/GET_RECIPIENT"
// const GET_RELATION = "lw/ GET_RELATION"
// const GET_ALTERNATE = "lw/GET_ALTERNATE"

// INITIAL STATE
const initialState = {
  gift: []
  // recipient: [],
  // relation: [],
  // alternate: []
}

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_GIFTS:
      return { ...state, gift: action.payload }
    // case GET_RECIPIENT:
    // 	return {...state, recipient: action.payload}
    // case GET_RELATION:
    // 	return {...state, relation: action.payload}
    // case GET_ALTERNATE:
    // 	return {...state, alternate: action.payload}
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
      console.log(input)
    })
  }
}

// const getRCPT = () => {
// 	return (dispatch) => {
// 		axios.get("/recipient").then(resp) => {
// 			dispatch({
// 				type: GET_RECIPIENT,
// 				payload: resp.data
// 			})
// 		}
// 	}

// const getRLTN = () => {
// 	return (dispatch) => {
// 		axios.get("/relation").then(resp) => {
// 			dispatch({
// 				type:GET_RELATION,
// 				payload: resp.data
// 			})
// 		}
// }

// const getALT = () => {
// 	return (dispatch) => {
// 		axios.get("/alternate").then(resp) => {
// 			dispatch({
// 				type: GET_ALTERNATE,
// 				payload: resp.data
// 			})
// 		}
// }

// CUSTOM HOOKS
export function useGifts() {
  // const gift = useSelector(
  //   (appState) => appState.giftState.gift
  // )
  const dispatch = useDispatch()
  const grabGiftInfo = info => dispatch(postGifts(info))
  return { grabGiftInfo }
}
