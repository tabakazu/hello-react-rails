import React from 'react'
import { connect } from 'react-redux'
import { fetchUserRequest } from '../actions/user'

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchUserRequest({
      user: {
        name: this.props.match.params.username
      }
    }))
  }

  render () {
    const microposts = this.props.state.user.microposts　? this.props.state.user.microposts : []
    return (
      this.props.state.user.isFailed ? (
        <div>
          <p>Sorry, that page doesn’t exist!</p>
        </div>
      ) : (
        <div>
          <ul>
            <li>Username : {this.props.state.user.name}</li>
            <li>Email : {this.props.state.user.email}</li>
          </ul>
          <div>
            <ul>
              {(() => {
                if (microposts)
                  return (
                    microposts.map((micropost, i) =>
                      <li key={i}>
                        {micropost.content}
                      </li>
                    )
                  )
              })()}
            </ul>
          </div>
        </div>
      )
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(User)
