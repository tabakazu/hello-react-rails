import 'babel-polyfill'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { fetchLoginStateRequest, loginRequest, login } from '../actions/auth'

function* handleFetchLoginState(){
  yield call(fetchLoginStateRequest)
  const token = localStorage.getItem('token')

  if (token) {
    yield put(login())
  }
}

function* handleLogin(action) {
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

export default function* rootSaga() {
  yield takeEvery('AUTH_REQUEST', handleLogin)
  yield takeEvery('AUTH_STATE_REQUEST', handleFetchLoginState)
}
