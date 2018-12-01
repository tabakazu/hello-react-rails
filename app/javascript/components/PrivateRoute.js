import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const isLoggedIn = this.props.state.isLoggedIn
    return (
      isLoggedIn ? (
        <div>{this.props.children}</div>
      ) : (
        <Redirect to="/login" />
      )
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(PrivateRoute)
