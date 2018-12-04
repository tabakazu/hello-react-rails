import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchLoginState, setLoginState } from '../actions/login'

export function* handleFetchLoginState(){
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const headers = { headers: { 'Authorization': token }}
      const response = yield axios.get(`/api/v1/auth/user`, headers)
      const user = {
        user: response.data
      }
      yield put(setLoginState(user))
    }
  } catch (e) {
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
    console.log(e.message)
  }
}
