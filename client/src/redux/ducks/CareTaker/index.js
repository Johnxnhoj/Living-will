import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"

// action definitions
const POST_CARE = "CareTaker/POST_CARE"
const DELE_CARE = "CareTaker/DELE_CARE"

// initial state
const initialState = {
  info: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CARE:
      return { ...state, info: action.payload }
    // case DELE_CARE:
    //   return { ...state, info: info.filter(info => info.id !== action.payload) }
    default:
      return state
  }
}

export function postToCare(input) {
  return dispatch => {
    Axios.post("/care_taker/CareTaker", { input }).then(resp => {
      dispatch({
        type: POST_CARE,
        payload: resp.data
      })
    })
  }
}

export function useTakerInfo() {
  const dispatch = useDispatch()
  const grabCareInfo = info => dispatch(postToCare(info))
  return { grabCareInfo }
}

// export function asyncPostToCare(input) {
//   return dispatch => {
//     Axios.post("/CareTaker", { input }).then(resp => {
//       dispatch({
//         type: POST_CARE,
//         payload: resp.data
//       })
//     })
//   }
// }
// function getCare() {
//   return dispatch => {
//     axios.get("/guardianRouter")
//   }
// }

// reducer
// action creators
// custom hooks
