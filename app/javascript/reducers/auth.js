import { LOGIN_REQUESTING } from '../actions/auth'

const auth = (state = [], action) => {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
      }

    default:
      return state
  }
}

export default auth
