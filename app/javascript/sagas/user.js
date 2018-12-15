import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../actions/user'

export function* handleFetchUser(action) {
  try {
    const username = action.user.name

    if (username) {
      const user = yield axios.get(`/api/v1/users/` + username)
      const microposts = yield axios.get(`/api/v1/users/` + username + `/microposts`)
      
      yield put(fetchUserSuccess({
        user: {
          id: user.data.id,
          name: user.data.name,
          email: user.data.email,
          microposts: microposts.data
        }
      }))
    }
  } catch (e) {
    yield put(fetchUserFailure())
    console.log(e.message)
  }
}
