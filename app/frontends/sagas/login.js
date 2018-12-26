import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchLoginState, setLoginState, loginFailure } from '../actions/login'

export function* handleFetchLoginState(){
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const headers = { headers: { 'Authorization': token }}
      const user = yield axios.get(`/api/v1/auth/user`, headers)
      const following = yield axios.get(`/api/v1/users/` + user.data.name + `/following` , headers)
      const timelines = yield axios.get(`/api/v1/users/` + user.data.name + `/timelines` , headers)

      yield put(setLoginState({
        user: {
          id: user.data.id,
          name: user.data.name,
          email: user.data.email,
          following: following.data,
          timelines: timelines.data
        }
      }))
    } else {
      yield put(loginFailure())
    }
  } catch (e) {
    yield put(loginFailure())
    console.log(e.message)
  }
}

export function* handleLoginRequest(action) {
  try {
    const user = { user: action.user }
    const response = yield axios.post(`/api/v1/auth/token`, user)
    const token = response.data.token

    if (token) {
      localStorage.setItem('token', token)
      yield put(fetchLoginState())
    }
  } catch (e) {
    yield put(loginFailure())
    console.log(e.message)
  }
}
