import React from 'react'
import { connect } from 'react-redux'

class TilelineList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const timelines = this.props.state.login.user.timelines ? this.props.state.login.user.timelines : []
    console.log(timelines)
    return (
      <div>
        <ul>
          {(() => {
            if (timelines) {
              return (
                timelines.map((timeline, i) =>
                  <li key={i}>
                    {timeline.content} - @{timeline.user_name}
                  </li>
                )
              )
            }
          })()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(TilelineList)
