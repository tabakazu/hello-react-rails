const initialState = {
  isLoggedIn: false
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_STATE_REQUEST': {
      return state
    }
    case 'LOGIN_REQUEST': {
      return state
    }
    case 'LOGIN_SUCCESS': {
      return {
        isLoggedIn: true,
        user: action.user
      }
    }
    default:
      return state
  }
}
