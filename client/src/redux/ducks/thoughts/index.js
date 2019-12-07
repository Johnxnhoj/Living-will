import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"

const POST_THOUGHTS = "Thoughts/POST_THOUGHTS"

const initialState = {
  userThoughts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_THOUGHTS:
      return { ...state, userThoughts: action.payload }
    default:
      return state
  }
}

export function postToThoughts(textarea) {
  return (dispatch) => {
    Axios.post("/thoughts/Thoughts", textarea).then((resp) => {
      dispatch({
        type: POST_THOUGHTS,
        payload: resp.data
      })
    })
  }
}
export function useUserThoughts() {
  const dispatch = useDispatch()
  const grabUserThoughts = (userThoughts) =>
    dispatch(postToThoughts(userThoughts))

  return { grabUserThoughts }
}
