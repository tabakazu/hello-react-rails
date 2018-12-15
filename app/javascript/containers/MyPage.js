import React from 'react'
import { connect } from 'react-redux'
import MicropostForm from '../containers/mypage/MicropostForm'
import TimelineList from '../containers/mypage/TimelineList'

class MyPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const user = this.props.state.login.user
    return (
      <div>
        <ul>
          <li>Username : {user.name}</li>
          <li>Email : {user.email}</li>
        </ul>
        <MicropostForm />
        <TimelineList />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(MyPage)
