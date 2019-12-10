import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
// import socket from "../../../lib/socket"

//action def
const LOGIN_PENDING = "admin/LOGIN_PENDING"
const LOGIN_SUCCESS = "admin/LOGIN_SUCCESS"
const LOGIN_FAILURE = "admin/LOGIN_FAILURE"
const LOGOUT = "admin/LOGOUT"

//inital state
const initialState = {
  username: "",
  isAuthenticated: false,
  loading: false
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        username: action.payload
      }
    case LOGIN_FAILURE:
      return { ...state, loading: false, isAuthenticated: false, username: "" }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

//action creators

function login(username, password, dispatch) {
  return new Promise((resolve, reject) => {
    axios
      .post("/users/login", { username, password })
      .then(resp => {
        console.log(resp.data.token)
        axios.defaults.headers.common = {
          Authorization: `Bearer ${resp.data.token}`
        }
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username
        })
        // socket.emit("login", username)
        resolve()
      })
      .catch(e => {
        dispatch({
          type: LOGIN_FAILURE
        })
        reject()
      })
  })
}

function register(username, password, dispatch) {
  return new Promise((resolve, reject) => {
    axios
      .post("/users/register", { username, password })
      .then(resp => {
        login(username, password, dispatch).then(() => {
          resolve()
        })
      })
      .catch(e => {
        reject()
      })
  })
}

function logout() {
  axios.defaults.headers.common = { Authorization: "" }
  return {
    type: LOGOUT
  }
}

export function useAdmin() {
  const username = useSelector(appState => appState.adminState.username)
  const isAuthenticated = useSelector(
    appState => appState.adminState.isAuthenticated
  )
  const dispatch = useDispatch()
  const signin = (u, p) => {
    dispatch({ type: LOGIN_PENDING })
    return login(u, p, dispatch)
  }
  const reg = (username, password) => {
    return register(username, password, dispatch)
  }
  const signout = () => dispatch(logout())
  return { isAuthenticated, username, signin, signout, reg }
}
