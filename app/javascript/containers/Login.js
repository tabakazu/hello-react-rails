import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from '../containers/login/LoginForm'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      this.props.state.login.isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <LoginForm />
      )
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(Login)
