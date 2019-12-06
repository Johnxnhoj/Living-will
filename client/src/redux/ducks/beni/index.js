import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// // action definitions
// const GET_USERS_INFO = "basic/GET_USERS_INFO"

// // initial state
// const initialState = {
//   user_info: []
// }

// // reducer
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USERS_info:
//       return { ...state, user_info: action.payload }
//     default:
//       return state
//   }
// }

// // action creators
// const getBaicInfo = () => {
//   return dispatch => {
//     axios.get("/user_info").then(resp => {
//       dispatch({
//         type: GET_USER_INFO,
//         payload: resp.data
//       })
//     })
//   }
// }

// // custom hooks
// export function useBasicInfo() {
//   const users = useSelector(appState => appState.userState.users)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getUsersInfo())
//   }, [dispatch])

//   return { users }
}
