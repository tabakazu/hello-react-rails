export const loginRequest = function loginRequest({ email, password }) {
  return {
    type: 'AUTH_REQUEST',
    email,
    password
  }
}
