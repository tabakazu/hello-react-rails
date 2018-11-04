import React from 'react'
import axios from 'axios'
import Microposts from '../components/user/Microposts'

class User extends React.Component {
  state = {
    user: {
      name: this.props.match.params.username
    }
  }

  componentDidMount() {
    axios.get(`/api/v1/users/${this.state.user.name}`).then(res => {
      const user = res.data;
      this.setState({user});
    })
  }

  render () {
    return (
      <div>
        <Microposts name={this.state.user.name} />
        <div>This is {this.state.user.name}'s User page</div>
      </div>
    )
  }
}

export default User
