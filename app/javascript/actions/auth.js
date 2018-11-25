export const loginRequest = ({ user }) => {
  return {
    type: 'AUTH_REQUEST',
    user: user
  }
}
