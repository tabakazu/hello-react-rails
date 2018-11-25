export const authReducer = (state = 0, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST': {
      console.log(action)
      return state + 1
    }
    default:
      return state
  }
}
