import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const POST_BENE = "CareTaker/POST_CARE"
const DELE_BENE = "CareTaker/DELE_CARE"

// initial state
const initialState = {
  user_info: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_info:
      return { ...state, user_info: action.payload }
    default:
      return state
  }
}

// action creators
const getBaicInfo = () => {
  return dispatch => {
    axios.get("/user_info").then(resp => {
      dispatch({
        type: GET_USER_INFO,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useBasicInfo() {
  const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersInfo())
  }, [dispatch])

  return { users }
}

///Name: CareTaker index
// import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"
// import { actionButton } from "@aws-amplify/ui"
// action definitions
const POST_BENE = "CareTaker/POST_CARE"
const DELE_BENE = "CareTaker/DELE_CARE"

// initial state
const initialState = {
  beni: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CARE:
      return { ...state, beni: action.payload }
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
export function useTakerInfo() {
  const dispatch = useDispatch()
  const grabCareInfo = info => dispatch(postToCare(info))
  return { grabCareInfo }
}
