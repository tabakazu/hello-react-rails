import 'babel-polyfill'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { loginRequest } from '../actions/auth'

function* handleLogin(action) {
  try {
    const user = yield call(loginRequest, action)
    
    axios.post(`/api/v1/auth/token`, user)
      .then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        console.log(token)
      })
      .catch(function (error) {
        console.log(error)
      })

    console.log('成功')
  } catch (e) {
    console.log('失敗')
  }
}

export default function* rootSaga() {
  yield takeEvery('AUTH_REQUEST', handleLogin)
}
