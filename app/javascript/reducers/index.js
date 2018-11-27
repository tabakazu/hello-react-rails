const initialState = {
  isLoggedIn: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STATE_REQUEST': {
      return state
    }
    case 'AUTH_REQUEST': {
      return state
    }
    case 'AUTH_SUCCESS': {
      return {
        isLoggedIn: true
      }
    }
    default:
      return state
  }
}
