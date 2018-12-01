import React from 'react'
import { connect } from 'react-redux'

class MyPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const user = this.props.state.user
    return (
      <div>
        <ul>
          <li>
            Username : {user.name}
          </li>
          <li>
            Email : {user.email}
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(MyPage)
