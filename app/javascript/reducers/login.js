const initialState = {
  isLoggedIn: false
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOGIN_STATE': {
      return state
    }
    case 'SET_LOGIN_STATE': {
      return {
        isLoggedIn: true,
        user: action.user
      }
    }
    case 'LOGIN_REQUEST': {
      return state
    }
    default:
      return state
  }
}
