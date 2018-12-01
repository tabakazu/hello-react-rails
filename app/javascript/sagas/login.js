import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchLoginStateRequest, loginRequest, login } from '../actions/auth'

export function* handleFetchLoginState(){
  yield call(fetchLoginStateRequest)
  const token = localStorage.getItem('token')
  if (token) {
    const headers = { headers: { 'Authorization': token }}
    const response = yield axios.get(`/api/v1/auth/user`, headers)
    const user = {
      user: response.data
    }
    yield put(login(user))
  }
}

export function* handleLogin(action) {
  try {
    const user = yield call(loginRequest, action)
    const response = yield axios.post(`/api/v1/auth/token`, user)
    const token = response.data.token
    if (token) {
      localStorage.setItem('token', token)
      yield put(fetchLoginStateRequest())
    }
  } catch (e) {
    console.log(e.message)
  }
}
