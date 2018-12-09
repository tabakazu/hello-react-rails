import React from 'react'
import { connect } from 'react-redux'
import { createMicropostRequest } from '../../actions/micropost'

class MicropostForm extends React.Component {
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
    return (
      <div>
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
export default connect(mapStateToProps)(MicropostForm)
