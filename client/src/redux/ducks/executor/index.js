import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"

//ACTION DEFINITIONS
const POST_EXECUTOR = "executor/POST_EXECUTOR"

//INITIAL STATE
const initialState = {
  userExecutor: []
}

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_EXECUTOR:
      return { ...state, userExecutor: action.payload }
    default:
      return state
  }
}

//ACTION CREATORS
export function postToExecutor(input) {
  return (dispatch) => {
    Axios.post("/executor/Executor", input).then((resp) => {
      dispatch({
        type: POST_EXECUTOR,
        payload: resp.data
      })
    })
  }
}
export function useUserExecutor() {
  const dispatch = useDispatch()
  const grabUserExecutor = (userExecutor) =>
    dispatch(postToExecutor(userExecutor))

  return { grabUserExecutor }
}
