///Name: basic index
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
// import { actionButton } from "@aws-amplify/ui"

// action definitions
const POST_INFO = "basicInfo/POST_INFO"
const DELE_INFO = "basicInfo/DELE_INFO"
const GET_INFO = "basic/GET_INFO"

// initial state
const initialState = {
  user_info: [],
  info: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_INFO:
      return { ...state, user_info: action.payload }
    case GET_INFO:
      return { ...state, info: action.payload }
    // case DELE_INFO:
    //   return { ...state, user_info: info.filter(info => info.id !== action.payload) }
    default:
      return state
  }
}

////// action creators
export function postToInfo(input) {
  return dispatch => {
    axios.post("/user_info/user_info", input).then(resp => {
      dispatch({
        type: POST_INFO,
        payload: resp.data
      })
      console.log(input)
    })
  }
}

export function getBasicInfo() {
  return dispatch => {
    axios.get("/user_info/will").then(resp => {
      dispatch({
        type: GET_INFO,
        payload: resp.data
      })
    })
  }
}

// export function asyncPostToInfo(input) {
//   return dispatch => {
//     Axios.post("/user_info", { input }).then(resp => {
//       dispatch({
//         type: POST_INFO,
//         payload: resp.data
//       })
//     })
//   }
// }
// function getInfo() {
//   return dispatch => {
//     axios.get("/basicRouter")
//   }
// }

// custom hooks
export function useBasicInfo() {
  // const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()
  const get = () => dispatch(getBasicInfo())
  const grabUserInfo = info => dispatch(postToInfo(info))

  useEffect(() => {
    get()
  }, [])
  return { grabUserInfo, get }
}
