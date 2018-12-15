import React from 'react'
import { connect } from 'react-redux'
import { fetchUserRequest } from '../actions/user'
import { fetchFollowState, createFollowtRequest, deleteFollowtRequest } from '../actions/follow'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnFollow = this.handleUnFollow.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(fetchUserRequest({
      user: {
        name: this.props.match.params.username
      }
    }))

    this.props.dispatch(fetchFollowState({
      user: {
        name: this.props.match.params.username
      }
    }))
  }

  handleFollow() {
    this.props.dispatch(createFollowtRequest({
      user: {
        name: this.props.match.params.username
      }
    }))
  }

  handleUnFollow() {
    this.props.dispatch(deleteFollowtRequest({
      user: {
        name: this.props.match.params.username
      }
    }))
  }

  render () {
    const isLoggedIn = this.props.state.login.isLoggedIn
    const microposts = this.props.state.user.microposts ? this.props.state.user.microposts : []
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
          {(() => {
            if (isLoggedIn) {
              if (!this.props.state.follow.isFollowing) {
                return (
                  <button onClick={this.handleFollow}>Follow</button>
                )
              } else {
                return (
                  <button onClick={this.handleUnFollow}>UnFollow</button>
                )
              }
            }
          })()}
          <div>
            <ul>
              {(() => {
                if (microposts) {
                  return (
                    microposts.map((micropost, i) =>
                      <li key={i}>
                        {micropost.content}
                      </li>
                    )
                  )
                }
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
