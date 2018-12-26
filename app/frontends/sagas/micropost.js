import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchLoginState } from '../actions/login'
import { createMicropostRequest, createMicropostSuccess, createMicropostFailure } from '../actions/micropost'

export function* handleCreateMicropost(action) {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const headers = { headers: { 'Authorization': token }}
      const micropost = action.micropost
      yield axios.post(`/api/v1/microposts`, micropost, headers)
      yield put(createMicropostSuccess())
      yield put(fetchLoginState())
    }
  } catch (e) {
    yield put(createMicropostFailure())
    console.log(e.message)
  }
}
