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
        actionType: action.type,
        isLoggedIn: true,
        user: action.user
      }
    }
    default:
      return state
  }
}
