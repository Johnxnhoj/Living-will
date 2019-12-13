import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { decode } from "jsonwebtoken"
// import socket from "../../../lib/socket"

//action def
const LOGIN_PENDING = "admin/LOGIN_PENDING"
const LOGIN_SUCCESS = "admin/LOGIN_SUCCESS"
const LOGIN_FAILURE = "admin/LOGIN_FAILURE"
const LOGOUT = "admin/LOGOUT"
const GET_ID = "admin/GET_ID"

//inital state
const initialState = {
  id: null,
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
        username: action.payload.username,
        id: action.payload.id
      }
    case LOGIN_FAILURE:
      return { ...state, loading: false, isAuthenticated: false, username: "" }
    case LOGOUT:
      return initialState
    case GET_ID:
      return { ...state, id: action.payload }
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
        axios.defaults.headers.common = {
          Authorization: `Bearer ${resp.data.token}`
        }
        const id = resp.data.id

        dispatch({
          type: LOGIN_SUCCESS,
          payload: { username, id }
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

export function getId(username) {
  return dispatch => {
    axios.get("/users/id/" + username).then(resp => {
      dispatch({
        type: GET_ID,
        payload: resp.data
      })
    })
  }
}

export function useAdmin() {
  const username = useSelector(appState => appState.adminState.username)
  const id = useSelector(appState => appState.adminState.id)
  const isAuthenticated = useSelector(
    appState => appState.adminState.isAuthenticated
  )
  console.log(id)

  const dispatch = useDispatch()
  const signin = (u, p) => {
    dispatch({ type: LOGIN_PENDING })
    return login(u, p, dispatch)
  }
  const reg = (username, password) => {
    return register(username, password, dispatch)
  }
  const signout = () => dispatch(logout())
  // const get = () => dispatch(GetId(username))
  useEffect(() => {
    dispatch(getId(username))
  }, [dispatch, username])
  return { isAuthenticated, username, signin, signout, reg, id }
}

//useEffect call on set
