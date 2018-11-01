import React from 'react'

class User extends React.Component {
  render () {
    return (
      <div>This is {this.props.match.params.id}'s User page</div>
    )
  }
}

export default User
