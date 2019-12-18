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
      dispatch(getThoughts(textarea))
    })
  }
}

export function getThoughts(id) {
  return dispatch => {
    Axios.get("/thoughts/thoughts/" + id).then(resp => {
      console.log("thoughts", resp.data[0])
      dispatch({
        type: GET_THOUGHTS,
        payload: resp.data[0]
      })
    })
  }
}

//CUSTOM HOOKS
export function useUserThoughts(id) {
  const userThoughts = useSelector(
    appState => appState.ThoughtsState.userThoughts
  )
  const ideas = useSelector(appState => appState.ThoughtsState.info)
  const dispatch = useDispatch()
  // const want = id => dispatch(getThoughts(id))
  const grabUserThoughts = userThoughts =>
    dispatch(postToThoughts(userThoughts))
  useEffect(() => {
    dispatch(getThoughts(id))
  }, [dispatch])
  return { grabUserThoughts, ideas, userThoughts }
}
