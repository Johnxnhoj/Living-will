import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"

// ACTION DEFINITIONS
const POST_CARE = "CareTaker/POST_CARE"
const GET_CARE = "CareTaker/GET_CARE"
// const DELE_CARE = "CareTaker/DELE_CARE"

// INITIAL STATE
const initialState = {
  getCT: [],
  info: {}
}

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CARE:
      return { ...state, info: action.payload }
    case GET_CARE:
      return { ...state, getCT: action.payload }
    // case DELE_CARE:
    //   return { ...state, info: info.filter(info => info.id !== action.payload) }
    default:
      return state
  }
}

//ACTION CREATORS
export function postToCare(input) {
  return (dispatch) => {
    Axios.post("/care_taker/CareTaker", { input }).then((resp) => {
      dispatch({
        type: POST_CARE,
        payload: resp.data
      })
    })
  }
}

export function getCareT(id) {
  return (dispatch) => {
    Axios.get("/care_taker/CareTaker" + id).then((resp) => {
      dispatch({
        type: GET_CARE,
        payload: resp.data[0]
      })
    })
  }
}

//CUSTOM HOOKS
export function useTakerInfo() {
  const dispatch = useDispatch()
  const careTK = useSelector((appState) => appState.CareTakerState.info)
  const get = (id) => dispatch(getCareT(id))
  const grabCareInfo = (info) => dispatch(postToCare(info))
  return { grabCareInfo, get, careTK }
}
