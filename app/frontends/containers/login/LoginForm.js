import React from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../../actions/login'

// Material UI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      email: '',
      password: ''
    }
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

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e){
    this.setState({ password: e.target.value })
  }

  render () {
    const inputContent = this.state.email && this.state.password
    const submitButton = inputContent ? (
      <Button variant="contained" color="primary" type="submit" value="Submit">
        Submit
      </Button>
    ) : (
      false
    )

    return (
      <div style={{ margin: 10 }}>
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              Login Form
            </Typography>

            <form onSubmit={this.handleSubmit}>
              <div style={{ margin: 10 }}>
                <TextField
                  label="Email" variant="outlined"
                  name="email" type="email" placeholder="Email ..."
                  value={this.state.email} onChange={this.handleEmailChange}
                />
              </div>

              <div style={{ margin: 10 }}>
                <TextField
                  label="Password" variant="outlined"
                  name="password" type="password" placeholder="Password ..."
                  value={this.state.password} onChange={this.handlePasswordChange}
                />
              </div>

              <div style={{ margin: 10 }}>
                {submitButton}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(LoginForm)
