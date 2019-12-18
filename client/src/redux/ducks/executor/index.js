import Axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

//ACTION DEFINITIONS
const POST_EXECUTOR = "executor/POST_EXECUTOR"
const GET_EXECUTOR = "executor/GET_EXECUTOR"

//INITIAL STATE
const initialState = {
  userExecutor: [],
  info: {}
}

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_EXECUTOR:
      return { ...state, userExecutor: action.payload }
    case GET_EXECUTOR:
      return { ...state, info: action.payload }
    default:
      return state
  }
}

//ACTION CREATORS
export function postToExecutor(input) {
  return dispatch => {
    Axios.post("/executor/executor", input).then(resp => {
      dispatch({
        type: POST_EXECUTOR,
        payload: resp.data
      })
    })
  }
}

export function getExecutor(id) {
  return dispatch => {
    Axios.get("/executor/executor" + id).then(resp => {
      dispatch({
        type: GET_EXECUTOR,
        payload: resp.data[0]
      })
    })
  }
}

//CUSTOM HOOKS
export function useExecutor() {
  const dispatch = useDispatch()
  const execute = useSelector(appState => appState.executorState.info)
  const grab = id => dispatch(getExecutor(id))
  const grabUserExecutor = info => dispatch(postToExecutor(info))
  useEffect(() => {}, [dispatch])
  return { grabUserExecutor, grab, execute }
}
