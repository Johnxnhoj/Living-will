import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

//ACTION DEFINITIONS
const POST_THOUGHTS = "Thoughts/POST_THOUGHTS"
const GET_THOUGHTS = "Thoughts/GET_THOUGHTS"

//INITIAL STATE
const initialState = {
  userThoughts: [],
  info: {}
}

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_THOUGHTS:
      return { ...state, userThoughts: action.payload }
    case GET_THOUGHTS:
      return { ...state, info: action.payload }
    default:
      return state
  }
}

//ACTION CREATORS
export function postToThoughts(textarea) {
  return dispatch => {
    Axios.post("/thoughts/Thoughts", textarea).then(resp => {
      dispatch({
        type: POST_THOUGHTS,
        payload: resp.data
      })
    })
  }
}

export function getThoughts(id) {
  return dispatch => {
    Axios.get("/thoughts/Thoughts" + id).then(resp => {
      dispatch({
        type: GET_THOUGHTS,
        payload: resp.data[0]
      })
    })
  }
}

//CUSTOM HOOKS
export function useUserThoughts() {
  const dispatch = useDispatch()
  const want = id => dispatch(getThoughts(id))
  const ideas = useSelector(appState => appState.ThoughtsState.info)
  const grabUserThoughts = userThoughts =>
    dispatch(postToThoughts(userThoughts))
  useEffect(() => {}, [dispatch])
  return { grabUserThoughts, ideas, want }
}
