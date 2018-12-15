import { combineReducers } from 'redux'
import { loginReducer } from '../reducers/login'
import { userReducer } from '../reducers/user'
import { followReducer } from '../reducers/follow'

export const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  follow: followReducer
})
