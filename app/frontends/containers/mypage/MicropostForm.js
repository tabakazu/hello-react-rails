import React from 'react'
import { connect } from 'react-redux'
import { createMicropostRequest } from '../../actions/micropost'

// Material UI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class MicropostForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { content: '' }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.dispatch(createMicropostRequest({
      micropost: {
        content: e.target.content.value.trim()
      }
    }))

    e.target.reset()
    this.setState({ content: '' })
  }

  handleChange(e) {
    this.setState({ content: e.target.value })
  }

  render () {
    const inputContent = this.state.content
    const submitButton = inputContent ? (
      <Button variant="contained" color="primary" type="submit" value="Submit">
        Submit
      </Button>
    ) : (
      false
    )
    return (
      <div style={{ margin: 10 }}>
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              New Post Form
            </Typography>

            <form onSubmit={this.handleSubmit}>
              <div style={{ margin: 10 }}>
                <TextField
                  multiline={true} rows={1} rowsMax={3} variant="outlined"
                  name="content" placeholder="What's happening? ..."
                  value={this.state.content} onChange={this.handleChange}
                />
              </div>

              <div style={{ margin: 10 }}>
                {submitButton}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(MicropostForm)
