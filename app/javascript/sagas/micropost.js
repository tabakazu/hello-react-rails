import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { createMicropostRequest, createMicropostSuccess, createMicropostFailure } from '../actions/micropost'

export function* handleCreateMicropost(action) {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const headers = { headers: { 'Authorization': token }}
      const micropost = action.micropost
      yield axios.post(`/api/v1/microposts`, micropost, headers)
      yield put(createMicropostSuccess())
    }
  } catch (e) {
    yield put(createMicropostFailure())
    console.log(e.message)
  }
}
