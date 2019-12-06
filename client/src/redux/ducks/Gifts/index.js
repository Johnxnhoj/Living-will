// import { useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import axios from "axios"

// // ACTION DEFINITIONS
// const GET_GIFTS = "lw/GET_GIFTS"
// const GET_RECIPIENT = "lw/GET_RECIPIENT"
// const GET_RELATION = "lw/ GET_RELATION"
// const GET_ALTERNATE = "lw/GET_ALTERNATE"

// // INITIAL STATE
// const initialState = {
// 	gift: [],
// 	recipient: [],
// 	relation: [],
// 	alternate: []
// }

// // REDUCER
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_GIFTS:
// 			return { ...state, gifts: action.payload }
// 		case GET_RECIPIENT:
// 			return {...state, recipient: action.payload}
// 		case GET_RELATION:
// 			return {...state, relation: action.payload}
// 		case GET_ALTERNATE:
// 			return {...state, alternate: action.payload}
//     default:
// 			return state
// 	}
// }

// // ACTION CREATORS
// const getGFT = () => {
//   return (dispatch) => {
//     axios.get("/gifts").then((resp) => {
//       dispatch({
//         type: GET_GIFTS,
//         payload: resp.data
//       })
//     })
//   }
// }

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

// // CUSTOM HOOKS
// export function useGFT() {
//   const gift = useSelector(
//     (appState) => appState.giftState.gift
//   )
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getCats())
//   }, [dispatch])
//   return { gift }
// }
