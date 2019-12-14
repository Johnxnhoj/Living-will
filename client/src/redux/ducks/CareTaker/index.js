import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"
import { useEffect } from "react"
// action definitions
const POST_CARE = "CareTaker/POST_CARE"
const DELE_CARE = "CareTaker/DELE_CARE"
const GET_CARE = "CareTaker/GET_CARE"

// initial state
const initialState = {
  info: [],
  getBack: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CARE:
      return { ...state, info: action.payload }
    case GET_CARE:
      return { ...state, getBack: action.payload }
    // case DELE_CARE:
    //   return { ...state, info: info.filter(info => info.id !== action.payload) }
    default:
      return state
  }
}

///action creators
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

export function getCare(id) {
  return dispatch => {
    Axios.get("/care_taker/CareTaker" + id).then(resp => {
      dispatch({
        type: GET_CARE,
        payload: resp.data[0]
      })
    })
  }
}

///hook
export function useTakerInfo() {
  const dispatch = useDispatch()
  const guardian = useSelector(appState => appState.CareTakerState.getBack)
  const recieve = id => dispatch(getCare(id))
  const grabCareInfo = info => dispatch(postToCare(info))
  useEffect(() => {}, [dispatch])
  return { grabCareInfo, guardian, recieve }
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
//

// reducer
// action creators
// custom hooks
