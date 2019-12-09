import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"

///import { useEffect } from "react"

// action definitions
const GET_BASIC = "will/GET_INFO"
const GET_ASSETS = "will/GET_ASSETS"
const GET_CARETAKER = "will/GET_CARETAKER"
const GET_GIFTS = "will/GET_GIFTS"
const GET_THOUGHTS = "will/GET_THOUGHTS"
const GET_WITNESS = "will/GET_WITNESS"
const GET_EXECUTOR = "will/GET_EXECUTOR"
// initial state
const initialState = {
  Basic: [],
  Assets: [],
  CareTaker: [],
  Gifts: [],
  Thoughts: [],
  Witness: [],
  Executor: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BASIC:
      return { ...state, Basic: action.payload }
    case GET_ASSETS:
      return { ...state, Assets: action.payload }
    case GET_CARETAKER:
      return { ...state, CareTaker: action.payload }
    case GET_GIFTS:
      return { ...state, Gifts: action.payload }
    case GET_THOUGHTS:
      return { ...state, Thoughts: action.payload }
    case GET_WITNESS:
      return { ...state, Witness: action.payload }
    case GET_EXECUTOR:
      return { ...state, Executor: action.payload }
    default:
      return state
  }
}

// action creators
const getBasicIn = () => {
  return dispatch => {
    axios.get("/user_info").then(resp => {
      dispatch({
        type: GET_BASIC,
        payload: resp.data
      })
    })
  }
}
const getAssets = () => {
  return dispatch => {
    axios.get("/estate").then(resp => {
      dispatch({
        type: GET_ASSETS,
        payload: resp.data
      })
    })
  }
}

const getGuard = () => {
  return dispatch => {
    axios.get("/care_taker").then(resp => {
      dispatch({
        type: GET_CARETAKER,
        payload: resp.data
      })
    })
  }
}

const getGiftsInfo = () => {
  return dispatch => {
    axios.get("/gifts").then(resp => {
      dispatch({
        type: GET_GIFTS,
        payload: resp.data
      })
    })
  }
}

const getLast = () => {
  return dispatch => {
    axios.get("/thoughts").then(resp => {
      dispatch({
        type: GET_THOUGHTS,
        payload: resp.data
      })
    })
  }
}
const getWitty = () => {
  return dispatch => {
    axios.get("/witness").then(resp => {
      dispatch({
        type: GET_WITNESS,
        payload: resp.data
      })
    })
  }
}
const getExecutors = () => {
  return dispatch => {
    axios.get("/executor").then(resp => {
      dispatch({
        type: GET_EXECUTOR,
        payload: resp.data
      })
    })
  }
}
// custom hooks
export function useWill() {
  const Basic = useSelector(appState => appState.basicInfoState.Basic)
  const Assets = useSelector(appState => appState.AssetsState.Assets)
  const CareTaker = useSelector(appState => appState.CareTakerState.CareTaker)

  const Thoughts = useSelector(appState => appState.Thoughts.Thoughts)
  const Witness = useSelector(appState => appState.witnessState.Witness)
  const Executor = useSelector(appState => appState.executorState.Executor)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return { users }
}
