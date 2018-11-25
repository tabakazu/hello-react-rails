const initialState = {
  isLoggedIn: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST': {
      return state
    }
    default:
      return state
  }
}
