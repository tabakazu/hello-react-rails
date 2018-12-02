import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { createMicropostRequest, successCreateMicropost, failureCreateMicropost } from '../actions/micropost'

export function* handleCreateMicropost(action) {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const headers = { headers: { 'Authorization': token }}
      const micropost = yield call(createMicropostRequest, action)
      yield axios.post(`/api/v1/microposts`, micropost, headers)
      yield put(successCreateMicropost())
    }
  } catch (e) {
    yield put(failureCreateMicropost())
    console.log(e.message)
  }
}
