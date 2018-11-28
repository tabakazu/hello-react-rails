import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest } from '../actions/auth'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.dispatch(loginRequest({
      user: {
        email: e.target.email.value.trim(),
        password: e.target.password.value.trim()
      }
    }))
  }

  render () {
    return (
      this.props.state.isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input name="email" type="email" placeholder="Email ..." /> <br />
            <input name="password" type="password" placeholder="Password ..." /> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(Login)
