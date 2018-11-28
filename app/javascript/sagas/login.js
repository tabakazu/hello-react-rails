import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchLoginStateRequest, loginRequest, login } from '../actions/auth'

export function* handleFetchLoginState(){
  yield call(fetchLoginStateRequest)
  const token = localStorage.getItem('token')

  if (token) {
    yield put(login())
  }
}

export function* handleLogin(action) {
  try {
    const user = yield call(loginRequest, action)

    axios.post(`/api/v1/auth/token`, user)
      .then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
      })
      .catch(function (error) {
        console.log(error)
      })

    yield put(login())

    console.log('成功')
  } catch (e) {
    console.log(e)
  }
}
