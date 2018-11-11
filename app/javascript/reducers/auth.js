const auth = (state = [], action) => {
  return [
    state, {
      isLoggedIn: true
    }
  ]
}
export default auth
