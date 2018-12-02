import React from 'react'
import { connect } from 'react-redux'
import { createMicropostRequest } from '../actions/micropost'

class MyPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.dispatch(createMicropostRequest({
      micropost: {
        content: e.target.content.value.trim()
      }
    }))

    e.target.reset()
  }

  render () {
    const user = this.props.state.login.user
    return (
      <div>
        <ul>
          <li>Username : {user.name}</li>
          <li>Email : {user.email}</li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <textarea name="content" placeholder="Micropost ..."></textarea> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(MyPage)
