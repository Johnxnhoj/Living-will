import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

//acton def
const GET_BENE = "estate/GET_Bene"
// const GET_SINGLE_POST = "posts/GET_SINGLE_POST"
// const CREATE_POST = "posts/CREATE_POST"

//initals State
const initalState = {
  assets: [],
  futureOwner: {}
}

//Reducer
export default (state = initalState, action) => {
  switch (action.type) {
    case GET_BENE:
      return { ...state, assets: action.payload }
    // case GET_SINGLE_POST:
    //   return { ...state, currentPost: action.payload }
    // case CREATE_POST:
    //   return {}
    default:
      return state
  }
}

//acton creators
function getEstate() {
  return dispatch => {
    axios.get("/estate/" + bene).then(resp => {
      dispatch({
        type: GET_BENE,
        payload: resp.data
      })
    })
  }
}
// function getSinglePost(postId) {
//   return dispatch => {
//     axios.get("/post/single/" + postId).then(resp => {
//       dispatch({
//         type: GET_SINGLE_POST,
//         payload: resp.data[0]
//       })
//     })
//   }
// }
//hooks
export function useProp() {
  const ben = useSelector(appState => appState.postState.ben)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEstate())
  }, [dispatch])
  return ben
}
// export function usePost(postId) {
//   const post = useSelector(appState => appState.postState.currentPost)
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getSinglePost(postId))
//   }, [dispatch, postId])
//   return post
// }
export function useCreateBene(Beni_name, Address, Property, Type_of) {
  // const dispatch = useDispatch()
  const create = (Bene_name, Address, Property, Type_of) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/estate", { Beni_name, Address, Property, Type_of })
        .then(resp => {
          // dispatch(getPosts(slug))
          resolve()
        })
        .catch(e => {
          reject()
        })
    })
  }

  return create
}
