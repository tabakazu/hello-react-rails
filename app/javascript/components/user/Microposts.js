import React from 'react'
import axios from 'axios'

class Microposts extends React.Component {
  state = {
    user: {
      name: this.props.name
    },
    microposts: []
  }

  componentDidMount() {
    axios.get(`/api/v1/users/${this.state.user.name}/microposts`).then(res => {
      const microposts = res.data;
      this.setState({microposts});
    })
  }

  render () {
    return (
      <ul>
        {this.state.microposts.map((micropost, key) =>
          <li key={key}>
            {micropost.content}
          </li>
        )}
      </ul>
    )
  }
}

export default Microposts
