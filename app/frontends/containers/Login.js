import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from '../containers/login/LoginForm'

// Material UI
import Grid from '@material-ui/core/Grid'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    if (this.props.state.login.isLoading) {
      return false
    }

    return (
      this.props.state.login.isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div style={{ margin: 10 }}>
              <LoginForm />
            </div>
          </Grid>
        </Grid>
      )
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(Login)
