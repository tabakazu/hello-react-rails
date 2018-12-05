import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../actions/user'

export function* handleFetchUser(action) {
  try {
    const username = action.user.name
    if (username) {
      const response = yield axios.get(`/api/v1/users/` + username)
      const user = response.data
      yield put(fetchUserSuccess({ user }))
    }
  } catch (e) {
    yield put(fetchUserFailure())
    console.log(e.message)
  }
}
