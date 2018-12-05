import { combineReducers } from 'redux'
import { loginReducer } from '../reducers/login'
import { micropostReducer } from '../reducers/micropost'
import { userReducer } from '../reducers/user'

export const rootReducer = combineReducers({
  login: loginReducer,
  micropost: micropostReducer,
  user: userReducer
})
