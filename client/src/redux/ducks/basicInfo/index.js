///Name: basic index
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
// import { actionButton } from "@aws-amplify/ui"

// action definitions
const POST_INFO = "basicInfo/POST_INFO"
const DELE_INFO = "basicInfo/DELE_INFO"
const GET_INFO = "basic/GET_INFO"
// const GET_ID = "basic/GET_ID"

// initial state
const initialState = {
  user_info: [],
  info: {}
  // id: {}
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
  return (dispatch) => {
    axios.post("/user_info/user_info", input).then((resp) => {
      dispatch({
        type: POST_INFO,
        payload: resp.data
      })
      console.log(input)
    })
  }
}

// export function GetId() {
//   return (dispatch) => {
//     axios.get("/user").then((resp) => {

//       dispatch({
//         // type: Get_ID,
//         payload: resp.data
//       })
//     })
//   }
// }

export function GetId() {
  return (dispatch) => {
    axios.get("/user").then((resp) => {
      dispatch({
        // type: Get_ID,
        payload: resp.data
      })
    })
  }
}

export function getBasicInfo(id) {
  return (dispatch) => {
    axios.get("/user_info/user_info" + id).then((resp) => {
      dispatch({
        type: GET_INFO,
        payload: resp.data[0]
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
  const info = useSelector((appState) => appState.basicInfoState.info)
  const dispatch = useDispatch()
  const user_info = useSelector((appState) => appState.basicInfoState.info)
  const get = (id) => dispatch(getBasicInfo(id))
  const grabUserInfo = (info) => dispatch(postToInfo(info))

  useEffect(() => {}, [dispatch])
  return { grabUserInfo, user_info, info, get }
}
