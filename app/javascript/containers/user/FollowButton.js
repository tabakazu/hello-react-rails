import React from 'react'
import { connect } from 'react-redux'
import { createFollowtRequest, deleteFollowtRequest } from '../../actions/follow'

// Material UI
import Button from '@material-ui/core/Button'

class FollowButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnFollow = this.handleUnFollow.bind(this)
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
    const isFollowing = this.props.state.follow.isFollowing
    const btnVariant = isFollowing ? 'contained' : 'outlined'
    const btnClickHandler = isFollowing ? this.handleUnFollow : this.handleFollow
    const btnText = isFollowing ? 'Following' : 'Follow'

    if (!isLoggedIn) {
      return false
    }

    return (
      <div>
        <Button color="primary" variant={btnVariant} onClick={btnClickHandler}>
          {btnText}
        </Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(FollowButton)
